'use client'

import Image from 'next/image'
import { useState } from "react";
import { Button } from "./button";
import { MiauMenuBar } from "./menuBar";
import { twMerge } from 'tailwind-merge';
import { RegisterModal } from './register-modal';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl'
import { SelectCustom, SelectCustomItem } from './select';
import { useRouter } from "next/navigation"

const NavigationMenu = ({ }) => {

    const t = useTranslations("Components.navigation_menu")
    const locale = useLocale()
    const router = useRouter()

    const [enabled, setEnabled] = useState(false)


    function changeLanguage(e: any) {
        const newLocale = e;
        const segments = window.location.pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');
        router.push(newPath);
    };

    return (
        <div className={twMerge("flex transition-height duration-500 items-center bg-blue-navigationBar/15 px-8 justify-between h-16 flex-row z-50 absolute right-0 top-0 w-screen", enabled && 'justify-evenly h-screen gap-8 flex-col overflow-hidden bg-blue-navigationBar')}
        >
            <div className="h-12 w-12 relative ">
                <Link href={`/${locale}`}>
                    <Image
                        src="/miau/logo.png"
                        alt="MiAu Logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </Link>
            </div>
            <div className={twMerge("flex gap-8 justify-center items-center ", enabled ? 'flex-col' : 'flex-row')}>
                <MiauMenuBar
                    onClick={() => {
                        if (enabled) {
                            setEnabled(!enabled)
                        }
                    }}

                    menuBarClassname={twMerge("sm:flex", enabled ? 'flex' : 'hidden')}
                    items={[
                        { href: `/${locale}`, item: t("home") },
                        { href: `/${locale}/tutors`, item: t("tutors") },
                        { href: `/${locale}/partners`, item: t("partners") },
                    ]}
                />

                <nav className={twMerge("flex-row items-center hidden gap-4 sm:flex ", enabled && 'flex flex-col gap-8')}>
                    {[
                        { src: "/imgs/instagram.svg", alt: "Instagram", href: "https://www.instagram.com/miauclubapp/" },
                        { src: "/imgs/tik-tok.svg", alt: "TikTok", href: "https://www.tiktok.com/@miauclubapp" }
                    ].map(({ src, alt, href }) => {
                        return (
                            <a href={href}>
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

                </nav>

                <RegisterModal >
                    <Button text={t("register_btn")} onClick={() => { }} />
                </RegisterModal>

                <SelectCustom
                    onChange={changeLanguage}
                    className={twMerge('hidden sm:flex', enabled && 'flex')}
                    defaultValue={locale}>
                    <SelectCustomItem value='br' description={t("pt")} />
                    <SelectCustomItem value='en' description={t("en")} />
                </SelectCustom>

                <div className={"w-4 h-4 relative sm:hidden"} onClick={() => setEnabled(!enabled)}>
                    {!enabled &&
                        <Image

                            src="/icons/menu.svg"
                            alt="Menu icon"
                            layout="fill"
                            objectFit="contain"
                        />}

                    {enabled && <Image
                        src="/icons/close.svg"
                        alt="Menu icon"
                        layout="fill"
                        objectFit="contain"
                    />}
                </div>
            </div>
        </div >
    )
}


export { NavigationMenu }