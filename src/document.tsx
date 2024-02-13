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
    padding: 20,
    fontSize: 11,
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
        subtitle="Software Engineer"
        startDate="Jan 2020"
        endDate="present"
        hasDivider
      >
        <Text>
          3M is an American multinational conglomerate (Ranked No. 102 in Fortune 500) operating in the fields of
          industry, worker safety, U.S. health care, and consumer goods with 95,000 employees, operations in 70+countries
          and $35 billion in total sales in 2021.
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
        </List>
      </Experience>

      <Experience
        title="Guide DAO"
        subtitle="Software Engineer"
        startDate="Jan 2020"
        endDate="present"
        hasDivider
      >
        <Text>
          3M is an American multinational conglomerate (Ranked No. 102 in Fortune 500) operating in the fields of
          industry, worker safety, U.S. health care, and consumer goods with 95,000 employees, operations in 70+countries
          and $35 billion in total sales in 2021.
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
        </List>
      </Experience>

      <Experience
        title="Guide DAO"
        subtitle="Software Engineer"
        startDate="Jan 2020"
        endDate="present"
        hasDivider
        isLast
      >
        <Text>
          3M is an American multinational conglomerate (Ranked No. 102 in Fortune 500) operating in the fields of
          industry, worker safety, U.S. health care, and consumer goods with 95,000 employees, operations in 70+countries
          and $35 billion in total sales in 2021.
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
        </List>
      </Experience>

      <SectionHeading>Skills</SectionHeading>
      <Row>
        <Text>JavaScript</Text>
        <Bullet/>
        <Text>React</Text>
        <Bullet/>
        <Text>Next.js</Text>
        <Bullet/>
        <Text>Node.js</Text>
        <Bullet/>
        <Text>Sanity</Text>
        <Bullet/>
        <Text>GraphQL</Text>
      </Row>

      <SectionHeading>Public Activities</SectionHeading>
      <Experience title="Open Source">
        <Text>Contributed to the open-source project "react-pdf" by adding a new feature to the library.</Text>
      </Experience>
      <Experience title="Open Source" isLast>
        <Text>Contributed to the open-source project "react-pdf" by adding a new feature to the library.</Text>
      </Experience>

      <SectionHeading>Education</SectionHeading>
      <Experience title="SUAI" subtitle="B.S., Software Engineering" startDate="2015" endDate="2019" isLast/>
    </Page>
  </Document>
);