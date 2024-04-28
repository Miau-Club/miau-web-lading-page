import { BoxDialogue } from '@/components/box-dialogue';
import styles from './styles.module.css'
import Image from 'next/image'
import { Section } from '@/components/section';
import { Button } from '@/components/button';


const AboutPage = () => {

    const DialogueFundamentals = ({ text, bolderTxt }: { text: string, bolderTxt: string }) => {
        return <div className={styles.dialogueFundamentals}>
            <div />
            <p><span>{bolderTxt} </span>{text}</p>
        </div>
    }


    return (<main>

        <Section>
            <div className={styles.welcomeWrapper}>
                <div className={styles.containerWelcomeWrapper1}>
                    <Image
                        className={styles.environmentBg}
                        src={'/imgs/others/environment-miau.png'}
                        alt={'Environment MIAU'}
                        layout='responsive'
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                <div>
                    <Image
                        className={styles.welcomePetImg}
                        src={'/imgs/pet-dogs/welcome-pet-team.png'}
                        alt={'Welcome PET team'}
                        layout='responsive'
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                <div className={styles.welcomeParagraphWrapper}>
                    <h3>O maior ecossitema pet integrado </h3>
                    <p>No MiAu Club, abrimos as portas para uma nova era no cuidado pet, onde cada decisão é informada, cada necessidade é antecipada, e cada momento de alegria é multiplicado. Nós acreditamos, que atráves da tecnologia, podemos ressignificar o mercado pet. Transformar a maneira de como cuidamos, daqueles, que nos traz tanta alegria todos os dias, sem querer nada em troca. </p>
                </div>
            </div>
        </Section>
        <Section>
            <div className={styles.missionVision}>
                <div>
                    <BoxDialogue isBlue title='Missão'
                        subtitle={(
                            <p>O MiAu Club existe para conectar tutores, veterinários, pet shops e todos os demais particpantes da jornada pet em um ecossistema único. Nosso propósito é simplificar e enriquecer o cuidado animal, removendo barreiras e criando valor em cada interação. Comprometemo-nos com um sistema que funciona sem fricção, onde o amor pelos pets se traduz em ações cuidadosas e uma vida mais feliz para eles.</p>
                        )} />
                </div>
                <div  >
                    <BoxDialogue title='Visão'
                        subtitle={(<p>Nossa visão é ser o ecossistema definitivo para o bem-estar dos pets, reconhecido pela liderança na transformação digital do cuidado pet. Almejamos atingir isso através da inovação contínua, impulsionada pela paixão e excelência. Acreditamos em um futuro onde nossa tecnologia e serviços não apenas facilitam, mas também aprimoram a qualidade de vida de cada pet e a tranquilidade de seus tutores, estabelecendo novos padrões de cuidado e bem-estar animal.</p>)} />
                </div>
            </div>
        </Section>
        <Section isBlue waves>
            <div className={styles.fundamentals}>
                <h2>Valores Fundamentais</h2>
                <DialogueFundamentals bolderTxt='Inovação:' text='Buscamos constantemente por soluções que desafiem o status quo do cuidado pet.' />
                <DialogueFundamentals bolderTxt='Compromisso:' text={'Nossa dedicação aos pets e tutores é única, fazemos e criamos por eles'} />
                <DialogueFundamentals bolderTxt='Integridade:' text={'Operamos com transparência e honestidade em todas as nossas ações'} />
                <DialogueFundamentals bolderTxt='Comunidade:' text={'Valorizamos cada membro do nosso ecossistema, criando uma rede de apoio e cuidado.'} />
            </div>
        </Section>
        <Section>
            <div className={styles.community}>
                <BoxDialogue
                    resizeWidth
                    title='Compromisso com a Comunidade'
                    subtitle={
                        <p>
                            <br />
                            Nosso compromisso com a saúde, o bem-estar e a felicidade dos pets, vai além da nossa plataforma tecnológica. Reconhecemos nossa responsabilidade não só perante os nossos usuários, mas também perante a comunidade pet mais ampla. Por isso, nos dedicamos a várias iniciativas de responsabilidade social, reafirmando nosso comprometimento com um mundo melhor para todos os animais. Todos tem direito a um cuidado digno e único
                            <br /><br /><span>Programas de Adoção e Conscientização:</span> Trabalhamos para conectar pets a tutores amorosos, promovendo a adoção de animais em abrigos e resgatados. Além disso, investimos em campanhas de conscientização sobre a importância do cuidado responsável, buscando educar e inspirar uma mudança positiva na sociedade.
                            <br /><br /><span>Apoio a Eventos de Bem-Estar Animal:</span> O MiAu Club é um participante ativo em eventos locais e nacionais dedicados ao bem-estar animal. Desde feiras de adoção até conferências sobre saúde pet, nosso apoio e participação visam fortalecer a rede de cuidado animal, promovendo o conhecimento e a colaboração entre tutores, profissionais e entusiastas.
                            <br /><br /><span>Parcerias com Organizações Sem Fins Lucrativos:</span>s Colaboramos estreitamente com ONGs e instituições que trabalham incansavelmente pela causa animal. Através de doações, voluntariado e suporte tecnológico, fortalecemos essas organizações, ampliando seu impacto e ajudando-as a atender mais efetivamente às necessidades dos animais que cuidam.
                            <br /><br /> <Button text='Fale Conosco' style='dark' />
                        </p>}
                />
            </div>
        </Section>

    </main>)

}



export default AboutPage 