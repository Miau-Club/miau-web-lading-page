import React from 'react'
import styles from './styles.module.css'
import { Button } from '@/components/button';
import Image from 'next/image'

const TutorsPage = () => {

    const MainSection = (
        { children, isBlue, waves, height }:
            { children: any, isBlue?: boolean, waves?: boolean, height?: number }
    ) => {

        return (
            <>
                <div
                    style={{
                        backgroundColor: isBlue ? 'var(--blue-miau)' : ''
                    }}
                    className={styles.mainSectionWrapper}>
                    {children}
                </div>
                {
                    waves &&
                    <div className={styles["custom-shape-divider-top-1714100264"]}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles["shape-fill"]}></path>
                        </svg>
                    </div>
                }
            </>

        );
    }

    function TipsContainer({ src, title, subtitle }: { src: string, title: string, subtitle: string }) {

        return (
            <div className={styles.containerTips}>
                <Image
                    src={src}
                    alt={'Tips'}
                    width={50}
                    height={50}
                    priority
                    quality={100}
                />
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        )
    }

    function StoryContainerSection({ title, subtitle, src }: { title: string, subtitle: string, src: string }) {
        return (
            <div className={styles.storyContainerWrapper}>
                <div className={styles.storyContainerTexts}>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <div>
                    <Image
                        className={styles.storyImgMockup}
                        src={src}
                        alt={'Total Care Mockup'}
                        layout='responsive'
                        width={0}
                        height={0}
                        priority
                        quality={100}
                    />
                </div>
            </div>
        )
    }

    return (
        <main>
            <MainSection >
                <div className={styles.primaryContainerWrapper}>
                    <div className={styles.primaryContainer}>
                        <h2>Tudo para o seu pet na palma da mão</h2>
                        <p>
                            Mais praticidade para o tutor e o animal: saúde e bem-estar gerenciados sem complicações,
                            apoiados pela inovação exclusiva do Pet ID,
                            que facilita o acompanhamento completo e seguro.
                        </p>
                        <h3>É o cuidado que seu pet merece, fácil e acessível</h3>
                        <Button text={'Inscreva-se'} style={'dark'} />
                    </div>
                    <div className={styles.primaryContainerRight}>
                        <Image
                            className={styles.tutorMockup}
                            src={'/imgs/mobile-mockups/tutors-mockup.png'}
                            alt={'Tutors mockup home screen'}
                            layout='responsive'
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                </div>
            </MainSection >
            <MainSection isBlue waves>
                <div className={styles.wrapperContainerTips}>
                    <TipsContainer
                        src={'/icons/download-with-circle.svg'}
                        title='Sem Downloads e Uploads'
                        subtitle={`Conexão direta e sem interrupções com veterinários,clínicas e hospitais.
                        Todas as informações do seu pet disponíveis sem a necessidade de downloads ou uploads complicados.`}
                    />
                    <TipsContainer
                        src={'/icons/dashboard-with-circle.svg'}
                        title='Aprendizado constante'
                        subtitle={`Nossa inteligência artificial se adapta e aprende com cada interação, tornando o cuidado com seu pet cada vez mais inteligente e preciso.`}
                    />
                    <TipsContainer
                        src={'/icons/reward-with-circle.svg'}
                        title='Recomendações Únicas:'
                        subtitle={`Receba sugestões feitas sob medida, pensadas exclusivamente para atender às necessidades únicas 
                        do seu pet.`}
                    />
                </div>
            </MainSection>
            <MainSection>
                <StoryContainerSection
                    src='/imgs/mobile-mockups/total-care-mockup.png'
                    title='Cuidado total para seu pet'
                    subtitle='Com o  app MiAu Club você tem todas as informações do seu pet centralizadas em um único lugar! Desde consultas até vacinas, exames e prescrições médicas.'
                />
            </MainSection>
            <MainSection>
                <StoryContainerSection
                    src='/imgs/mobile-mockups/easy-for-tutors-mockup.png'
                    title='Praticidade para você, tutor'
                    subtitle='Esqueça a confusão de vários apps. No MiAu Club, você gerencia a saúde e o bem-estar do seu pet, além de acessar serviços e produtos essenciais, tudo em um só lugar!'
                />
            </MainSection>
        </main>
    )

}



export default TutorsPage 