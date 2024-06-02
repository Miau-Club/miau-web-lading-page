import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

// import { Container } from './styles';

const Footer: React.FC = () => {
    const locale = useLocale()
    const t = useTranslations('Components.footer')


    return <div className='h-full w-full gap-4 bg-miau-branding flex flex-col justify-center items-center px-10 py-4'>
        <div className='w-full flex flex-col gap-2'>
            <ul className='text-xs text-miau-white cursor-pointer'>{t("blog")}</ul>
            <ul className='text-xs text-miau-white cursor-pointer'>{t("about_us")}</ul>
            <ul className='text-xs text-miau-white cursor-pointer'>{t("terms")}</ul>
            <ul className='text-xs text-miau-white cursor-pointer'>{t("policy")}</ul>
        </div>
        <div className="flex flex-row justify-center items-center sm:justify-between gap-2 w-full">
            <div className='h-8 w-8 relative hidden sm:flex'>
                <Link href={`/${locale}`}>
                    <Image
                        src="/miau/logo.png"
                        alt="MiAu Logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </Link>
            </div>
            <h5 className='text-xs text-miau-white/80'>Copyright © {new Date().getFullYear()} MiAu Club All rights reserved.</h5>

        </div>
    </div>;
}

export { Footer };