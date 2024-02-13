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
import { Bold } from './elements/bold.tsx';

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
          Guide DAO is an educational platform for Web3 and Solidity development. I worked on 2 projects: the website
          and the educational platform (LMS)
        </Text>
        <List>
          <ListItem>
            Developed and launched a website from the scratch using <Bold>Next.js</Bold>, <Bold>Typescript</Bold>,
            and <Bold>Sanity</Bold> as a headless CMS. This new site achieved a <Bold>30% increase</Bold> in inquiries compared
            to its predecessor.
          </ListItem>
          <ListItem>
            Implemented a flexible blog using Sanity, enabling the creation of articles through components, eliminating the need for developer involvement.
          </ListItem>
          <ListItem>
            Implemented a lead form feature complete with validations, CAPTCHA, CRM integration, and email notifications using Mailgun.
            Integrated <Bold>MongoDB</Bold> with regular backups for data storage.
          </ListItem>
          <ListItem>
            Integrated <Bold>Stripe</Bold> to facilitate payment processing.
          </ListItem>
          <ListItem>
            Supported multiple localizations.
          </ListItem>
          <ListItem>
            Crafted a <Bold>WebGL</Bold> shader for the homepage.
          </ListItem>
          <ListItem>
          Incorporated Sentry for efficient error monitoring and platform reliability.
          </ListItem>
          <ListItem>
            Wrote unit tests using <Bold>vitest</Bold> and <Bold>react-testing-library</Bold>.
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
          Arrival is a British electric vehicle manufacturer implementing a new micro-factory approach to production.
        </Text>
        <List>
          <ListItem>
            Led the research, development, integration, and onboarding of CMS solution, coordinating with <Bold>4 teams</Bold>.
          </ListItem>
          <ListItem>
            Designed the data model architecture for the Arrival Store project.
          </ListItem>
          <ListItem>
            Maintained UI-components of the primary design system library using <Bold>React</Bold> and <Bold>TypeScript</Bold>.
          </ListItem>
          <ListItem>
            Collected requirements, organized several meetings, and implemented an email layout solution that was adopted company-wide.
          </ListItem>
          <ListItem>
            Created prototypes to validate business and design hypotheses.
          </ListItem>
          <ListItem>
            Transformed Figma and Protopie prototypes into functional <Bold>React</Bold> components using <Bold>Typescript</Bold>.
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
          Moscow Coding School is a provider of leading online courses in tech education.
        </Text>
        <List>
          <ListItem>
            Developed and launched a website from scratch using <Bold>React</Bold> and <Bold>Gatsby</Bold>,
            integrated Mailgun and bank APIs.
          </ListItem>
          <ListItem>
            Constructed a CMS using <Bold>Contentful</Bold> and <Bold>GraphQL</Bold>.
          </ListItem>
          <ListItem>
            Worked with <Bold>AWS lambdas</Bold> and Vercel's serverless functions using <Bold>Node.js</Bold>.
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
          ONY is a renowned Russian digital agency specializing in strategy, branding, and digital solutions.
          They've garnered numerous prestigious awards, including Cannes Lions and Awwwards, and hold high rankings
          among digital productions and design studios in Russia.
        </Text>
        <List>
          <ListItem>
            I started my journey as an intern, and eventually grew into a developer. I worked on projects utilizing
            <Bold> React</Bold>, <Bold>Vue</Bold>, and <Bold>jQuery</Bold> for notable clients like Tretyakov gallery,
            KIA, ADG Group, and Megafon.
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