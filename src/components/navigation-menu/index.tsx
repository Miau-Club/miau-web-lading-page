'use client'

import Link from "next/link";
import styles from "./style.module.css";
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from "../button";
import { useEffect, useRef, useState } from "react";
import Head from 'next/head'

const LINK_PATHS = [
    { href: '/', name: 'Home' },
    { href: '/tutors', name: 'Para Tutores' },
    // { href: '/partners', name: 'Para Parceiros' },
    { href: '/about', name: 'Sobre' }
]

const NavigationMenu = (props: any) => {

    const pathname = usePathname()

    const [navOn, setNavOn] = useState(false)

    function showNav() {
        setNavOn(!navOn)
    }

    return (
        <>
            <Head>
                <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
                <script dangerouslySetInnerHTML={{
                    __html: `
                    function googleTranslateElementInit() {
                        new google.translate.TranslateElement({ pageLanguage: 'en', 'google_translate_element' })
                    }
                    `,
                }} />
            </Head >
            <header className={`${styles.main} ${navOn ? styles.responsiveNav : ''}`
            }>
                <Image
                    src="/miau/logo.png"
                    alt="MiAu Logo"
                    width={50}
                    height={40}
                    quality={100}
                    priority
                />
                <div id="google_translate_element" />
                <div className={`${styles.linkContainer} ${navOn ? '' : styles.hide}`}>
                    <nav className={styles.itensMenuContainer} >
                        {
                            LINK_PATHS.map(({ href, name }) => {

                                const pathIndex = pathname.indexOf("/", pathname.indexOf("/") + 1);

                                const cuttedPath = pathIndex !== -1 ? pathname.substring(0, pathIndex) : pathname;

                                if (cuttedPath === href) {
                                    return (
                                        <Link
                                            onClick={showNav}
                                            key={href}
                                            href={href}
                                            className={styles.linkSelectedMenuItem}>{name}
                                        </Link>
                                    )
                                }

                                return (
                                    <Link
                                        onClick={showNav}
                                        key={href}
                                        href={href}
                                        className={styles.linkMenuItem}>{name}
                                    </Link>
                                )
                            })
                        }
                    </nav>
                    <nav className={styles.socialContainer}>
                        {[
                            { src: "/imgs/instagram.png", alt: "Instagram", href: "https://www.instagram.com/miauclubapp/" },
                            { src: "/imgs/tik-tok.svg", alt: "TikTok", href: "https://www.tiktok.com/@miauclubapp" }
                        ].map(({ src, alt, href }) => {
                            return (
                                <a href={href}>
                                    <Image
                                        className={styles.mouseHover}
                                        src={src}
                                        alt={alt}
                                        width={20}
                                        height={20}
                                        quality={100}
                                        priority
                                    />
                                </a>
                            )
                        })}

                        <Button text="Inscreva-se" />
                    </nav>

                </div>
                <Button text="Inscreva-se" />

                <nav id={styles.navIcon}>

                    {navOn &&
                        <Image
                            onClick={showNav}
                            src="/icons/close.svg"
                            alt="Menu icon"
                            width={20}
                            height={20}
                            quality={100}
                        />
                    }
                    {!navOn && <Image
                        onClick={showNav}
                        src="/icons/menu.svg"
                        alt="Close icon"
                        width={20}
                        height={20}
                        quality={100}
                    />}
                </nav>
            </header >
        </>
    )

}


export { NavigationMenu }