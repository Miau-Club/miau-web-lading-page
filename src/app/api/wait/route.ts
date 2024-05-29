import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  const { mail, type }: { mail: string; type: string } = await request.json();

  if (
    !mail || !type || !isValidEmail(mail ?? "") ||
    type?.trim()?.localeCompare("", undefined, { sensitivity: "base" }) === 0
  ) {
    return NextResponse.json({ error: "Invalid Business rules" }, {
      status: 422,
    });
  }

  const referral = generateRandomCode(5);

  const result = await sql`INSERT INTO public.wait_list (mail, referrals, type)
                           VALUES (${mail}, ${referral}, ${type})
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
