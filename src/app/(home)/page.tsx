'use client'

import { Button } from '@/components/button';
import { GridsBG } from '@/components/gridsBG';
import React, { useState } from 'react';
import Image from 'next/image'
import { H1 } from '@/components/h1';
import { BGDots } from '@/components/bg-dots';
import { twMerge } from 'tailwind-merge';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { SelectCustom, SelectCustomItem } from '@/components/select';
import { cn } from '@/lib/utils';

// import { Container } from './styles';
// to-bgWhite  -> COlocar no contraste final                                                    
const Home: React.FC = () => {

  const [srcOverview, setSrcOverview] = useState('mobile-overview-home')

  const TechCard = ({ children, title, srcIcon }:
    { children: any, title: string, srcIcon: string }) => {

    return (
      <div className='flex flex-col items-center'>
        {/* <Image
          className='ml-[3rem] mb-4 self-start'
          src={srcIcon}
          alt="Icon"
          width={40}
          height={40}
        /> */}
        <Image
          className='mb-4 hidden sm:block'
          src={`/imgs/stuffs/small-line-t-${srcIcon}.png`}
          alt="Tech cards lines"
          width={300}
          height={0} />
        <h3 className='font-bold text-miau-white text-base sm:text-lg'>{title}</h3>
        <div className='overflow-hidden w-[100%] sm:w-72 h-40 bg-miau-blueLight border-solid border-4 border-miau-blueContrast rounded-md'>
          <div className='px-2 text-center flex items-center h-[100%]'>
            {children}
          </div>
          {/* TODO: Corrigir essa grid q n esta aparecendo */}
          <GridsBG gridClass='w-18 h-10 border-miau-white/5' classname='top-0' countGrids={60} />
        </div>
      </div>
    )
  }

  const TransformCard = ({ color, title, subtitle, srcImg, srcIcons }: { srcIcons: string, color: string, title: string, subtitle: string, srcImg: string }) => {
    return (<div className={twMerge(`px-2 text-center w-80 h-64 rounded-sm border-solid border-4 border-miau-blueContrast/10`, color)}>
      <BGDots className='flex flex-col items-center justify-center gap-8' color='bg-[radial-gradient(#859AE1_1px,transparent_1px)]'>
        <div className='flex flex-row justify-evenly items-center w-[100%]'>
          <Avatar className='h-12 w-12'>
            <AvatarImage src={srcImg} />
          </Avatar>
          <div className="h-[2.5rem] w-[10rem] relative">
            <Image
              src={srcIcons}
              alt="Miau Home Image"
              layout="fill"
              objectFit="contain"
            />
          </div>

        </div>
        <div className='z-10'>
          <h3 className='font-bold text-miau-white'>{title}</h3>
          <p className='font-normal text-miau-white sm:text-sm'>{subtitle}</p>
        </div>
      </BGDots>
    </div>)
  }

  function onOverviewChange(e: 'tutor' | 'partners') {
    if (e === 'partners') {
      setSrcOverview("web-overview-home")
      return
    }

    setSrcOverview('mobile-overview-home')
  }

  return (
    <div >
      <div className='bg-bgBlue w-full h-screen pt-16 px-4 overflow-hidden flex justify-center flex-col items-start gap-10 sm:pl-[20%] sm:px-0'>
        <div className='grid grid-cols-3 grid-rows-3 gap-10'>
          <div className='row-span-2 col-span-3 sm:col-span-2 flex flex-col justify-end '>
            <H1 className='text-2xl'>O ecossistema do bem-estar pet, <br /><span className='font-normal'>na palma da sua mão.</span></H1>
            <p className='max-w-[405px] text-miau-blueContrast text-base mt-2'>Nossa tecnologia conecta tutores, veterinários, petshops e profissionais em uma rede de cuidado pet, centralizando o histórico de vida do animal em um único lugar.</p>
          </div>
          <div className="h-[35rem] w-[35rem] relative row-span-4 col-span-1 hidden sm:block right-60 z-10">
            <Image
              src="/imgs/bg/homeDraw.png"
              alt="Miau Home Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className='row-span-1 col-span-2 flex items-center'>
            <Button text='Inscreva-se' classname='z-10 ' onClick={() => { console.log("") }} />
          </div>
          <div className='flex flex-col justify-center row-span-1  col-span-2'>
            <h3 className='text-miau-yellow font-bold'>PETS REGISTRADOS</h3>
            <div className='flex flex-row items-center gap-4'>
              <div><p className='text-miau-white font-normal'>5.0 mil +</p> <p className='text-miau-blueContrast font-light'>CACHORROS</p></div>
              <div><p className='text-miau-white font-normal'>2.2 mil +</p> <p className='text-miau-blueContrast font-light'>GATOS</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-bgBlue to-white'>
        <div className=' w-full h-[100%] px-4'>
          <div className='grid grid-cols-1 grid-rows-5 sm:grid-cols-3 sm:grid-rows-2'>
            <div className='flex justify-center items-center flex-col gap-2 px-2 sm:col-span-3'>
              <H1>Tecnologia em prol do bem-estar pet</H1>
              <h3 className='text-miau-blueContrast text-sm text-center font-normal sm:text-base'>todas as funcionalidades pensadas para quem nos dá carinho e amor diariamente.</h3>
            </div>
            <div className='sm:col-span-3 pb-8'>
              <TechCard title='Pet ID' srcIcon="scan">
                <p className='font-normal text-miau-white text-sm sm:text-sm z-10'>Com nossa tecnologia biométrica via fucinho, o PET ID identifica seu pet instantaneamente, centraliza dados vitais e histórico médico, otimizando a segurança e o cuidado.</p>
              </TechCard>

            </div>
            <TechCard title='Histórico Conectado' srcIcon="dashboard">
              <p className='font-normal text-miau-white text-sm sm:text-sm'>Todo histórico de sáude do seu(s) pet(s), como: consultas, laudos, medição, tratamento em um único lugar. Chega de pastas, papeis e arquivos pdf.</p>
            </TechCard>
            <TechCard title='Muito mais que um app' srcIcon="world">
              <p className='font-normal text-miau-white text-sm sm:text-sm'>Somos a maneira mais eficiente e integrada de gerenciar a saúde e bem-estar dos pets, com fácil a serviços, produtos, locais, profissionais pet e muito mais. Facilidade para todos, que amam seus pets.</p>
            </TechCard>

            <TechCard title='Inovação Contínua' srcIcon="arrow-up" >
              <p className='font-normal text-miau-white text-sm sm:text-sm'>Através da tecnologia, potencializamos todos envolvidos na jornada pet, desde veterinários até prestadores de serviços.</p>
            </TechCard>

          </div>
        </div>
        <div className='w-full h-[130vh] sm:h-[50vh] mt-28'>
          <BGDots className='flex flex-col items-center' color='bg-[radial-gradient(#859AE1_1px,transparent_1px)]'>
            <H1 className='z-10'>Transformamos o amor em cuidado</H1>
            <div className='flex flex-col sm:flex-row gap-4 justify-center z-10 mt-12 sm:gap-8'>
              <TransformCard
                srcIcons="/imgs/stuffs/icons-card-one-home.png"
                srcImg='/imgs/pet-dogs/cat-img-home.png'
                color='bg-blueCardOneHome'
                title='Explore o ecossistema Miau Club'
                subtitle='Descubra como nosso ecossistema revoluciona o cuidado com seu pet, integrando todos os aspectos da vida do seu animal em um só lugar' />
              <TransformCard
                srcIcons="/imgs/stuffs/icons-card-two-home.png"
                srcImg='/imgs/pet-dogs/dog-hands-home.png'
                color='bg-blueCardTwoHome'
                title='Cuidado total para o seu pet'
                subtitle='Recursos únicos, que facilitam a gestão da saúde e bem-estar do seu pet, desde lembretes de vacinação até profissionais especializados perto de você.' />
              <TransformCard
                srcIcons="/imgs/stuffs/icons-card-three-home.png"
                srcImg='/imgs/stuffs/insights-dark-home.png'
                color='bg-blueCardThreeHome'
                title='Insights que mudam vidas'
                subtitle='O MiAu Club pode expandir seu negócio, conectando-o a uma ampla rede de tutores e fornecendo dados e insights valiosos para melhorar seus serviços.' />
            </div>
          </BGDots>
        </div>
        <div className='w-full h-[150vh] flex flex-col sm:flex-row'>
          <div className=' flex  flex-col justify-center items-center sm:items-start sm:pl-[10%] sm:text-start gap-8'>
            <H1 className='text-miau-black text-2xl '>SEJA O PRIMEIRO A TESTAR</H1>
            <p className='text-miau-grayDark font-normal text-sm max-w-[320px]'>o app que irá revolucionar o cuidado com a saúde e o bem-estar pet</p>
            <Button text='Inscreva-se' onClick={() => { }} />
          </div>
          <div className='flex flex-col justify-center mt-20 overflow-hidden sm:flex-1 sm:mt-0 sm:items-center'>
            <div className='w-full flex justify-center'>
              <SelectCustom
                onChange={(e) => onOverviewChange(e as any)}
                defaultValue='tutor'
                className='sm:mr-[10%]'>
                <SelectCustomItem value='tutor' description='Tutores' />
                <SelectCustomItem value='partners' description='Parceiros' />
              </SelectCustom>
            </div>
            <div className={cn("transition-height duration-500 h-[35rem] w-[85%] ml-[10%] sm:ml-0 sm:h-[65%] sm:w-[40rem] relative",
              srcOverview === "web-overview-home" && "ml-[3%] w-[95%] sm:w-[60rem]")}>
              <Image
                src={`/imgs/stuffs/${srcOverview}.png`}
                alt="Mobile overview"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      <GridsBG classname='absolute inset-0 z-0 top-16' gridClass='border-miau-white/5' />
    </div >
  )
}

export default Home


