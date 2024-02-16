import { Page, Text, Document, StyleSheet, Font } from '@react-pdf/renderer';

import { Header } from './sections/header.tsx';
import { COLOR, FONT_FAMILY } from './constants.ts';
import { Bullet } from './elements/bullet.tsx';
import { Row } from './elements/row.tsx';
import { SectionHeading } from './elements/section-heading.tsx';
import { Experience } from './sections/experience.tsx';
import { List, ListItem } from './elements/list.tsx';
import { Bold } from './elements/bold.tsx';
import { resolveFontPath } from './utils/path/path.utils.ts';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontFamily: FONT_FAMILY.COMPUTER_MODERN,
    color: COLOR.PRIMARY,
    backgroundColor: COLOR.SECONDARY,
    padding: '10pt 20pt',
    fontSize: 11,
    lineHeight: 1.2,
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
      src: resolveFontPath('regular'),
      fontStyle: 'normal',
      fontWeight: 'normal'
    },
    {
      src: resolveFontPath('bold'),
      fontStyle: 'bold',
      fontWeight: 'bold'
    },
  ]
});

export const CvDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header fullName="Daniil Sitdikov">
        <Row>
          <Text>https://www.linkedin.com/in/dsitdikov</Text>
          <Bullet />
          <Text>hello.boriskas@gmail.com</Text>
          <Bullet />
          <Text>+48 571801626</Text>
        </Row>
        <Row justifyContent="center">
          <Text>https://github.com/Danilqa</Text>
          <Bullet />
          <Text>London, UK</Text>
        </Row>
      </Header>

      <SectionHeading>Experience</SectionHeading>

      <Experience
        title="SoftSwiss"
        subtitle="Senior Frontend Developer"
        startDate="Oct 2022"
        hasDivider
      >
        <Text>
          Working on a white-label Sportsbook platform for multinational users across the world. Developing 3 projects:
          the main application, CMS, and back office. Used <Bold>Next.js</Bold>, <Bold>React Query</Bold>,
          and <Bold>Zustand</Bold>.
        </Text>
        <List>
          <ListItem>
            Decomposed, planned and implemented new complex features.
          </ListItem>
          <ListItem>
            Analysed and improved <Bold>performance</Bold> and <Bold>page load speed</Bold> of the main app:
            the Lighthouse score on mobiles increased <Bold>from 18 to 68</Bold>.
          </ListItem>
        </List>
      </Experience>

      <Experience
        title="Arrival"
        subtitle="Frontend Developer, then Senior Full-Stack Developer"
        startDate="Jan 2019"
        endDate="Oct 2022"
        hasDivider
      >
        <Text>
          Arrival is a British electric vehicle manufacturer implementing a new micro-factory approach to production.
        </Text>
        <List>
          <ListItem>
            Created in-house procurement platform from scratch using <Bold>React</Bold>, <Bold>TypeScript</Bold>, <Bold>Redux</Bold>,
            and <Bold>microservices</Bold> on <Bold>Kotlin</Bold> and <Bold>Camunda BPMN</Bold>. It reduced supplier onboarding cycle time by <Bold>90%</Bold>,
            reduce costs by <Bold>40%</Bold>, and data quality improved by <Bold>95%</Bold>. <Bold>5000</Bold> suppliers onboarded.
          </ListItem>
          <ListItem>
            Created a UI Kit library with <Bold>29</Bold> <Bold>React</Bold> components, <Bold>100%</Bold> test code
            coverage and automatic doc generation.
          </ListItem>
          <ListItem>
            Implemented graph-based data visualization in-house app: discovering and controlling business-data using
            {" "}<Bold>React</Bold>, <Bold>D3.js</Bold>, and <Bold>SVG</Bold>
          </ListItem>
          <ListItem>
            Integrated the best development practices: Sentry error monitoring, release process pipelines, linters, tracing, e2e tests
          </ListItem>
        </List>
      </Experience>

      <Experience
        title="VeeRoute"
        subtitle="Frontend Developer"
        startDate="Sep 2017"
        endDate="Jan 2019"
        hasDivider
        isLast
      >
        <Text>
          VeeRoute is a start-up that produces solutions for the logistics of big e-commerce clients.
          Worked on user interfaces for logistics optimization company products.
        </Text>
        <List>
          <ListItem>
            Helped the company stay alive by working with the team to create an MVP, a specific solution for the national
            Kazakhstan Post, in 3 months. This allowed the company to raise money. The solution increased the delivery
            of parcels by <Bold>5 times</Bold> in the country.
          </ListItem>
          <ListItem>
            Rewrote the main company project from <Bold>AngularJS</Bold> to <Bold>Angular 6</Bold> and <Bold>NgRx</Bold>.
          </ListItem>
        </List>
      </Experience>

      <SectionHeading>Skills</SectionHeading>
      <Row>
        <Text>JavaScript</Text>
        <Bullet />
        <Text>TypeScript</Text>
        <Bullet />
        <Text>React</Text>
        <Bullet />
        <Text>Next.js</Text>
        <Bullet />
        <Text>Performance Optimization</Text>
        <Bullet />
        <Text>React Query</Text>
        <Bullet />
        <Text>Zustand</Text>
        <Bullet />
        <Text>Redux</Text>
      </Row>

      <SectionHeading>Education</SectionHeading>
      <Experience
        title="Saint Petersburg State University of Aerospace Instrumentation"
        subtitle="Bachelor’s Degree in Software Engineering (GPA 4.28 / 5.0)"
        startDate="2015"
        endDate="2019"
        hasDuration={false}
        isLast
      />

      <SectionHeading>Public Activities</SectionHeading>
      <Experience title="Mentorship">
        <Text>
          Mentored <Bold>37</Bold> developers at GetMentor platform, gave <Bold>6</Bold> tech talks at GuideDao coding
          school.
        </Text>
      </Experience>
      <Experience title="Open Source">
        <List>
          <ListItem>
            Created node-file-router (<Bold>118 stars</Bold>, <Bold>2-nd Tool of Week</Bold>)
          </ListItem>
          <ListItem>
            Contributed to DefinitelyTyped / Jaeger (<Bold>46.6k stars</Bold>)
          </ListItem>
          <ListItem>Other created projects: web-performance-handbook, image-proxy-service, react-props-diff-logger</ListItem>
        </List>
      </Experience>
      <Experience title="Tech Writting">
        <Text>
          Wrote <Bold>11</Bold> articles on Dev.to and Hackernoon with <Bold>26k</Bold> views in total. <Bold>3 </Bold>
          articles were featured as top stories.
        </Text>.
      </Experience>
      <Experience title="Pet Projects">
        <Text>
          Developed a mobile app using <Bold>React Native</Bold> with <Bold>35k users</Bold> from CIS across App Store
          and Google Play.
        </Text>
      </Experience>
      <Experience title="Hackaton — Digital Breakdown 2019" isLast>
        <Text>
          <Bold>3-rd place</Bold> in the world’s largest hackathon, as confirmed by <Bold>Guinness World Records.</Bold>
        </Text>
      </Experience>
    </Page>
  </Document>
);