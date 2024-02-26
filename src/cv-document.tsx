import { Page, Text, Document, StyleSheet, Font } from '@react-pdf/renderer';

import { Header } from './sections/header.tsx';
import { COLOR, FONT_FAMILY } from './constants.ts';
import { Bullet } from './elements/bullet.tsx';
import { Row } from './elements/row.tsx';
import { SectionHeading } from './elements/section-heading.tsx';
import { Experience } from './sections/experience.tsx';
import { Ul, Li } from './elements/ul.tsx';
import { B } from './elements/b.tsx';
import { resolveFontPath } from './utils/path/path.utils.ts';
import { A } from './elements/a.tsx';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontFamily: FONT_FAMILY.COMPUTER_MODERN,
    color: COLOR.PRIMARY,
    backgroundColor: COLOR.SECONDARY,
    padding: '24pt 36pt',
    fontSize: 10,
    lineHeight: 1.2,
  },
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
          <Text>
            <A src="https://www.linkedin.com/in/dsitdikov">
              https://www.linkedin.com/in/dsitdikov
            </A>
          </Text>
          <Bullet />
          <Text>hello.boriskas@gmail.com</Text>
          <Bullet />
          <Text>+48 571801626</Text>
        </Row>
        <Row justifyContent="center">
          <Text>
            <A src="https://github.com/Danilqa">
              https://github.com/Danilqa
            </A>
          </Text>
          <Bullet />
          <Text>London, UK</Text>
        </Row>
      </Header>

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

      <SectionHeading>Work Experience</SectionHeading>

      <Experience
        title="SoftSwiss"
        subtitle="Senior Frontend Developer"
        startDate="Oct 2022"
        hasDuration={false}
        hasDivider
      >
        <Text>
          Working on a white-label Sportsbook platform for multinational users across the world. Developing 3 projects:
          the main application, CMS, and back office. Used <B>Next.js</B>, <B>React Query</B>,
          and <B>Zustand</B>.
        </Text>
        <Ul>
          <Li>
            Led the <B>performance optimization</B> process, improved <B>page load speed</B> of the main complex app:
            the Lighthouse score on mobiles increased <B>from 18 to 68</B>.
          </Li>
          <Li>
            Decomposed, planned and implemented new complex features.
          </Li>
        </Ul>
      </Experience>

      <Experience
        title="Arrival"
        subtitle="Frontend Developer, then Senior Full-Stack Developer"
        startDate="Jan 2019"
        endDate="Oct 2022"
        hasDuration={false}
        hasDivider
      >
        <Text>
          Arrival is a British electric vehicle manufacturer implementing a new micro-factory approach to production.
        </Text>
        <Ul>
          <Li>
            Created in-house procurement platform from scratch using <B>React</B>, <B>TypeScript</B>, <B>Redux</B>,
            and <B>microservices</B> on <B>Kotlin</B> and <B>Camunda BPMN</B>. It reduced supplier onboarding cycle time by <B>90%</B>,
            reduce costs by <B>40%</B>, and data quality improved by <B>95%</B>. <B>5000</B> suppliers onboarded.
          </Li>
          <Li>
            Created a UI Kit library with <B>29</B> <B>React</B> components, <B>100%</B> test code
            coverage and automatic doc generation.
          </Li>
          <Li>
            Implemented graph-based data visualization in-house app: discovering and controlling business-data using
            {" "}<B>React</B>, <B>D3.js</B>, and <B>SVG</B>
          </Li>
          <Li>
            Implemented automation of invoice management flow using Node.js resulting
          </Li>
          <Li>
            Integrated the best development practices: Sentry error monitoring, release process pipelines, linters, tracing, e2e tests
          </Li>
        </Ul>
      </Experience>

      <Experience
        title="VeeRoute"
        subtitle="Frontend Developer"
        startDate="Sep 2017"
        endDate="Jan 2019"
        hasDivider
        hasDuration={false}
        isLast
      >
        <Text>
          VeeRoute is a start-up that produces solutions for the logistics of big e-commerce clients.
          Worked on user interfaces for logistics optimization company products.
        </Text>
        <Ul>
          <Li>
            Helped the company stay alive by working with the team to create an MVP, a solution for the national
            Kazakhstan Post, in 3 months. This allowed the company to raise money. The solution increased the delivery
            of parcels by <B>5 times</B> in the country.
          </Li>
          <Li>
            Rewrote the main company project from <B>AngularJS</B> to <B>Angular 6</B> and <B>NgRx</B>.
          </Li>
        </Ul>
      </Experience>

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
          Mentored <B>37</B> developers at <A src="https://getmentor.dev/mentor/daniil-sitdikov-1781">GetMentor</A>,
          gave <B>6</B> tech talks at <A src="https://www.guidedao.xyz">GuideDao coding school</A>.
        </Text>
      </Experience>
      <Experience title="Open Source">
        <Ul>
          <Li>
            Developed <A src="https://github.com/Danilqa/node-file-router">node-file-router</A>
            {" "}(<B>118 stars</B>, <A src="https://devhunt.org/tool/node-file-router">2nd Tool of the Week, DevHunt</A>)
          </Li>
          <Li>
            Contributed to <A src="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55370">DefinitelyTyped / Jaeger</A> (<B>46.6k stars</B>)
          </Li>
          <Li>Other created projects:
            {" "}<A src="https://github.com/Danilqa/web-performance-handbook">web-performance-handbook</A>,
            {" "}<A src="https://github.com/Danilqa/image-proxy-service">image-proxy-service</A>,
            {" "}<A src="https://github.com/Danilqa/react-props-diff-logger">react-props-diff-logger</A>
          </Li>
        </Ul>
      </Experience>
      <Experience title="Tech Writting">
        <Text>
          Wrote <B>11</B> articles on <A src="https://dev.to/dsitdikov">Dev.to</A> and <A src="https://hackernoon.com/u/dsitdikov">Hackernoon</A>
          {" "}with <B>26k</B> views in total. <B>3 </B>articles were featured as top stories.
        </Text>.
      </Experience>
      <Experience title="Pet Projects">
        <Text>
          Developed a <A src="https://replica-podcast.ru">mobile app</A> using <B>React Native</B> with <B>35k users</B> from CIS across App Store
          and Google Play.
        </Text>
      </Experience>
      <Experience title="Hackaton — Digital Breakdown 2019" isLast>
        <Text>
          <B>3-rd place</B> in the world’s largest hackathon, as{" "}
          <A src="https://www.guinnessworldrecords.com/world-records/most-participants-in-a-software-development-marathon">
            confirmed by <B>Guinness World Records.</B>
          </A>
        </Text>
      </Experience>
    </Page>
  </Document>
);