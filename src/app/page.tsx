import styles from "./page.module.css";
import Image from 'next/image'

export default function Home() {

  const Header = () => (
    <header className={styles.main}>
      <div className={styles.wrapper}>
        <h2 className={styles.homeText}>
          O ecossistema do bem-estar pet <br />
          <span className={styles.bolder}>na palma da sua mão</span>
        </h2>
        <p className={styles.homeParagraph}>
          Através da tecnologia, conectamos <br />
          tutores, veterinários, petshops, <br />
          estabelecimentos e profissionais <br />
          em uma rede de cuidado pet,<br />
          centralizando o histórico de vida<br />
          do pet em um único lugar
        </p>
      </div>
    </header>
  );

  const Section = ({ children, isBlue, middleSection }: { children: any, isBlue?: boolean, middleSection?: boolean }) => {
    const minHeightValue = middleSection ? "30vh !important" : ''

    return (<div
      className={`${styles.wrapper} ${styles.main} ${styles.wrapperAlignSections} ${isBlue ? styles.backgroundBlueMiau : ''}`}
      style={{ minHeight: minHeightValue }}

    >
      {children}
    </div>)
  };

  const FeatureBox = (
    { iconSrc, alt, title, children, isBlueBox }: { iconSrc: string, alt: string, title: string, children: any, isBlueBox: boolean }
  ) => (
    <div className={`${styles.containerBox} ${isBlueBox ? styles.containerBoxBlue : ''}`}>
      <div className={`${styles.microBoxIconContainer} ${isBlueBox ? '' : styles.microBoxMarginInRight}`}>
        <Image
          src={iconSrc}
          alt={alt}
          width={40}
          height={40}
          priority
        />
        <h3 className={`${styles.boxTitle} ${isBlueBox ? '' : styles.blueBoxTitle}`}>{title}</h3>
      </div>
      <p className={`${styles.boxParagraph} ${isBlueBox ? '' : styles.grayParagraphColor}`}>
        {children}
      </p>
    </div>
  );

  const LoveCareBox = ({ text, description, src, alt }: { text: string, description: string, src: string, alt: string }) => (
    <div className={styles.loveCareContainer} >
      <div >
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          priority
          className={styles.imageBottomGap}
        />
      </div>
      <h3 >{text}</h3>
      <p>{description}</p>
    </div >
  )

  return (
    <main >
      <Header />
      <Section>
        <h2>
          <span className={styles.bolder}>Tecnologia em prol do bem-estar pet</span>
        </h2>
        <div className={styles.wrapperContainerSecondSection}>
          <div className={styles.rowWrapper}>
            <FeatureBox
              iconSrc="/icons/scan.svg"
              alt="MiAu Logo"
              title="PET ID"
              isBlueBox={true}
            >
              Com nossa tecnologia biométrica via fucinho, o PET ID identifica seu pet instantaneamente, centraliza dados vitais e histórico médico, otimizando a segurança e o cuidado.
            </FeatureBox>
            <FeatureBox
              iconSrc="/icons/dashboard.svg"
              alt="historic"
              title="Histórico Conectado"
              isBlueBox={false}>
              Todo histórico de saúde do seu(s) pet(s), como: consultas, laudos, medição, tratamento em um único lugar. Chega de pastas, papéis e arquivos pdf.
            </FeatureBox>
          </div>
          <div className={styles.rowWrapper}>
            <FeatureBox
              iconSrc="/icons/world.svg"
              alt="More than an app, an environment"
              title="Muito mais que um app"
              isBlueBox={false}
            >
              Somos a maneira mais eficiente e integrada de gerenciar a saúde e bem-estar dos pets, com acesso fácil a serviços, produtos, locais, profissionais pet e muito mais. Mais facilidades para todos, que amam seus pets.            </FeatureBox>
            <FeatureBox
              iconSrc="/icons/arrow-up.svg"
              alt="Arrow Up Inovation"
              title="Inovação contínua"
              isBlueBox={false}
            >
              Através da tecnologia, potencializamos todos envolvidos na jornada pet, desde de veterinários até prestadores de serviços.
            </FeatureBox>
          </div>
        </div>
      </Section>
      <Section isBlue>
        <h2>
          <span className={`${styles.bolder} ${styles.whiteColor}`}>Transformamos o amor em cuidado</span>
        </h2>
        <div className={styles.rowWrapper}>
          <LoveCareBox
            src=""
            alt=""
            text={`Explore o universo\nMiAu Club`}
            description="Descubra como nosso ecossistema revoluciona o cuidado com seu pet, integrando todos os aspectos da vida do seu animal em um só lugar"
          />
          <LoveCareBox
            src="/imgs/pet-dogs/cat-with-family.png"
            alt="Cat with human family"
            text={`Cuidado total para\nseu pet`}
            description="Recursos únicos, que facilitam a gestão da saúde e bem-estar do seu pet, desde lembretes de vacinação até profissionais especializados perto de você."

          />
          <LoveCareBox
            src="/imgs/pet-dogs/dog-eyeglasses.png"
            alt="Dog with eye-glasses"
            text={`Insights que mudam\nvidas`}
            description="O MiAu Club pode expandir seu negócio, conectando-o a uma ampla rede de tutores e fornecendo dados e insights valiosos para melhorar seus serviços."

          />
        </div>
      </Section>
      <Section middleSection >
        <div className={styles.firstTester}>
          <div>
            <h2>SEJA O PRIMEIRO A TESTAR</h2>
            <p>o app que irá revolucionar o cuidado com
              a saúde e o bem-estar pet</p>
          </div>
          <Image
            className={styles.mockupMobileImg}
            src={'/imgs/mobile-mockups/mobile-mockup-home.png'}
            alt={'Mockup mobile home screen'}
            width={450}
            height={350}
            priority
          />
        </div>
      </Section>
      <Section >
        <></>
      </Section>
    </main >

  );
}