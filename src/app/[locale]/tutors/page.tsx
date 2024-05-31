'use client'

import { Button } from '@/components/button';
import { H1 } from '@/components/h1';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';
import { RegisterModal } from '@/components/register-modal';

const SHOWCASE_ITEMS = [
    {
        title: "total_care_title",
        description: "total_care_description",
        srcImg: "/imgs/stuffs/mobile-home-showCase.png"
    },
    {
        title: "tutor_easy_life_title",
        description: "tutor_easy_life_description",
        srcImg: "/imgs/stuffs/mobile-marketplace-showcase.png"
    },
    {
        title: "pet_id_obligation_title",
        description: "pet_id_obligation_description",
        srcImg: "/imgs/stuffs/mobile-pet-id-showcase.png"
    },
    {
        title: "life_tech_title",
        description: "life_tech_description",
        srcImg: "/imgs/stuffs/mobile-tech-showcase.png"
    }
];

const Tutors: React.FC = () => {
    const t = useTranslations('Tutors');

    const [selectedItems, setSelectedItems] = useState(0);

    const [animSlider, setAnimSlide] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    useEffect(() => {

        setAnimSlide('animate-left-slide');

        const timer = setTimeout(() => {
            setAnimSlide('');
        }, 800);

        return () => clearTimeout(timer);

    }, [selectedItems, isVisible]);

    const handleItemClick = (index: number) => {
        setSelectedItems(index);
    };

    function CardIcons({ subtitle, src }: { subtitle: String, src: string }) {

        return (
            <div className='flex flex-col justify-center items-center gap-10 text-center'>
                <div className={twMerge('w-40 h-40 flex justify-center items-center')}>
                    <div className='relative w-12 h-12'>
                        <Image
                            src={src}
                            alt="Icons"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <p className='text-miau-white font-normal text-base sm:text-lg max-w-[22rem] sm:max-h-[5rem] sm:max-w-[25rem]'>{t(subtitle as any)}</p>
            </div>
        )
    }

    const GridItem = ({
        title,
        text,
        bgColor,
        textColor,
        borderColor,
        className,
        children,
        isHeader
    }: any) => (
        <div className={twMerge(`relative flex flex-col items-start justify-start pt-20 h-48 sm:h-72 gap-2 sm:gap-10 border-2 rounded-sm px-4 sm:px-12`, isHeader ? 'col-span-3 row-span-1' : 'w-[48%]', bgColor, borderColor, className)}>
            <H1 className={`${textColor} sm:text-xl text-sm`}>{t(title)}</H1>
            <p className={`${textColor} font-normal text-sm sm:text-base`}>{t(text)}</p>
            {children}
        </div>
    );

    function SealGridIcon({ color, iconSrc }: { color: string, iconSrc: string }) {
        return (<div className={twMerge('flex flex-col justify-center items-center absolute top-0 h-8 sm:h-12 w-16 rounded-b-sm rounded-t-none left-4 sm:left-12', color)}>
            <Image
                src={iconSrc}
                alt="Icon cards"
                width="20"
                height="20"
            />
        </div>)
    }

    return (
        <div >
            <div className='h-screen w-full sm:px-40 flex flex-col items-center justify-center bg-blue-bgTutors '>
                <h3 className='text-miau-yellow font-normal text-base'>{t("integrated_ecosystem")}</h3>
                <div className="flex flex-col text-center gap-4 pt-8 justify-start items-center relative h-[60%] w-full sm:w-[50%] bg-blue-bgTutors bg-[linear-gradient(to_right,#295AD7,transparent_2px),linear-gradient(to_bottom,#295AD7,transparent_2px)] bg-[size:6rem_4rem] rounded-sm">
                    <H1>{t("everything_pet")}</H1>
                    <h2 className='text-miau-white/60 font-normal max-w-[22rem] text-base sm:text-lg sm:max-w-[35rem]'>{t("practicality_health")}</h2>
                </div>
                <div className="h-[35%] w-full absolute bottom-[5%] sm:h-[50%]">
                    <Image
                        src="/imgs/stuffs/mobile-tutors-overview.png"
                        alt="Miau Home Image"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className='flex flex-col justify-start sm:justify-center items-center sm:flex-row w-full h-[150vh] sm:h-[90vh] bg-blue-bgTutors bg-[radial-gradient(#F7F7F710_1px,transparent_1px)] [background-size:16px_16px] gap-24'>
                <CardIcons
                    src='/icons/download.svg'
                    subtitle={`direct_connection`} />
                <CardIcons
                    src='/icons/ia.svg'
                    subtitle={'ai_adapts'} />
                <CardIcons
                    src='/icons/config.svg'
                    subtitle={'personalized_suggestions'}
                />
            </div>

            <div className='flex 
                justify-center
                items-center 
                px-4
                sm:px-10 
                h-[150vh]
                w-full 
                bg-blue-bgTutors 
                bg-[linear-gradient(to_right,#F7F7F720,transparent_2px),linear-gradient(to_bottom,#F7F7F720,transparent_2px)] 
                bg-[size:6rem_4rem] 
                rounded-sm'
            >
                <div className='flex flex-col sm:flex-row items-center justify-center w-screen h-[120vh] sm:h-[90vh] sm:w-[80vw] bg-miau-white/50 rounded-md gap-8'>
                    <div className='overflow-hidden relative w-[90%] h-[45vh] px-5 sm:px-0 sm:h-[80vh] sm:w-[40vw] bg-miau-branding rounded-sm py-4'>
                        <div className="absolute top-[2.5rem] hidden sm:block left-[3.2rem] w-1 h-[85%] bg-miau-white rounded-md" />
                        {SHOWCASE_ITEMS.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start justify-center relative mb-10 cursor-pointer gap-4 sm:pl-10"
                                onClick={() => handleItemClick(index)}
                            >
                                <div className={twMerge("relative flex flex-row gap-4 w-[100%] rounded-sm h-10", `${selectedItems == index ? 'bg-miau-blueLight/15 py-8 px-10 items-center' : ''}`)}>
                                    <div className={`transition-colors duration-600 rounded-full flex-shrink-0 w-6 h-6 outline outline-[0.15rem] sm:outline-[0.2rem] outline-miau-white ${selectedItems == index ? 'bg-miau-yellow absolute left-0' : 'bg-miau-blueContrast'}`} />
                                    <h2 className="text-sm sm:text-base text-miau-white font-bold max-w-[22rem]">{t(item.title as any)}</h2>
                                </div>
                                <p className={twMerge('transition-colors duration-700 text-miau-blueContrast text-sm font-normal hidden sm:block max-w-[22rem] ml-10', `${selectedItems == index ? 'text-miau-white' : 'text-miau-blueContrast'}`)}>{t(item.description as any)}</p>
                            </div>
                        ))}
                    </div>

                    <div
                        ref={imageRef}
                        className={twMerge('relative w-80 h-80 sm:hidden', animSlider)}>
                        <Image
                            src={SHOWCASE_ITEMS[selectedItems].srcImg}
                            alt="Mobile Show Case Pet Scan"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>

                    <div className='
                        hidden
                        sm:flex
                        justify-center items-center
                        h-[10vh]
                        sm:h-[75vh]
                        sm:w-[20vw]
                        bg-[linear-gradient(to_right,#E3EFF7,transparent_2px),linear-gradient(to_bottom,#E3EFF7,transparent_2px)] 
                        bg-[size:6rem_4rem]'>
                        <div
                            ref={imageRef}
                            className={twMerge('relative w-[100%] h-[90%]', animSlider)}>
                            <Image
                                src={SHOWCASE_ITEMS[selectedItems].srcImg}
                                alt="Mobile Show Case Pet Scan"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-full sm:h-[120vh] bg-gradient-to-b from-blue-bgTutors to-miau-blueContrast flex justify-center items-center'>

                <div className='grid grid-cols-3 grid-rows-6 sm:grid-rows-3 gap-4 px-8 sm:w-[90rem]'>
                    <GridItem
                        isHeader
                        title='farewell_paperwork_title'
                        text='farewell_paperwork_text'
                        bgColor='bg-miau-white'
                        textColor='text-miau-blueDark'
                        borderColor='border-miau-blueDark/60'
                        className='pt-14 sm:pt-20'
                    >
                        <SealGridIcon color={'bg-miau-blueDark/60'} iconSrc='/icons/file-close.svg' />
                        <RegisterModal >
                            <Button
                                onClick={() => { }}
                                classname='bg-miau-blueDark hover:bg-miau-blueDark/90'
                                text={t("register_btn")}
                            />
                        </RegisterModal>

                    </GridItem>

                    <div className='flex flex-row justify-between col-span-3 row-span-2 sm:row-span-1 '>
                        <GridItem
                            title='direct_connections_title'
                            text='direct_connections_text'
                            bgColor='bg-miau-blueLight'
                            textColor='text-miau-white'
                            borderColor='border-miau-white/50'
                            className="sm:w-[49.5%] h-[100%]"
                        >
                            <SealGridIcon color={'bg-miau-white/50'} iconSrc='/icons/loader.svg' />
                        </GridItem>
                        <GridItem
                            title='convenience_title'
                            text='convenience_text'
                            bgColor='bg-miau-blueLight'
                            textColor='text-miau-white'
                            borderColor='border-miau-white/50'
                            className="sm:w-[49.5%] h-[100%]"
                        >
                            <SealGridIcon color={'bg-miau-white/50'} iconSrc='/icons/grid.svg' />
                        </GridItem>
                    </div>

                    <GridItem
                        isHeader
                        title='free_platform_title'
                        text='free_platform_text'
                        bgColor='bg-miau-white'
                        textColor='text-miau-blueDark'
                        borderColor='border-miau-blueDark/60'
                        className='sm:col-span-1 pt-14 sm:pt-20'
                    >
                        <SealGridIcon color={'bg-miau-blueDark/60'} iconSrc='/icons/currency-dolar.svg' />
                    </GridItem>

                    {/* Web view */}
                    <GridItem
                        title='feedback_support_title'
                        text='feedback_support_text'
                        bgColor='bg-miau-blueLight'
                        textColor='text-miau-white'
                        borderColor='border-miau-white/50'
                        className='relative hidden sm:flex flex-col col-span-1 px-8 w-full'
                    >
                        <SealGridIcon color={'bg-miau-white/50'} iconSrc='/icons/activity.svg' />
                    </GridItem>
                    <GridItem
                        title='pet_adoption_title'
                        text='pet_adoption_text'
                        bgColor='bg-miau-blueLight'
                        textColor='text-miau-white'
                        borderColor='border-miau-white/50'
                        className='relative hidden sm:flex flex-col col-span-1 px-8 w-full'
                    >
                        <SealGridIcon color={'bg-miau-white/50'} iconSrc='/icons/cake.svg' />
                    </GridItem>

                    {/* Mobile view */}
                    <div className='flex flex-row justify-between col-span-3 row-span-2 sm:hidden'>
                        <GridItem
                            title='feedback_support_title'
                            text='feedback_support_text'
                            bgColor='bg-miau-white'
                            textColor='text-miau-blueDark'
                            borderColor='border-miau-blueDark/60'
                            className="h-[100%]"

                        >
                            <SealGridIcon color={'bg-miau-blueDark/60'} iconSrc='/icons/activity.svg' />
                        </GridItem>
                        <GridItem
                            title='pet_adoption_title'
                            text='pet_adoption_text'
                            bgColor='bg-miau-blueLight'
                            textColor='text-miau-white'
                            borderColor='border-miau-white/50'
                            className="h-[100%]"

                        >
                            <SealGridIcon color={'bg-miau-white/50'} iconSrc='/icons/cake.svg' />
                        </GridItem>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Tutors