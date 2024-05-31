'use client'

import { Button } from '@/components/button';
import { H1 } from '@/components/h1';
import { RegisterModal } from '@/components/register-modal';
import { Input } from '@/components/ui/input';
import { useOnViewIndexScreen } from '@/lib/hooks';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';


const SHOWCASE_PARTNERS = [
    {
        "title": "MedicoVeterinario_title",
        "subtitle": "MedicoVeterinario_subtitle",
        "insights": [
            "MedicoVeterinario_insights_0",
            "MedicoVeterinario_insights_1",
            "MedicoVeterinario_insights_2",
            "MedicoVeterinario_insights_3"
        ]
    },
    {
        "title": "ProfissionaisPet_title",
        "subtitle": "ProfissionaisPet_subtitle",
        "insights": [
            "ProfissionaisPet_insights_0",
            "ProfissionaisPet_insights_1",
            "ProfissionaisPet_insights_2",
            "ProfissionaisPet_insights_3"
        ]
    },
    {
        "title": "LojasOnlinePetshops_title",
        "subtitle": "LojasOnlinePetshops_subtitle",
        "insights": [
            "LojasOnlinePetshops_insights_0",
            "LojasOnlinePetshops_insights_1",
            "LojasOnlinePetshops_insights_2",
            "LojasOnlinePetshops_insights_3"
        ]
    },
    {
        "title": "Estabelecimentos_title",
        "subtitle": "Estabelecimentos_subtitle",
        "insights": [
            "Estabelecimentos_insights_0",
            "Estabelecimentos_insights_1",
            "Estabelecimentos_insights_2",
            "Estabelecimentos_insights_3"
        ]
    },
    {
        "title": "PetTechs_title",
        "subtitle": "PetTechs_subtitle",
        "insights": [
            "PetTechs_insights_0",
            "PetTechs_insights_1",
            "PetTechs_insights_2",
            "PetTechs_insights_3"
        ]
    }
]

const Partners: React.FC = () => {
    const t = useTranslations('Partners');
    const t_commons = useTranslations('Commons');


    const refsArray = Array.from({ length: SHOWCASE_PARTNERS.length }, () => useRef<HTMLDivElement>(null)); // Crie uma matriz de referências
    const visibleIndex = useOnViewIndexScreen(refsArray);

    const [mailPartner, setMailPartner] = useState('')

    function GridItem({ title, subtitle, src }: { title: string, subtitle: string, src: string }) {
        return (
            <div className='flex flex-col justify-start sm:h-44 col-span-1 gap-2  sm:pl-36'>
                <Image
                    src={`/icons/${src}`}
                    alt={src}
                    width="16"
                    height="16"
                />
                <h3 className='text-miau-white font-bold text-base '>{t(title as any)}</h3>
                <p className='text-miau-white/80 font-normal text-base sm:max-w-44'>{t(subtitle as any)}</p>
            </div>
        )
    }

    return <div className='bg-gradient-to-b from-blue-bgPartners to-black-bgPartnersEnd flex flex-col items-center'>
        <div className=' h-screen w-full flex justify-center items-center'>

            <div className='overflow-hidden flex flex-col sm:flex-row items-center justify-center pl-4 h-[80vh] w-[90vw] sm:w-[80vw] bg-transparent bg-[linear-gradient(to_right,#F7F7F710,transparent_2px),linear-gradient(to_bottom,#F7F7F710,transparent_2px)] bg-[size:6rem_4rem] rounded-sm'>
                <div className='gap-4 flex flex-col self-start sm:self-center pt-8 sm:pt-0'>
                    <H1 className='max-w-[34rem] '>{t("welcome_pet_tech_title")}</H1>
                    <h3 className='text-miau-grayDark font-light text-base sm:max-w-[26rem]'>{t("welcome_pet_tech_description")}</h3>
                    <div className='flex flex-row gap-2'>
                        <Input
                            type="email"
                            onChangeCapture={e => setMailPartner(e.currentTarget.value)}
                            placeholder={t("wanne_be_register")}
                            className='bg-white text-miau-black w-40 sm:w-60' />
                        <RegisterModal initMail={mailPartner}>
                            <Button text={t_commons("register")} variant='secondary' onClick={() => { }} />
                        </RegisterModal>
                    </div>

                </div>
                <div className="h-[40rem] w-[40rem] relative self-start right-[20%] sm:right-0 sm:self-center">
                    <Image
                        src="/imgs/stuffs/environment-tutors.png"
                        alt="Tutors Environment"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>

        </div>
        <div className='w-full sm:w-[80vw] h-[50vh] bg-transparent flex flex-row justify-center items-start pt-20 overflow-hidden ' style={{ maskImage: "linear-gradient(var(--mask-direction,to right),transparent,#000 20%,#000 80%,transparent)" }}>
            <ul className='flex flex-row justify-center sm:w-[50vw] animate-scroll-x' style={{ maskImage: "linear-gradient(var(--mask-direction,to right),transparent,#000 20%,#000 80%,transparent)" }}>
                {["aws-cloud.png", "slack.png", "github.png", "google-analytics.png", "webhooks.png"].map((src) => {
                    return (
                        <li className='w-40 h-[5rem] border-[1px] border-miau-white/10 flex justify-center items-center '>
                            <div className='relative w-14 h-14 sm:w-14 sm:h-14'>
                                <Image
                                    src={`/imgs/stuffs/${src}`}
                                    alt="Company Integrations"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>

        <div className='h-full w-full flex flex-col items-center gap-10'>
            <div className={twMerge('w-40 text-center flex flex-col gap-4 fixed top-0 transition-all duration-300',
                visibleIndex == null ? 'translate-y-[-10rem]' : 'translate-y-4'
            )}>
                <Button text={t(SHOWCASE_PARTNERS[visibleIndex ?? 0].title as any)} variant='secondary' onClick={() => { }} />
                <p className='text-miau-white text-base font-light text-shadow-black'>{t(SHOWCASE_PARTNERS[visibleIndex ?? 0].subtitle as any)}</p>
            </div>

            {SHOWCASE_PARTNERS.map((items, index) => {

                return (
                    <div
                        ref={refsArray[index]}
                        className={twMerge('h-[50%] transition-all duration-1000 w-[80vw] sm:w-[22rem] flex flex-col justify-center gap-8',
                            visibleIndex == index ? 'blur-0' : 'blur-md'
                        )}>
                        {items.insights.map(ins => {
                            return (
                                <div className='flex flex-row items-center gap-4'>
                                    <div className='bg-miau-branding rounded-sm w-10 h-10 flex justify-center'>
                                        <Image
                                            src={`/icons/domino.svg`}
                                            alt="Domino Icon"
                                            width="16"
                                            height="16"
                                        />
                                    </div>
                                    <h3 className='text-miau-white text-base font-bold'>{t(ins as any)}</h3>
                                </div>
                            )
                        })}
                    </div>
                )
            })}

        </div>

        <div className='w-[65vw] py-10 sm:py-0 h-full sm:h-screen grid grid-cols-1 grid-rows-6 sm:grid-cols-3 sm:grid-rows-2 items-center '>
            <GridItem title='innovation_integration_title' src='coffee.svg' subtitle='innovation_integration_subtitle' />
            <GridItem title='largest_pet_lake_title' src='database.svg' subtitle='largest_pet_lake_subtitle' />
            <GridItem title='ipaas_title' src='ipaas.svg' subtitle='ipaas_subtitle' />
            <GridItem title='personalized_ai_title' src='ia.svg' subtitle='personalized_ai_subtitle' />
            <GridItem title='data_security_title' src='shield-check.svg' subtitle='data_security_subtitle' />
            <GridItem title='scalable_solutions_title' src='code-pen.svg' subtitle='scalable_solutions_subtitle' />
        </div>

        <div className='flex flex-col gap-8 justify-center items-center w-full h-screen mt-10'>

            <H1 className='text-base'>{t("created_devs")}</H1>

            <div className='w-full h-[50vh] sm:w-[45vw] sm:h-[85vh] bg-miau-white/5 rounded-sm flex justify-center items-center'>
                <div className='flex items-center w-[90vw] h-[45vh] sm:w-[40vw] sm:h-[75vh] bg-miau-white/5 rounded-sm relative'>
                    <div className='w-full h-[90%] relative'>
                        <Image
                            src="/imgs/stuffs/ipaas-web.png"
                            alt="Tutors Environment"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>

        </div>

    </div >;
}

export default Partners;