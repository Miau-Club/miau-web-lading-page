import React, { useEffect, useRef, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { Input } from './ui/input';
import { Button } from './button';
import { Button as ButtonUI } from './ui/button';

import { SelectCustom, SelectCustomItem } from './select';
import { Label } from './ui/label';
import Image from 'next/image';
import { LoadingSpinner } from './loading-spinner';
import { useToast } from "@/components/ui/use-toast";
import { twMerge } from 'tailwind-merge';
import { useLocale, useTranslations } from "next-intl"
import { ClipboardCopyIcon } from "@radix-ui/react-icons"

const RegisterModal: React.FC<{ children: any, initMail?: string }> = ({ children, initMail }) => {
    const t = useTranslations("Components.register_modal")
    const { toast } = useToast();

    const locale = useLocale()


    const [form, setForm] = useState<{
        mail: string,
        type: string,
        id: null | number,
        referral: null | string,
        name: string,
        pet: 'dog' | 'cat' | 'both' | 'na',
        phone: string
    }>({
        mail: '',
        type: 'tutor',
        id: null,
        referral: null,
        name: '',
        pet: 'na',
        phone: ''
    });
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const copyRef = useRef(null);


    useEffect(() => {
        setForm({ ...form, mail: initMail ?? "" })
    }, [initMail])

    async function handleRegister() {
        if (!form.mail || form.mail.trim().localeCompare("", undefined, { sensitivity: "base" }) === 0
        ) {
            toast({
                title: t("mail_toast"),
                description: t("mail_toast_description"),
            });
            return;
        }

        if (!form.phone || form.phone.length < 5 || form.phone.trim().localeCompare("", undefined, { sensitivity: "base" }) === 0
        ) {
            toast({
                title: t("phone_toast"),
                description: t("phone_toast_description"),
            });
            return;
        }

        if (!form.name || form?.name.length < 3 || form.name.trim().localeCompare("", undefined, { sensitivity: "base" }) === 0
        ) {
            toast({
                title: t("name_toast"),
                description: t("name_toast_description"),
            });
            return;
        }


        try {
            setLoading(true);

            const response = await fetch('/api/wait', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mail: form.mail,
                    type: form.type,
                    name: form.name,
                    phone: form.phone,
                    pet: form.pet,
                    language: locale === 'br' ? 'BR' : 'US'

                }),
            });

            if (response.status > 400) {
                throw await response.json();
            }

            const { referral, id }: { referral: string, id: number } = await response.json();


            setForm({ ...form, id: id, referral: referral })
        } catch (error: any) {

            console.log(error)

            const field = error?.error[0]?.field;

            if (field === 'invalid_phone') {
                toast({
                    title: t("phone_toast"),
                    description: t("phone_toast_description"),
                });
                return
            }

            if (field === 'invalid_name') {
                toast({
                    title: t("name_toast"),
                    description: t("name_toast_description"),
                });
                return
            }

            if (field === 'invalid_mail') {
                toast({
                    title: t("mail_toast"),
                    description: t("mail_toast_description"),
                });
                return
            }

            toast({
                title: t("server_toast"),
                description: t("server_toast_description"),
            });

        } finally {
            setLoading(false);
        }
    }

    function ContentRegister() {

        if (form.id && form.referral) {
            return;
        }


        if (!loading) {
            return (
                <div className='flex flex-col justify-between bg-transparent bg-[linear-gradient(to_right,#F7F7F710,transparent_2px),linear-gradient(to_bottom,#F7F7F710,transparent_2px)] bg-[size:6rem_4rem]'>
                    <DialogHeader className='pt-4 sm:pt-0'>
                        <DialogTitle className='text-miau-white'>{t("connected_environment")}</DialogTitle>
                        <DialogDescription className='text-miau-white/60'>
                            {t("connected_environment_subtitle")}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 px-2">
                        <div className="grid grid-cols-2 items-center justify-start gap-2">
                            <Input
                                onChangeCapture={e => setForm({ ...form, name: e.currentTarget.value })}
                                id='name'
                                type="text"
                                defaultValue={form.name}
                                placeholder={t("name")}
                                className='bg-white text-miau-black'
                            />
                            <Input
                                onChangeCapture={e => setForm({ ...form, mail: e.currentTarget.value })}
                                id='mail'
                                type="email"
                                defaultValue={form.mail}
                                placeholder={t("mail_is")}
                                className='bg-white text-miau-black'
                            />
                        </div>
                        <div className="grid grid-cols-2 items-center justify-start gap-2">
                            <Label className='text-miau-white' htmlFor='types'>{t("phone_label")}</Label>
                            <Input
                                onChangeCapture={e => setForm({ ...form, phone: e.currentTarget.value })}
                                id='name'
                                type="number"
                                defaultValue={form.phone}
                                placeholder={t("phone_placeholder")}
                                className='bg-white text-miau-black'
                            />
                        </div>
                        {
                            form.type !== 'pet-tech' &&
                            <div className="grid grid-cols-2 items-center">
                                <Label className='text-miau-white' htmlFor='types'>{t("pet_label")}</Label>
                                <SelectCustom
                                    id={'types'}
                                    onChange={(e) => setForm({ ...form, pet: e as any })}
                                    defaultValue='na'
                                    className='bg-miau-blueLight font-bold sm:mw-60'>
                                    <SelectCustomItem value='dog' description={t("dog_selector")} />
                                    <SelectCustomItem value='cat' description={t("cat_selector")} />
                                    <SelectCustomItem value='both' description={t("both_selector")} />
                                    <SelectCustomItem value='na' description={t("na_selector")} />
                                </SelectCustom>
                            </div>
                        }
                        <div className="grid grid-cols-2 items-center">
                            <Label className='text-miau-white' htmlFor='types'>{t("am_i")}</Label>
                            <SelectCustom
                                id={'types'}
                                onChange={(e) => setForm({ ...form, type: e })}
                                defaultValue='tutor'
                                className='bg-miau-blueLight font-bold sm:mw-60'>
                                <SelectCustomItem value='tutor' description={t("tutor")} />
                                <SelectCustomItem value='pet-tech' description={t("pet_tech")} />
                                <SelectCustomItem value='partner' description={t("pet_professional")} />
                            </SelectCustom>
                        </div>
                    </div>
                    <DialogFooter className='gap-2'>
                        <div className={"flex flex-row relative justify-center items-center gap-4"}>
                            <p className='text-base text-miau-white/50 font-thin'>{t("share")}</p>
                            {[
                                { src: "/imgs/instagram.svg", alt: "Instagram", href: "https://www.instagram.com/miauclubapp/" },
                                { src: "/imgs/tik-tok.svg", alt: "TikTok", href: "https://www.tiktok.com/@miauclubapp" }
                            ].map(({ src, alt, href }) => {
                                return (
                                    <a href={href} key={alt}>
                                        <Image
                                            src={src}
                                            alt={alt}
                                            width={22}
                                            height={22}
                                            quality={100}
                                            priority
                                        />
                                    </a>
                                )
                            })}
                        </div>
                        <Button text={t("register_button")} variant='secondary' onClick={handleRegister} />
                    </DialogFooter>
                </div>
            )
        }

        return null
    }

    function SuccessRegister() {

        if (!form.id && !form.referral) {
            return
        }

        const htmlUrl = `https://www.miauclub.com.br/?code=${form.referral}`

        return (
            <div className='flex flex-col items-center gap-8 sm:gap-4 text-center bg-transparent bg-[linear-gradient(to_right,#F7F7F710,transparent_2px),linear-gradient(to_bottom,#F7F7F710,transparent_2px)] bg-[size:6rem_4rem]'>
                <h3 className='font-bold text-miau-white max-w-[30rem]'>{t("thankyou_register")}</h3>

                <div className='h-10 w-full rounded-sm bg-miau-black justify-center items-center flex'>
                    <p className='text-miau-yellowDark text-base'>{t("count_one")} <span className='font-bold text-miau-yellow'>{form?.id}</span> {t("count_two")}</p>
                </div>

                <h2 className='text-miau-white/80 font-bold' >{t("early_access")}</h2>

                <div className=" flex flex-row justify-center items-center rounded-md border border-miau-white/80 px-4 py-2 font-mono text-sm shadow-sm text-miau-white">
                    <p ref={copyRef} >{htmlUrl}</p>

                    <ButtonUI
                        onClick={() => {
                            if (navigator.clipboard) {
                                navigator.clipboard.writeText(htmlUrl)
                            } else {
                                const textElement = copyRef.current;

                                if (textElement) {
                                    const range = document.createRange();
                                    range.selectNodeContents(textElement);
                                    const selection = window.getSelection();
                                    selection?.removeAllRanges();
                                    selection?.addRange(range);

                                    document.execCommand('copy');

                                    selection?.removeAllRanges();
                                }
                            }
                        }}
                        variant="outline"
                        className='bg-miau-white border-miau-grayDark ml-4 hover:bg-miau-white/80 ' size="icon">
                        <ClipboardCopyIcon className="h-4 w-4 text-miau-black " />
                    </ButtonUI>
                </div>
                <h2 className='text-miau-white/80 text-sm font-light' >{t("early_access_description")}</h2>

            </div>
        )
    }

    return (
        <>
            <Dialog onOpenChange={(open) => setIsOpen(open)}>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className={twMerge(
                    "sm:max-w-[50rem] w-[95vw] justify-center rounded-sm bg-miau-branding border-miau-blueLight z-50",
                    loading ? '' : 'h-[65vh] sm:h-[40vh]')}
                >
                    {loading && <LoadingSpinner className='text-miau-white' />}
                    {ContentRegister()}
                    <SuccessRegister />

                </DialogContent>
            </Dialog>
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-20"></div>}

        </>
    );
};

export { RegisterModal };
