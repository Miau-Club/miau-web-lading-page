import { Button } from "@/components/button";
import styles from "./styles.module.css";
import Image from 'next/image'

export default function Home() {

  const Header = () => (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapperTitle}>
        <h2 className={styles.homeText}>
          O ecossistema do bem-estar pet <br />
          <span className={styles.bolder}>na palma da sua mão</span>
        </h2>
      </div>
      <div className={styles.homeSectionOneRow}>
        <div className={styles.homeParagraphWrapper}>
          <p className={styles.homeParagraph}>
            Através da tecnologia, conectamos
            tutores, veterinários, petshops,
            estabelecimentos e profissionais<br />
            em uma rede de cuidado pet,
            centralizando o histórico de vida  pet em um único lugar.
          </p>
          <Button id={styles.registerButton} text="Inscreva-se" size="lg" style="dark" />
        </div>
        <div className={styles.homeSectionRowImg}>
          <Image
            src={'/imgs/mobile-mockups/environment-miau.png'}
            alt={'Mockup mobile home screen'}
            fill
            quality={100}
          />
        </div>
      </div>
    </div>
  );

  const Section = ({ children, isBlue, middleSection, darkBlue }: { children: any, isBlue?: boolean, middleSection?: boolean, darkBlue?: boolean }) => {
    const minHeightValue = middleSection ? "30vh !important" : ''

    return (<div
      className={`
      ${styles.wrapper} 
      ${styles.main} 
      ${styles.wrapperAlignSections}
      ${isBlue && styles.backgroundBlueMiau}
      ${darkBlue && styles.darkBlueBackground}
      `}
      style={{ minHeight: minHeightValue }}

    >
      {children}
    </div>)
  };

  const FeatureBox = (
    { iconSrc, alt, title, children, isBlueBox }: { iconSrc: string, alt: string, title: string, children: any, isBlueBox: boolean }
  ) => {
    const containerClasses = `${styles.containerBox} ${isBlueBox ? styles.blueBox : ''}`;
    const iconContainerClasses = `${styles.microBoxIconContainer} ${isBlueBox ? '' : styles.marginRight}`;
    const titleClasses = `${styles.boxTitle} ${isBlueBox ? '' : styles.blueBoxTitle}`;
    const paragraphClasses = `${styles.boxParagraph} ${isBlueBox ? '' : styles.grayColor}`;

    return (
      <div className={containerClasses}>
        <div className={iconContainerClasses}>
          <Image
            className={isBlueBox ? styles.pulse : ""}
            src={iconSrc}
            alt={alt}
            width={40}
            height={40}
            priority
          />
          <h3 className={titleClasses}>{title}</h3>
        </div>
        <p className={paragraphClasses}>
          {children}
        </p>
      </div>
    )
  };

  const LoveCareBox = ({ text, description, src, alt }: { text: string, description: string, src: string, alt: string }) => (
    <div className={styles.loveCareContainer} >
      <div >
        <Image
          src={src}
          alt={alt}
          width={200}
          height={215}
          priority
          className={styles.imageBottomGap}
        />
      </div>
      <h3 >{text}</h3>
      <p>{description}</p>
    </div >
  )

  function Evidences({ evidence, name, subtitle }: { evidence: string, name: string, subtitle: string }) {

    return (
      <div className={styles.evidences}>
        {/* estreals */}
        <p>{evidence}</p>
        <div className={styles.evidencesRowImage}>
          <h3>{name}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  }

  return (
    <main >
      <Header />
      <Section>
        <div className={styles.containerTechnologyPetLife}>
          <div>
            <h2 className={styles.techTitle}>
              <span >Tecnologia em prol do bem-estar pet</span>
            </h2>
          </div>
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
        </div>
      </Section>
      <Section isBlue>
        <h2 className={styles.loveCareTitle}>
          Transformamos o amor em cuidado
        </h2>
        <div className={styles.wrapperLoveCare}>
          <LoveCareBox
            src="/imgs/pet-dogs/cat-see.png"
            alt="Cat dreaming"
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
            <Button text="Inscreva-se agora" style="dark" />
          </div>
          <div className={styles.overflowHidden}>
            <Image
              className={styles.mockupMobileImg}
              src={'/imgs/mobile-mockups/mobile-mockup-home.png'}
              alt={'Mockup mobile home screen'}
              width={450}
              height={350}
              priority
            />
          </div>
        </div>
      </Section>
      {/* <Section isBlue>
        <div className={styles.wrapperEvidences}>
          <p>O que dizem sobre a importâcia de um ecossistema como o MiAu Club</p>
          <h2>Depoimentos</h2>
          <div className={styles.wrapperEvidencesRow}>
            <Evidences
              subtitle="Tutora, 2 gatos"
              name="Mariana Martins"
              evidence="Não consigo mais imaginar a minha vida sem esse app!" />
            <Evidences
              subtitle="Tutora, Gatos"
              name="Marcela Gomes"
              evidence="O MiAu Club é incrível! Eu sempre encontro os melhores produtos para o meu gato. " />
            <Evidences
              subtitle="Tutor, cachorro"
              name="Hélio Santos"
              evidence="Cuidados personalizados e conveniência em um só lugar." />
          </div>
        </div>
      </Section> */}
      <Section darkBlue>
        <div className={styles.rowWrapper}>
          <div className={styles.partnersTxtWrapper}>
            <h2>MiAu Club para parceiros</h2>
            <p>O Ecossitema mais completo para você profissional da área pet. Conectamos você a milhares de tutores e pets, através da nossa API única onde conseguimos transformar dados brutos em insigths valiosos prontos para alavancar seus négocios e forncer o cuidado e bem-estar para os pets.</p>
            <Button text="Inscreva-se" size="regular" style="light" />
          </div>
          <div className={styles.mockupPartners}>
            <Image

              src={'/imgs/mobile-mockups/partner-mobile-mockup.png'}
              alt={'Mockup mobile home screen'}
              fill
              priority
            />
          </div>
        </div>
      </Section>
    </main >

  );
}