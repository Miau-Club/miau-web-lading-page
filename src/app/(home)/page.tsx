'use client'

import { Button } from '@/components/button';
import { GridsBG } from '@/components/gridsBG';
import React from 'react';
import Image from 'next/image'

// import { Container } from './styles';
// to-bgWhite  -> COlocar no contraste final                                                    
const Home: React.FC = () => {

  const TechCard = ({ children, title, srcIcon }:
    { children: any, title: string, srcIcon: string }) => {

    return (
      <div className='flex flex-col'>
        <Image
          className='ml-5'
          src={srcIcon}
          alt="Miau Home Image"
          width={40}
          height={40}
        />
        <div className="w-[90%] h-40 relative">
          <Image
            src={`/imgs/stuffs/small-line-t.png`}
            alt="Miau Home Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
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

  return (
    <div className="bg-gradient-to-b from-bgBlue to-bgBlue">
      <div className='w-full h-screen pt-16 px-4 overflow-hidden flex justify-center flex-col items-start gap-10 sm:pl-[20%] sm:px-0'>
        <div className='grid grid-cols-3 grid-rows-3 gap-10'>
          <div className='row-span-2 col-span-3 sm:col-span-2 flex flex-col justify-end '>
            <h1 className='text-miau-white font-bold text-2xl sm:text-3xl'>O ecossistema do bem-estar pet, <br /><span className='font-normal'>na palma da sua mão.</span></h1>
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
      <div className='w-full h-screen px-4'>
        <div className='grid grid-cols-1 grid-rows-5 sm:grid-cols-4 sm:grid-rows-2 gap-y-8 '>
          <div className='flex justify-center items-center flex-col gap-2 px-2 sm:col-span-4'>
            <h1 className='text-miau-white font-bold text-xl sm:text-3xl'>Tecnologia em prol do bem-estar pet</h1>
            <h3 className='text-miau-blueContrast text-sm text-center font-normal sm:text-base'>todas as funcionalidades pensadas para quem nos dá carinho e amor diariamente.</h3>
          </div>
          <TechCard title='Pet ID' srcIcon="/icons/scan.svg">
            <p className='font-normal text-miau-white text-sm sm:text-sm z-10'>Com nossa tecnologia biométrica via fucinho, o PET ID identifica seu pet instantaneamente, centraliza dados vitais e histórico médico, otimizando a segurança e o cuidado.</p>
          </TechCard>

          <TechCard title='Histórico Conectado' srcIcon="/icons/dashboard.svg">
            <p className='font-normal text-miau-white text-sm sm:text-sm'>Todo histórico de sáude do seu(s) pet(s), como: consultas, laudos, medição, tratamento em um único lugar. Chega de pastas, papeis e arquivos pdf.</p>
          </TechCard>

          <TechCard title='Muito mais que um app' srcIcon="/icons/world.svg">
            <p className='font-normal text-miau-white text-sm sm:text-sm'>Somos a maneira mais eficiente e integrada de gerenciar a saúde e bem-estar dos pets, com fácil a serviços, produtos, locais, profissionais pet e muito mais. Facilidade para todos, que amam seus pets.</p>
          </TechCard>

          <TechCard title='Inovação Contínua' srcIcon="/icons/arrow-up.svg" >
            <p className='font-normal text-miau-white text-sm sm:text-sm'>Através da tecnologia, potencializamos todos envolvidos na jornada pet, desde veterinários até prestadores de serviços.</p>
          </TechCard>
        </div>
      </div>
      <GridsBG classname='absolute inset-0 z-0 top-16' gridClass='border-miau-blueContrast/5' />
    </div>
  )
}

export default Home 