'use client'

import { Button } from '@/components/button';
import { H1 } from '@/components/h1';
import Image from 'next/image';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

// import { Container } from './styles';

const Tutors: React.FC = () => {
    const [selectedItems, setSelectedItems] = useState(0);

    const handleItemClick = (index: number) => {
        setSelectedItems(index);
    };

    const items = [
        {
            title: "Cuidado total para o seu pet",
            description: "Com o app MiAu Club você tem todas as informações do seu pet centralizadas em um único lugar! Desde consultas até vacinas, exames e prescrições médicas."
        },
        {
            title: "Praticidade para você, tutor",
            description: "Esqueça a confusão de vários apps. No MiAu Club, você gerencia a saúde e o bem-estar do seu pet, além de acessar serviços e produtos essenciais, tudo em um só lugar!"
        },
        {
            title: "Pet ID, um compromisso com a vida do seu animal",
            description: "A nossa tecnologia de reconhecimento biométrico, garante a identificação imediata do seu pet. O PET ID centraliza dados vitais e histórico médico, simplificando consultas veterinárias e aumentando a segurança em casos de emergência."
        },
        {
            title: "Tecnologia a serviço da vida",
            description: "Tecnologia a serviço da vida. A inteligência artificial do MiAu Club trabalha para entender e prever as necessidades do seu pet, oferecendo recomendações que fazem a diferença no dia a dia."
        }
    ];

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

    const GridItem = ({
        title,
        description,
        text,
        bgColor,
        textColor,
        borderColor,
        className,
        children,
        isHeader
    }: any) => (
        <div className={twMerge(`relative flex flex-col items-start justify-start pt-20 h-48 sm:h-80 gap-2 sm:gap-10 border-2 rounded-sm px-4 sm:px-12`, isHeader ? 'col-span-3 row-span-1' : 'w-[48%]', bgColor, borderColor, className)}>
            <H1 className={`${textColor} sm:text-xl text-sm`}>{title}</H1>
            <p className={`${textColor} font-normal text-sm sm:text-lg`}>{description || text}</p>
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
                <h3 className='text-miau-yellow font-normal text-base'>O maior ecossistema pet integrado</h3>
                <div className="flex flex-col text-center gap-4 pt-8 justify-start items-center relative h-[60%] w-full sm:w-[50%] bg-blue-bgTutors bg-[linear-gradient(to_right,#295AD7,transparent_2px),linear-gradient(to_bottom,#295AD7,transparent_2px)] bg-[size:6rem_4rem] rounded-sm">
                    <H1>Tudo para o seu pet na palma da mão</H1>
                    <h2 className='text-miau-blueContrast font-normal max-w-[22rem] text-base sm:text-xl sm:max-w-[35rem]'>Mais praticidade para o tutor e o animal: saúde e bem-estar gerenciados sem complicações, apoiados pela inovação exclusiva do Pet ID, que facilita o acompanhamento completo e seguro.</h2>
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
            <div className='flex flex-col sm:flex-row w-full h-[160vh] sm:h-[90vh] bg-blue-bgTutors bg-[radial-gradient(#F7F7F710_1px,transparent_1px)] [background-size:16px_16px] justify-center items-center gap-24'>
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

            <div className='flex 
                justify-center
                items-center 
                px-4
                sm:px-10 
                h-screen
                sm:h-[150vh]
                w-full 
                bg-blue-bgTutors 
                bg-[linear-gradient(to_right,#F7F7F720,transparent_2px),linear-gradient(to_bottom,#F7F7F720,transparent_2px)] 
                bg-[size:6rem_4rem] 
                rounded-sm'
            >
                <div className='flex items-center pl-4 w-screen h-96 sm:pl-16 sm:h-[80vh] sm:w-[40vw] bg-miau-white/50 rounded-md'>
                    <div className='relative w-[90%] h-[80%] sm:h-[70vh] sm:w-[15vw] bg-miau-branding rounded-sm py-4'>
                        <div className="absolute top-[2rem] hidden sm:block left-[3.2rem] w-1 h-[85%] bg-miau-white rounded-md" />
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start justify-center relative mb-10 cursor-pointer gap-4 pl-10"
                                onClick={() => handleItemClick(index)}
                            >
                                <div className={twMerge("flex flex-row gap-4 w-[90%] rounded-sm h-10", `${selectedItems == index ? 'bg-miau-blueLight/15' : ''}`)}>
                                    <div className={`rounded-full flex-shrink-0 w-6 h-6 outline outline-[0.3rem] outline-miau-white ${selectedItems == index ? 'bg-miau-yellow' : 'bg-miau-blueContrast'}`} />
                                    <h2 className="text-sm sm:text-base text-miau-white font-bold max-w-[21rem]">{item.title}</h2>
                                </div>
                                <p className="text-miau-white hidden text-sm font-normal max-w-[21rem] ml-10">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='h-full sm:h-[120vh] bg-gradient-to-b from-blue-bgTutors to-miau-blueContrast flex justify-center items-center'>

                <div className='grid grid-cols-3 grid-rows-6 sm:grid-rows-3 gap-4 px-8 sm:w-[90rem]'>
                    <GridItem
                        isHeader
                        title='ADEUS, PAPELADA, DOWNLOADS e UPLOADS'
                        text='Tornamos mais simples a jornada de todos envolvidos para o cuidado e bem-estar pet.'
                        bgColor='bg-green-light'
                        textColor='text-green-dark'
                        borderColor='border-green-dark/40'
                        className='pt-14 sm:pt-20'
                    >
                        <SealGridIcon color={'bg-green-dark/40'} iconSrc='/icons/file-close.svg' />
                        <Button onClick={() => { }} classname='bg-green-dark hover:bg-green-dark/90' text={'Baixar agora'} />
                    </GridItem>

                    <div className='flex flex-row justify-between col-span-3 row-span-2 sm:row-span-1 '>
                        <GridItem
                            title='Conexões diretas com profissionais pets'
                            text='Tornamos mais simples a jornada de todos envolvidos para o cuidado e bem-estar pet.'
                            bgColor='bg-yellow-light'
                            textColor='text-miau-yellowDark'
                            borderColor='border-miau-yellowDark/40'
                            className="sm:w-[49.5%] h-[100%]"
                        >
                            <SealGridIcon color={'bg-miau-yellowDark/40'} iconSrc='/icons/loader.svg' />
                        </GridItem>
                        <GridItem
                            title='Praticidade e Conveniência'
                            text='Conectamos tutores a uma ampla gama de serviços pet, garantindo conforto e conveniência.'
                            bgColor='bg-miau-blueLight'
                            textColor='text-miau-black/70'
                            borderColor='border-miau-white/20'
                            className="sm:w-[49.5%] h-[100%]"
                        >
                            <SealGridIcon color={'bg-miau-white/20'} iconSrc='/icons/grid.svg' />
                        </GridItem>
                    </div>

                    <GridItem
                        isHeader
                        title='Somos Gratuitos'
                        text='Acesso gratuito a recursos essenciais para o cuidado diário do seu pet.'
                        bgColor='bg-green-light'
                        textColor='text-green-dark'
                        borderColor='border-green-dark/40'
                        className='sm:col-span-1 pt-14 sm:pt-20'
                    >
                        <SealGridIcon color={'bg-green-dark/40'} iconSrc='/icons/currency-dolar.svg' />
                    </GridItem>

                    {/* Web view */}
                    <GridItem
                        title='Feedback e Suporte Contínuo'
                        text='Suporte para o cuidado do seu pet, assegurando que cada decisão seja informada e voltada para o bem-estar do animal.'
                        bgColor='bg-yellow-light'
                        textColor='text-miau-yellowDark'
                        borderColor='border-miau-yellowDark/40'
                        className='relative hidden sm:flex flex-col col-span-1 px-8 w-full'
                    >
                        <SealGridIcon color={'bg-miau-yellowDark/40'} iconSrc='/icons/activity.svg' />
                    </GridItem>
                    <GridItem
                        title='Adoção pet'
                        text='Apoiamos e acreditamos nessa causa. mesmo que você já tenha seu pet pode ajudar os milhares de pets a encontrar um lar.'
                        bgColor='bg-miau-blueLight'
                        textColor='text-miau-black/70'
                        borderColor='border-miau-white/20'
                        className='relative hidden sm:flex flex-col col-span-1 px-8 w-full'
                    >
                        <SealGridIcon color={'bg-miau-white/20'} iconSrc='/icons/cake.svg' />
                    </GridItem>

                    {/* Mobile view */}
                    <div className='flex flex-row justify-between col-span-3 row-span-2 sm:hidden'>
                        <GridItem
                            title='Feedback e Suporte Contínuo'
                            text='Suporte para o cuidado do seu pet, assegurando que cada decisão seja informada e voltada para o bem-estar do animal.'
                            bgColor='bg-yellow-light'
                            textColor='text-miau-yellowDark'
                            borderColor='border-miau-yellowDark/40'
                            className="h-[100%]"

                        >
                            <SealGridIcon color={'bg-miau-yellowDark/40'} iconSrc='/icons/activity.svg' />
                        </GridItem>
                        <GridItem
                            title='Adoção pet'
                            text='Apoiamos e acreditamos nessa causa. mesmo que você já tenha seu pet pode ajudar os milhares de pets a encontrar um lar.'
                            bgColor='bg-miau-blueLight'
                            textColor='text-miau-black/70'
                            borderColor='border-miau-white/20'
                            className="h-[100%]"

                        >
                            <SealGridIcon color={'bg-miau-white/20'} iconSrc='/icons/cake.svg' />
                        </GridItem>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Tutors