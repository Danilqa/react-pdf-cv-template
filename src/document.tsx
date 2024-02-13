import { Page, Text, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { Header } from './sections/header.tsx';
import { COLOR, FONT_FAMILY } from './constants.ts';
import { Bullet } from './elements/bullet.tsx';
import { Row } from './elements/row.tsx';
import { SectionHeading } from './elements/section-heading.tsx';
import { Experience } from './sections/experience.tsx';
import { List, ListItem } from './elements/list.tsx';

import FontRegular from './fonts/regular.ttf';
import FontBold from './fonts/bold.ttf';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontFamily: FONT_FAMILY.COMPUTER_MODERN,
    color: COLOR.PRIMARY,
    backgroundColor: COLOR.SECONDARY,
    padding: '10pt 20pt',
    fontSize: 11,
    lineHeight: 1.1,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

Font.register({
  family: FONT_FAMILY.COMPUTER_MODERN,
  fonts: [
    {
      src: FontRegular,
      fontStyle: 'normal',
      fontWeight: 'normal'
    },
    {
      src: FontBold,
      fontStyle: 'bold',
      fontWeight: 'bold'
    },
  ]
});

export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header fullName="Nadya Koroleva">
        <Row>
          <Text>https://www.linkedin.com/in/nadyakoroleva</Text>
          <Bullet/>
          <Text>nadin.koroleva@gmail.com</Text>
          <Bullet/>
          <Text>+48 571025611</Text>
        </Row>
        <Row justifyContent="center">
          <Text>London, UK</Text>
        </Row>
      </Header>

      <SectionHeading>Experience</SectionHeading>

      <Experience
        title="Guide DAO"
        subtitle="Frontend Developer"
        startDate="Feb 2023"
        hasDivider
      >
        <Text>
          3M is an American multinational conglomerate (Ranked No. 102 in Fortune 500) operating in the fields of
        </Text>
        <List>
          <ListItem>
            Developed and launched a website from the scratch using Next.js, Typescript,
            and Sanity as a headless CMS. This new site achieved a 30% increase in inquiries compared
            to its predecessor.
          </ListItem>
          <ListItem>
            Implemented a flexible blog using Sanity, enabling the creation of articles through components, eliminating the need for developer involvement.
          </ListItem>
          <ListItem>
            Implemented a lead form feature complete with validations, CAPTCHA, CRM integration, and email notifications using Mailgun. Integrated MongoDB with regular backups for data storage.
          </ListItem>
          <ListItem>
            Integrated Stripe to facilitate payment processing.
          </ListItem>
          <ListItem>
            Supported multiple localizations.
          </ListItem>
          <ListItem>
            Crafted a WebGL shader for the homepage.
          </ListItem>
          <ListItem>
          Incorporated Sentry for efficient error monitoring and platform reliability.
          </ListItem>
          <ListItem>
            Wrote unit tests using vitest and react-testing-library.
          </ListItem>
        </List>
      </Experience>

      <Experience
        title="ARRIVAL"
        subtitle="Frontend Developer"
        startDate="Feb 2020"
        endDate="Feb 2023"
        hasDivider
      >
        <Text>
          3M is an American multinational conglomerate (Ranked No. 102 in Fortune 500)
        </Text>
        <List>
          <ListItem>
            Led the research, development, integration, and onboarding of CMS solution, coordinating with 4 teams.
          </ListItem>
          <ListItem>
            Designed the data model architecture for the Arrival Store project.
          </ListItem>
          <ListItem>
            Maintained UI-components of the primary design system library using React and TypeScript.
          </ListItem>
          <ListItem>
            Collected requirements, organized several meetings, and implemented an email layout solution that was adopted company-wide.
          </ListItem>
          <ListItem>
            Created prototypes to validate business and design hypotheses.
          </ListItem>
          <ListItem>
            Transformed Figma and Protopie prototypes into functional React components using Typescript.
          </ListItem>
        </List>
      </Experience>

      <Experience
        title="Moscow Coding School"
        subtitle="Frontend Developer"
        startDate="Aug 2019"
        endDate="Feb 2020"
        hasDivider
      >
        <Text>
          3M is an American multinational conglomerate (Ranked No. 102 in Fortune 500)
        </Text>
        <List>
          <ListItem>
            Developed and launched a website from scratch using React and Gatsby, integrated Mailgun and bank APIs.
          </ListItem>
          <ListItem>
            Constructed a CMS using Contentful and GraphQL.
          </ListItem>
          <ListItem>
            Worked with AWS lambdas and Vercel's serverless functions using Node.js.
          </ListItem>
        </List>
      </Experience>

      <Experience
        title="ONY"
        subtitle="Junior Frontend Developer"
        startDate="Jun 2018"
        endDate="Aug 2019"
        isLast
      >
        <Text>
          3M is an American multinational conglomerate (Ranked No. 102 in Fortune 500)
        </Text>
        <List>
          <ListItem>
            I started my journey as an intern, and eventually grew into a developer. I worked on projects utilizing React,
            Vue, and jQuery for notable clients like Tretyakov gallery, KIA, ADG Group, and Megafon.
          </ListItem>
        </List>
      </Experience>

      <SectionHeading>Skills</SectionHeading>
      <Row>
        <Text>JavaScript</Text>
        <Bullet/>
        <Text>TypeScript</Text>
        <Bullet/>
        <Text>React</Text>
        <Bullet/>
        <Text>Next.js</Text>
        <Bullet/>
        <Text>Sanity</Text>
        <Bullet/>
        <Text>GraphQL</Text>
      </Row>

      <SectionHeading>Public Activities</SectionHeading>
      <Experience title="Mentorship">
        <Text>Assistant on online-courses Frontend development for beginners.</Text>
      </Experience>
      <Experience title="Podcast">
        <Text>Made a podcast Standing desk for code newbies.</Text>
      </Experience>
      <Experience title="Fashion Tech Summit">
        <Text>Had a talk at Fashion Tech Summit with theme Female creative coding.</Text>
      </Experience>
      <Experience title="Workshops" isLast>
        <Text>Made a few workshops for designers of ONY studio about Creative Coding.</Text>
      </Experience>
    </Page>
  </Document>
);