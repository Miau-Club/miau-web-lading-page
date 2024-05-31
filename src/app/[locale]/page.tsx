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
import { RegisterModal } from '@/components/register-modal';
import { useTranslations } from 'next-intl';

const Home: React.FC = () => {

  const t = useTranslations('Home');

  const [srcOverview, setSrcOverview] = useState('mobile-overview-home')

  const TechCard = ({ children, title, srcIcon, srcIconMobile }:
    { children: any, title: string, srcIcon: string, srcIconMobile: string }) => {

    return (
      <div className='flex flex-col items-center w-full gap-2 sm:gap-0'>
        <Image
          className='sm:hidden self-start'
          src={`/icons/${srcIconMobile}.svg`}
          alt="Icon Mobile"
          width={25}
          height={25}
        />
        <Image
          className='mb-4 hidden sm:block'
          src={`/imgs/stuffs/small-line-t-${srcIcon}.png`}
          alt="Tech cards lines"
          width={300}
          height={0}
        />
        <h3 className='font-bold text-miau-white text-base sm:text-lg self-start sm:self-center'>{title}</h3>
        <div className='overflow-hidden w-[100%] sm:w-72 h-40 bg-transparent border-solid border-4 border-transparent  rounded-sm'>
          <div className='sm:px-2 flex-col text-start flex items-start sm:items-center h-[100%]'>
            {children}
          </div>
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
          <h3 className='font-bold text-miau-white z-10'>{title}</h3>
          <p className='font-normal text-miau-white/80 text-sm sm:text-base z-10'>{subtitle}</p>
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
      <div className='bg-blue-bg w-full h-[100vh] sm:h-screen pt-56 sm:pt-16 overflow-hidden flex justify-center flex-col items-start gap-10 sm:pl-[20%] px-4 sm:px-0'>
        <div className='grid grid-cols-3 grid-rows-[1fr_1fr_auto_auto_1fr] sm:grid-rows-3 gap-10 z-10 '>
          <div className='row-span-2 col-span-3 sm:row-span-2 sm:col-span-2 flex flex-col justify-end  '>
            <H1 className='text-xl'>{t('environment_1')} <br /><span className='font-normal'>{t('environment_2')}</span></H1>
            <p className='max-w-[405px] text-miau-white/50 text-base sm:text-lg mt-2'>{t("environment_subtitle")}</p>
          </div>
          <div className="h-[35rem] w-[35rem] relative row-span-4 col-span-1 hidden sm:block right-60 z-10 animate-bounce-home">
            <Image
              src="/imgs/bg/homeDraw.png"
              alt="Miau Home Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className='row-span-1 col-span-1 sm:col-span-2   grid-tem flex items-center'>
            <RegisterModal >
              <Button text={t("register_btn")} onClick={() => { }} />
            </RegisterModal>
          </div>
          <div className='row-span-1 col-span-2 flex flex-col justify-center pl-[22%] sm:pl-0'>
            <h3 className='text-miau-yellow font-bold text-sm sm:text-base'>{t("registered_pets")}</h3>
            <div className='flex flex-row items-center gap-4'>
              <span><p className='text-miau-white font-normal text-sm sm:text-base'>226 {t("pets")} +</p> <p className='text-miau-blueContrast font-light text-sm sm:text-base'>{t("cat_dogs")}</p></span>
            </div>
          </div>
          <div className="h-[20rem] w-full relative row-span-1 col-span-3 sm:hidden z-10 animate-bounce-home">
            <Image
              src="/imgs/bg/homeDraw.png"
              alt="Miau Home Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-blue-bg to-white'>
        <div className='w-full h-[100%] px-4 '>
          <div className='grid grid-cols-1 grid-rows-5 sm:grid-cols-3 sm:grid-rows-2'>
            <div className='flex justify-center items-center flex-col gap-2 sm:col-span-3'>
              <H1 className='text-xl'>{t("technology_welfare")}</H1>
              <h3 className='text-miau-white/50 text-base text-center  sm:text-lg'>{t("technology_welfare_subtitle")}</h3>
            </div>
            <div className='sm:col-span-3 pb-8'>
              <TechCard title={t('pet_id_title')} srcIcon="scan" srcIconMobile='scan'>
                <p className='font-normal text-miau-white/60 text-base z-10'>{t('pet_id_description')}</p>
              </TechCard>
            </div>
            <TechCard title={t('connected_history_title')} srcIcon="dashboard" srcIconMobile='dashboard'>
              <p className='font-normal text-miau-white/60 text-base'>{t('connected_history_description')}</p>
            </TechCard>
            <TechCard title={t('more_than_app_title')} srcIcon="world" srcIconMobile='world'>
              <p className='font-normal text-miau-white/60 text-base'>{t('more_than_app_description')}</p>
            </TechCard>
            <TechCard title={t('continuous_innovation_title')} srcIcon="arrow-up" srcIconMobile='ipaas'>
              <p className='font-normal text-miau-white/60 text-base'>{t('continuous_innovation_description')}</p>
            </TechCard>
          </div>
        </div>
        <div className='w-full h-[130vh] sm:h-[50vh] mt-28'>
          <BGDots className='flex flex-col items-center' color='bg-[radial-gradient(#859AE1_1px,transparent_1px)]'>
            <H1 className='z-10'>{t("transform_love_care")}</H1>
            <div className='flex flex-col sm:flex-row gap-4 justify-center z-10 mt-12 sm:gap-8'>
              <TransformCard
                srcIcons="/imgs/stuffs/icons-card-one-home.png"
                srcImg='/imgs/pet-dogs/cat-img-home.png'
                color='bg-blue-blueCardOneHome'
                title={t('explore_ecosystem_title')}  
                subtitle={t('explore_ecosystem_subtitle')} />
              <TransformCard
                srcIcons="/imgs/stuffs/icons-card-two-home.png"
                srcImg='/imgs/pet-dogs/dog-hands-home.png'
                color='bg-blue-blueCardTwoHome'
                title={t('total_care_title')}
                subtitle={t('total_care_subtitle')} />
              <TransformCard
                srcIcons="/imgs/stuffs/icons-card-three-home.png"
                srcImg='/imgs/stuffs/insights-dark-home.png'
                color='bg-blue-blueCardThreeHome'
                title={t('insights_life_change_title')}
                subtitle={t('insights_life_change_subtitle')} />
            </div>
          </BGDots>
        </div>
        <div className='w-full h-[100vh] sm:h-[150vh] flex flex-col sm:flex-row'>
          <div className=' flex  flex-col justify-center items-center sm:items-start sm:pl-[10%] sm:text-start gap-4'>
            <H1 className='text-miau-black text-2xl '>{t('be_first_test')}</H1>
            <p className='text-miau-black/60 font-normal sm:text-base text-sm max-w-[320px]'>{t('revolutionize_care')}</p>
            <RegisterModal >
              <Button text={t("register_btn")} onClick={() => { }} classname='hidden sm:block' />
            </RegisterModal>
          </div>
          <div className='flex flex-col justify-center mt-20 overflow-hidden sm:flex-1 sm:mt-0 sm:items-center'>
            <div className='w-full flex justify-center'>
              <SelectCustom
                onChange={(e) => onOverviewChange(e as any)}
                defaultValue='tutor'
                className='sm:mr-[10%]'>
                <SelectCustomItem value='tutor' description={t("tutors")} />
                <SelectCustomItem value='partners' description={t("partners")} />
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