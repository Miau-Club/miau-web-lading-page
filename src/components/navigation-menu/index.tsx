'use client'

import Link from "next/link";
import styles from "./style.module.css";
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from "../button";

const LINK_PATHS = [
    { href: '/', name: 'Home' },
    { href: '/tutors', name: 'Para Tutores' },
    { href: '/partners', name: 'Para Parceiros' },
    { href: '/about', name: 'Sobre' }
]

const NavigationMenu = (props: any) => {

    const pathname = usePathname()


    return (
        <div className={styles.main}>
            <Image
                src="/miau/logo.svg"
                alt="MiAu Logo"
                width={180}
                height={40}
                priority
            />
            <div className={styles.linkContainer}>
                <div className={styles.itensMenuContainer}>
                    {
                        LINK_PATHS.map(({ href, name }) => {

                            const pathIndex = pathname.indexOf("/", pathname.indexOf("/") + 1);

                            const cuttedPath = pathIndex !== -1 ? pathname.substring(0, pathIndex) : pathname;

                            if (cuttedPath === href) {
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={styles.linkSelectedMenuItem}>{name}
                                    </Link>
                                )
                            }

                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={styles.linkMenuItem}>{name}
                                </Link>
                            )
                        })
                    }
                </div>
                <div className={styles.socialContainer}>
                    {[
                        { src: "/imgs/instagram.svg", alt: "Instagram" },
                        { src: "/imgs/tik-tok.svg", alt: "TikTok" }
                    ].map(({ src, alt }) => {
                        return <Image
                            className={styles.mouseHover}
                            src={src}
                            alt={alt}
                            width={20}
                            height={20}
                            priority
                        />
                    })}

                    <Button text="Inscreva-se"/>
                </div>
            </div>
        </div>
    )

}


export { NavigationMenu }