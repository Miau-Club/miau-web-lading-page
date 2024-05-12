'use client'

import Image from 'next/image'
import { useState } from "react";
import { Button } from "./button";
import { MiauMenuBar } from "./menuBar";
import { twMerge } from 'tailwind-merge';

const NavigationMenu = (props: any) => {

    const [enabled, setEnabled] = useState(false)

    return (
        <div className={twMerge("flex transition-height duration-500 items-center bg-navigationBar px-8 justify-between h-16 flex-row z-50 absolute right-0 top-0 w-screen", enabled && 'justify-evenly h-screen gap-8 flex-col overflow-hidden')}
        >
            <div className="h-12 w-12 relative ">
                <Image
                    src="/miau/logo.png"
                    alt="MiAu Logo"
                    layout="fill"
                    objectFit="contain"
                />
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
                        { href: '/', item: 'Home' },
                        { href: '/tutors', item: 'Para Tutores' },
                        { href: '/partners', item: 'Para Parceiros' },
                        { href: '/about', item: 'Sobre' }
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
                <Button text="Inscreva-se" onClick={() => { }}  />

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