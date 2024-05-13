'use client'

import { Button } from '@/components/button';
import { GridsBG } from '@/components/gridsBG';
import React from 'react';
import Image from 'next/image'

// import { Container } from './styles';
// to-bgWhite  -> COlocar no contraste final                                                    
const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-bgBlue to-bgBlue w-full h-screen pt-16 overflow-hidden flex justify-center flex-col items-start gap-10 px-4 sm:pl-[20%] sm:px-0">
      <div className='grid grid-cols-3 grid-rows-3 gap-10'>
        <div className='row-span-2 col-span-3 sm:col-span-2 flex flex-col justify-end '>
          <h1 className='text-miau-white font-bold text-2xl sm:text-3xl'>O ecossistema do bem-estar pet, <br /><span className='font-normal'>na palma da sua mão.</span></h1>
          <p className='max-w-[405px] text-miau-blueContrast text-base mt-2'>Nossa tecnologia conecta tutores, veterinários, petshops e profissionais em uma rede de cuidado pet, centralizando o histórico de vida do animal em um único lugar.</p>
        </div>
        <div className="h-[35rem] w-[35rem] relative row-span-4 col-span-1 hidden sm:block right-60">
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
      <GridsBG countCols={10} countRows={6} />
    </div>
  )
}

export default Home 