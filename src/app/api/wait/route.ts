import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const runtime = "edge";

export async function POST(request: Request) {
  const { mail, type, name, phone, pet, language }: {
    mail: string;
    type: string;
    name: string;
    phone: string;
    pet: string;
    language: "BR" | "US";
  } = await request.json();

  if (
    stringComparer(pet, "") ||
    (stringComparer(pet, "") && stringComparer(type, "tutor"))
  ) {
    return NextResponse.json({
      message: "Invalid Pet",
      error: [{
        field: "invalid_pet",
        validation: "Invalid Pet",
      }],
    }, {
      status: 422,
    });
  }

  if (!isValidName(name)) {
    return NextResponse.json({
      message: "Invalid Name",
      error: [{
        field: "invalid_name",
        validation: "Invalid Name",
      }],
    }, {
      status: 422,
    });
  }

  if (!isValidPhoneNumber(phone, language)) {
    return NextResponse.json({
      message: "Invalid Phone",
      error: [{
        field: "invalid_phone",
        validation: "Invalid Phone",
      }],
    }, {
      status: 422,
    });
  }

  if (stringComparer(type, "")) {
    return NextResponse.json({
      message: "Invalid Type",
      error: [{
        field: "invalid_type",
        validation: "Invalid type",
      }],
    }, {
      status: 422,
    });
  }

  if (!isValidEmail(mail ?? "")) {
    return NextResponse.json({
      message: "Invalid mail",
      error: [{
        field: "invalid_mail",
        validation: "Invalid Mail",
      }],
    }, {
      status: 422,
    });
  }

  const user = await sql<
    { mail: string; referrals: string; id: number }
  >`select id,mail,referrals from wait_list where mail = ${mail.toLowerCase()}`;

  if (user.rowCount > 0) {
    return Response.json({
      referral: user.rows[0].referrals,
      id: user.rows[0].id,
    });
  }

  const referral = generateRandomCode(5);

  const result = await sql<
    { id: number }
  >`INSERT INTO public.wait_list (mail, referrals, type,name,pet,phone,language)
                           VALUES (${mail.toLowerCase()}, ${referral}, ${type},${name},${pet},${phone},${language})
                           RETURNING id;`;

  return Response.json({ referral: referral, id: result["rows"][0].id });
}

function generateRandomCode(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function stringComparer(compare1: string, compare2: string) {
  if (!compare1) {
    return false;
  }

  return compare1?.trim()?.localeCompare(compare2, undefined, {
    sensitivity: "base",
  }) === 0;
}

function isValidPhoneNumber(phoneNumber: string, countryCode: any) {
  if (stringComparer(phoneNumber, "")) {
    return false;
  }

  const phoneNumberParsed = parsePhoneNumberFromString(
    phoneNumber,
    countryCode,
  );
  return phoneNumberParsed ? phoneNumberParsed.isValid() : false;
}

function isValidName(name: string) {
  if (stringComparer(name, "")) {
    return false;
  }

  return name.length > 3;
}
