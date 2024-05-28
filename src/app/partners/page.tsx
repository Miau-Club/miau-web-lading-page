'use client'

import { Button } from '@/components/button';
import { H1 } from '@/components/h1';
import { Input } from '@/components/ui/input';
import { useOnViewIndexScreen } from '@/lib/hooks';
import Image from 'next/image';
import React, { useRef } from 'react';
import { twMerge } from 'tailwind-merge';


const SHOWCASE_PARTNERS = [{
    title: 'Médico Veterinário',
    subtitle: 'Diagnósticos precisos, cuidado conectado',
    insights: ['Insigths via inteligencia artificial', 'Prescrições direta no app', 'Recebimento de laudos direto no app', 'Telemedicina e chat com tutor']
},
{
    title: 'Profissionais Pet ',
    subtitle: 'Amplie seu alcance no universo Pet',
    insights: ['Chat com tutor', 'Pagamento e cobrança via App', 'Agenda inteligente', 'Divulgação em massa para novos tutores']

},
{
    title: 'Lojas online e Petshops',
    subtitle: 'Aumente suas vendas e atinja um público mais fiel',
    insights: ['Publicidade para base de tutores ', 'Promoções online e Offline', 'Insigths através de IA', 'Divulgação em massa para novos tutores']

},
{
    title: 'Estabelecimentos',
    subtitle: 'Conectando tutores a uma nova experiência',
    insights: ['Visibildiade  para o estabelcimento', 'Promoções online e Offline', 'Reservas online', 'Destaque nas buscas dos usuários']

},
{
    title: 'Pet Techs',
    subtitle: 'Revolução técnológica no cuidade Pet',
    insights: ['Integrações Low-Code', 'Lake de dados já Integrados', 'Mais de 10 SDK`s finalizados', 'LOGs de Ponta a Ponta']
}]

const Partners: React.FC = () => {

    const refsArray = Array.from({ length: SHOWCASE_PARTNERS.length }, () => useRef<HTMLDivElement>(null)); // Crie uma matriz de referências
    const visibleIndex = useOnViewIndexScreen(refsArray);


    function GridItem({ title, subtitle, src }: { title: string, subtitle: string, src: string }) {
        return (
            <div className='flex flex-col justify-start sm:h-44 col-span-1 gap-2  sm:pl-36'>
                <Image
                    src={`/icons/${src}`}
                    alt={src}
                    width="16"
                    height="16"
                />
                <h3 className='text-miau-white font-bold text-base '>{title}</h3>
                <p className='text-miau-white/80 font-normal text-base sm:max-w-44'>{subtitle}</p>
            </div>
        )
    }

    return <div className='bg-gradient-to-b from-blue-bgPartners to-black-bgPartnersEnd flex flex-col items-center'>
        <div className=' h-screen w-full flex justify-center items-center'>

            <div className='overflow-hidden flex flex-col sm:flex-row items-center justify-center pl-4 h-[80vh] w-[90vw] sm:w-[80vw] bg-transparent bg-[linear-gradient(to_right,#F7F7F710,transparent_2px),linear-gradient(to_bottom,#F7F7F710,transparent_2px)] bg-[size:6rem_4rem] rounded-sm'>
                <div className='gap-4 flex flex-col self-start sm:self-center pt-8 sm:pt-0'>
                    <H1 className='max-w-[34rem] '>Construa Pet-techs e serviçoes de dados PET , em tempo-real. Rápido.</H1>
                    <h3 className='text-miau-grayDark font-light text-base sm:max-w-[26rem]'>Configure, integre, use . Uma gama de serviços construídos e feito para os pets.</h3>
                    <div className='flex flex-row gap-2'>
                        <Input
                            type="email"
                            placeholder="Quero fazer parte"
                            className='bg-white text-miau-black w-40 sm:w-60' />
                        <Button text='Inscreva-se' variant='secondary' onClick={() => { console.log('adoleta') }} />
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
                <Button text={SHOWCASE_PARTNERS[visibleIndex ?? 0].title} variant='secondary' onClick={() => { }} />
                <p className='text-miau-white text-base font-light text-shadow-black'>{SHOWCASE_PARTNERS[visibleIndex ?? 0].subtitle}</p>
            </div>

            {SHOWCASE_PARTNERS.map((items, index) => {

                return (
                    <div
                        ref={refsArray[index]}
                        className={twMerge('h-[50%] transition-all duration-1000 w-[80vw] sm:w-[22rem] flex flex-col justify-center gap-8',
                            visibleIndex == index ? 'blur-0' : 'blur-sm'
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
                                    <h3 className='text-miau-white text-base font-bold'>{ins}</h3>
                                </div>
                            )
                        })}
                    </div>
                )
            })}

        </div>

        <div className='w-[65vw] py-10 sm:py-0 h-full sm:h-screen grid grid-cols-1 grid-rows-6 sm:grid-cols-3 sm:grid-rows-2 items-center '>
            <GridItem title='Inovação em Integração' src='coffee.svg' subtitle='Acesso gratuito a recursos essenciais para o cuidado diário do seu pet.' />
            <GridItem title='Maior lake PET' src='database.svg' subtitle='Tornamos mais simples a jornada de todos envolvidos para o cuidado e bem -estar pet.' />
            <GridItem title='IPaas' src='ipaas.svg' subtitle='Conectamos tutores a uma ampla gama de serviços pet, garantindo conforto e conveniência.' />
            <GridItem title='IA Personalizada' src='ia.svg' subtitle='Todo o histórico do seu pet seguro e acessível com um toque conectado a um ecossistema único.' />
            <GridItem title='Segurança de Dados' src='shield-check.svg' subtitle='A confidencialidade e integridade dos dados são a espinha dorsal do nosso ecossistema, de ponta a ponta, de modo totalmente criptografado.' />
            <GridItem title='Soluções escaláveis' src='code-pen.svg' subtitle='Apoiamos e acreditamos nessa causa. mesmo que você já tenha seu pet pode ajudar os milhares de pets a encontrar um lar.' />
        </div>

        <div className='flex flex-col gap-8 justify-center items-center w-full h-screen mt-10'>

            <H1 className='text-base'>Feito para os PETS, pensado para os devs</H1>

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