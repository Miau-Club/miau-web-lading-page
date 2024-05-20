'use client'

import { Button } from '@/components/button';
import { H1 } from '@/components/h1';
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

// import { Container } from './styles';

const Tutors: React.FC = () => {

    function CardIcons({ subtitle, src, color }: { subtitle: String, src: string, color: string }) {

        return (
            <div className='flex flex-col justify-center items-center gap-10 text-center'>
                <div className={twMerge('w-40 h-40 rounded-sm outline-[2rem] outline outline-[#F7F7F790] flex justify-center items-center', color)}>
                    <div className='relative w-12 h-12'>
                        <Image
                            src={src}
                            alt="Icons"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <p className='text-miau-white font-normal text-base max-w-[22rem] sm:max-h-[5rem] sm:max-w-[25rem]'>{subtitle}</p>
            </div>
        )
    }

    // InfoCard.jsx
    const GridCards = ({ title, text, bgColor, textColor, borderColor }: any) => (
        <div className={`h-80 flex flex-col items-start justify-start sm:justify-center gap-4 ${bgColor} border-2 ${borderColor} rounded-sm p-4 w-[48%]`}>
            <H1 className={`${textColor} sm:text-xl text-base`}>{title}</H1>
            <p className={`${textColor} font-normal text-sm sm:text-base`}>{text}</p>
        </div>
    );

    const GridHeader = ({ title, description, className, children }: any) => (
        <div className={twMerge(`flex flex-col h-48 sm:h-80  items-start justify-center gap-4 sm:gap-10 col-span-3 row-span-1 bg-green-light border-2 border-green-dark/120 rounded-sm px-8 `, className)}>
            <H1 className='text-green-dark sm:text-xl text-base'>{title}</H1>
            <p className='text-green-dark font-normal text-sm sm:text-base'>{description}</p>
            {children}
        </div>
    );

    return (
        <div >
            <div className='h-screen w-full sm:px-40 flex flex-col items-center justify-center bg-blue-bgTutors '>
                <h3 className='text-miau-yellow font-normal'>O maior ecossistema pet integrado</h3>
                <div className="flex flex-col text-center gap-4 pt-8 justify-start items-center relative h-[60%] w-full sm:w-[50%] bg-blue-bgTutors bg-[linear-gradient(to_right,#295AD7,transparent_2px),linear-gradient(to_bottom,#295AD7,transparent_2px)] bg-[size:6rem_4rem] rounded-sm">
                    <H1>Tudo para o seu pet na palma da mão</H1>
                    <h2 className='text-miau-blueContrast font-normal text-base max-w-[22rem] sm:text-lg sm:max-w-[35rem]'>Mais praticidade para o tutor e o animal: saúde e bem-estar gerenciados sem complicações, apoiados pela inovação exclusiva do Pet ID, que facilita o acompanhamento completo e seguro.</h2>
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
            <div className='flex flex-col sm:flex-row w-full h-[160vh] sm:h-screen bg-blue-bgTutors bg-[radial-gradient(#F7F7F710_1px,transparent_1px)] [background-size:16px_16px] justify-center items-center gap-24'>
                <CardIcons
                    color='bg-blue-blueLight bg-opacity-75'
                    src='/icons/download.svg'
                    subtitle={`Conexão direta e sem interrupções com veterinários, clínicas e hospitais. Todas as informações do seu pet disponíveis sem a necessidade de downloads ou uploads complicados.`} />
                <CardIcons
                    color='bg-miau-blueLight bg-opacity-50'
                    src='/icons/ia.svg'
                    subtitle={'Nossa inteligência artificial se adapta e aprende com cada interação, tornando o cuidado com seu pet cada vez mais inteligente e preciso.'} />
                <CardIcons
                    color='bg-miau-blueLight bg-opacity-25'
                    src='/icons/config.svg'
                    subtitle={'Receba sugestões feitas sob medida, pensadas exclusivamente para atender às necessidades únicas do seu pet.'}
                />
            </div>

            <div className='h-full bg-gradient-to-b from-blue-bgTutors to-miau-blueContrast flex justify-center'>

                <div className='grid grid-cols-3 grid-rows-3 gap-4 px-8 sm:w-[90rem]'>
                    <GridHeader
                        title='SOMOS TOTALMENTE GRATUITOS'
                        description='Acesso gratuito a recursos essenciais para o cuidado diário do seu pet.'
                    >
                        <Button onClick={() => { }} classname='bg-green-dark hover:bg-green-dark/90' text={'Baixar agora'} />
                    </GridHeader >

                    <div className='flex flex-row justify-between col-span-3 row-span-2 sm:row-span-1 '>
                        <GridCards
                            title='Conexões diretas com profissionais pets'
                            text='Tornamos mais simples a jornada de todos envolvidos para o cuidado e bem-estar pet.'
                            bgColor='bg-yellow-light'
                            textColor='text-miau-yellowDark'
                            borderColor='border-miau-yellowDark/5'
                        />
                        <GridCards
                            title='Praticidade e Conveniência'
                            text='Conectamos tutores a uma ampla gama de serviços pet, garantindo conforto e conveniência.'
                            bgColor='bg-miau-blueLight'
                            textColor='text-miau-black/70'
                            borderColor='border-miau-white/5'
                        />
                    </div>

                    <GridHeader
                        title='Adeus, Papelada, downlods e uploads'
                        description='Tornamos mais simples a jornada de todos envolvidos para o cuidado e bem -estar pet.'
                        className={'sm:col-span-1'}
                    />


                    {/* Web view */}
                    <div className={`hidden sm:flex flex-col h-48 sm:h-80 items-start justify-center gap-4 sm:gap-10 col-span-1 bg-yellow-light border-2 border-miau-yellowDark/5 rounded-sm px-8 `}>
                        <H1 className={`text-miau-yellowDark sm:text-xl`}>Feedback e Suporte Contínuo</H1>
                        <p className={`text-miau-yellowDark font-normal text-sm sm:text-base`}>Suporte para o cuidado do seu pet, assegurando que cada decisão seja informada e voltada para o bem-estar do animal.</p>
                    </div>
                    <div className={`hidden sm:flex flex-col h-48 sm:h-80 items-start justify-center gap-4 sm:gap-10 col-span-1 bg-miau-blueLight border-2 border-miau-white/5 rounded-sm px-8 `}>
                        <H1 className={`text-miau-black/70 sm:text-xl`}>Adoção pet</H1>
                        <p className={`text-miau-black/70 font-normal text-sm sm:text-base`}>Apoiamos e acreditamos nessa causa. mesmo que você já tenha seu pet pode ajudar os milhares de pets a encontrar um lar.</p>
                    </div>
                    {/* Mobile view */}
                    <div className='col-span-3 sm:hidden flex flex-row justify-between '>
                        <GridCards
                            title='Feedback e Suporte Contínuo'
                            text='Suporte para o cuidado do seu pet, assegurando que cada decisão seja informada e voltada para o bem-estar do animal.'
                            bgColor='bg-yellow-light'
                            textColor='text-miau-yellowDark'
                            borderColor='border-miau-yellowDark/5'
                        />
                        <GridCards
                            title='Adoção pet'
                            text='Apoiamos e acreditamos nessa causa. mesmo que você já tenha seu pet pode ajudar os milhares de pets a encontrar um lar.'
                            bgColor='bg-miau-blueLight'
                            textColor='text-miau-black/70'
                            borderColor='border-miau-white/5'
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Tutors