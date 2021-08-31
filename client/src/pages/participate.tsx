import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import ActionCard from "../components/ActionCard/ActionCard";
import AttendModal from "../components/AttendModal/AttendModal";
import Footer from "../components/Footer";
import GDPRBanner from "../components/GDPRBanner";
import Header from "../components/Header/Header";
import Hero from "../components/Hero";
import InformationBlock from "../components/InformationBlock/InformationBlock";
import LogoBar from "../components/LogoBar/LogoBar";
import ParticipateModal from "../components/ParticipateModal/ParticipateModal";
import PhotoGallery from "../components/PhotoGallery";
import SponsorModal from "../components/SponsorModal/SponsorModal";
import "../css/index.css";
import { ContentContainer, Spacer } from "../theme/base";
import { parseContentfulBody } from "../util/contentful";
import { downloadRemoteFile, parseContentfulFileUrl } from "../util/helpers";

type InformationBlock = {
  title: string;
  description: { description: string };
  buttonText: string;
};

type RegisterPageContextData = {
  hero: {
    image: {
      fluid: { src: string };
    };
    title: string;
    body: { body: string };
  };
  sponsorLogos: { file: { url: string } }[];
  photoGallery: {
    title: string;
    description: string;
    fixed: {
      width: number;
      height: number;
      srcWebp: string;
    };
  }[];
  informationSection: InformationBlock;
  informationSectionFiles: {
    file: {
      url: string;
      contentType: string;
    };
  }[];
  attendSection: InformationBlock;
  attendButtonDisabled: boolean;
  attendButtonLink: string;
  competeSection: InformationBlock;
  competeButtonDisabled: boolean;
  competeButtonLink: string;
  sponsorSection: InformationBlock;
  sponsorButtonDisabled: boolean;
  sponsorButtonLink: string;
};

export const RegisterPageContext = React.createContext<RegisterPageContextData>(
  null
);

const ParticipatePage = ({ location }) => {
  const [attendFormVisible, setAttendFormVisible] = React.useState(
    location.hash === "#attend"
  );
  const [
    participationFormVisible,
    setParticipationFormVisible,
  ] = React.useState(location.hash === "#participate");
  const [sponsorFormVisible, setSponsorFormVisible] = React.useState(
    location.hash === "#sponsor"
  );
  const emailLink = React.useRef<HTMLAnchorElement>();

  const { allContentfulRegisterPage } = useStaticQuery(graphql`
    query {
      allContentfulRegisterPage {
        edges {
          node {
            informationSectionFiles {
              file {
                url
                contentType
              }
            }
            informationSection {
              title
              buttonText
              description {
                description
              }
            }
            attendSection {
              title
              buttonText
              description {
                description
              }
            }
            attendButtonDisabled
            attendButtonLink
            competeSection {
              title
              buttonText
              description {
                description
              }
            }
            competeButtonDisabled
            competeButtonLink
            sponsorSection {
              title
              buttonText
              description {
                description
              }
            }
            sponsorButtonDisabled
            sponsorButtonLink
            hero {
              title
              body {
                body
              }
              image {
                fluid {
                  src
                }
              }
            }
            sponsorLogos {
              file {
                url
              }
            }
            photoGallery {
              title
              description
              fixed(height: 800) {
                width
                height
                srcWebp
              }
            }
          }
        }
      }
    }
  `);

  const data: RegisterPageContextData = allContentfulRegisterPage.edges[0].node;
  const heroImage = parseContentfulFileUrl(data.hero.image.fluid.src);

  const toggleAttendModalVisibility = () => {
    setAttendFormVisible(!attendFormVisible);
  };

  const toggleParticipateModalVisibility = () => {
    setParticipationFormVisible(!participationFormVisible);
  };

  const toggleSponsorModalVisibility = () => {
    setSponsorFormVisible(!sponsorFormVisible);
  };

  const onClickAttend = () => {
    if (data.attendButtonLink) {
      return window.open(data.attendButtonLink);
    }

    toggleAttendModalVisibility();
  };

  const onClickCompete = () => {
    // if (data.competeButtonLink) {
    //   return window.open(data.competeButtonLink);
    // }
    if (emailLink?.current) {
      emailLink?.current?.click();
    }
    // toggleParticipateModalVisibility();
  };

  const onClickSponsor = () => {
    if (data.sponsorButtonLink) {
      return window.open(data.sponsorButtonLink);
    }

    toggleSponsorModalVisibility();
  };

  const onClickDownloadFiles = () => {
    data.informationSectionFiles.forEach(({ file }) =>
      downloadRemoteFile(parseContentfulFileUrl(file.url), file.contentType)
    );
  };

  const lineBreak = (amount = 1) => "%0D".repeat(amount);
  const emailText = `Bidragen skickas in via formuläret som PDF enligt mall tillsammans med en högupplöst bild (.jpg) eller film (.mp4) i separat fil. Det går även att istället dela mediafilerna via länk i fritextfältet som då ej får vara tidsbegränsad. Max 100 mb per fil. Filmer max 2 minuter långa.${lineBreak(
    2
  )}För "Bästa print" ska även ett fysiskt exemplar skickas in senast den 3 september. Mer info om detta hittar ni i tävlingsmaterialet på sidan "om tävlingen".${lineBreak(
    2
  )}Företagsnamn:${lineBreak(2)}Kontakt e-mail:${lineBreak(
    2
  )}Kategorier:${lineBreak(2)}Lämna ett meddelande:${lineBreak(6)}`;
  const emailSubject = `Jag är redo att tävla!`;

  return (
    <RegisterPageContext.Provider value={data}>
      <Header />
      <AttendModal
        visible={attendFormVisible}
        onClose={toggleAttendModalVisibility}
      />
      <ParticipateModal
        visible={participationFormVisible}
        onClose={toggleParticipateModalVisibility}
      />
      <SponsorModal
        visible={sponsorFormVisible}
        onClose={toggleSponsorModalVisibility}
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>INHOUSE</title>
        <meta
          name="description"
          content="Sveriges främsta kommunikationstävling för Inhousebyråer"
        />
        <meta
          name="facebook-domain-verification"
          content="0xklyx0qcy9dxsx3cw5u7dw4swjweq"
        />
        <html lang="en" />
      </Helmet>
      <main style={{ position: "relative" }}>
        <Hero
          title={data.hero.title}
          body={data.hero.body.body}
          image={heroImage}
        />
        <ContentContainer>
          <section id="attend">
            <Spacer exact={70} />
            <ActionCard
              title={data.attendSection.title}
              body={parseContentfulBody(
                data.attendSection.description.description
              )}
              button={{
                title: data.attendSection.buttonText,
                onClick: onClickAttend,
                disabled: data.attendButtonDisabled,
                comingSoon: true,
              }}
            />
          </section>
          <section id="participate">
            <a
              ref={emailLink}
              href={`mailto:info@inhousetavlingen.se?subject=${emailSubject}&body=${emailText}`}
              target="_blank"
              style={{ display: "none" }}
            />
            <Spacer exact={80} />
            <ActionCard
              inverted
              title={data.competeSection.title}
              body={parseContentfulBody(
                data.competeSection.description.description
              )}
              button={{
                title: data.competeSection.buttonText,
                onClick: onClickCompete,
                disabled: data.competeButtonDisabled,
                comingSoon: true,
              }}
            />
          </section>
          <section id="sponsor">
            <Spacer exact={80} />
            <ActionCard
              title={data.sponsorSection.title}
              body={parseContentfulBody(
                data.sponsorSection.description.description
              )}
              button={{
                title: data.sponsorSection.buttonText,
                onClick: onClickSponsor,
                disabled: data.sponsorButtonDisabled,
                comingSoon: true,
              }}
              bottom={data.sponsorLogos?.length > 0 && <LogoBar />}
            />
          </section>
          <Spacer exact={140} />
          <InformationBlock
            title={data.informationSection.title}
            body={parseContentfulBody(
              data.informationSection.description.description
            )}
            cta={{
              text: data.informationSection.buttonText,
              onClick: onClickDownloadFiles,
            }}
          />
          <Spacer exact={140} />
          {/* <section id="history">
            {data.photoGallery?.length > 0 && (
              <PhotoGallery
                photos={data.photoGallery.map(
                  ({
                    fixed: { srcWebp: src, height, width },
                    title,
                    description,
                  }) => ({
                    height,
                    width,
                    src: parseContentfulFileUrl(src),
                    title,
                    description,
                  })
                )}
              />
            )}
          </section>
          <Spacer exact={80} /> */}
        </ContentContainer>
        <div style={{ background: "var(--background)" }}>
          <Footer />
          <GDPRBanner />
        </div>
      </main>
    </RegisterPageContext.Provider>
  );
};

export default ParticipatePage;
