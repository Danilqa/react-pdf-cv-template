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

// Keep words whole: the default hyphenation splits words like "Lighthouse" across lines.
Font.registerHyphenationCallback((word) => [word]);

export const CvDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header fullName="Daniil Sitdikov">
        <Row justifyContent="center">
          <Text>Lead Software Engineer</Text>
        </Row>
        <Row justifyContent="center">
          <Text>+44 7342343988</Text>
          <Bullet />
          <Text>
            <A src="mailto:dan.sitdikov@gmail.com">dan.sitdikov@gmail.com</A>
          </Text>
          <Bullet />
          <Text>
            <A src="https://github.com/danilqa">github.com/danilqa</A>
          </Text>
          <Bullet />
          <Text>
            <A src="https://www.linkedin.com/in/dsitdikov">linkedin.com/in/dsitdikov</A>
          </Text>
        </Row>
        <Row justifyContent="center">
          <Text>London, UK</Text>
          <Bullet />
          <Text>UK Global Talent Visa (I have a work permit in the UK)</Text>
        </Row>
      </Header>

      <SectionHeading>Professional Summary</SectionHeading>
      <Ul>
        <Li>Engineer with <B>8+</B> years of experience building fintech, procurement, and enterprise SaaS products.</Li>
        <Li>
          Developed a production-ready library <A src="https://github.com/Danilqa/node-file-router">node-file-router</A>
          {" "}(206 stars, 1st Tool of the Week, DevHunt).
        </Li>
        <Li>
          Built company-wide background AI agents system (11 stars, <A src="https://github.com/Danilqa/kombinat">GitHub</A>)
          and E2E testing framework and workflow.
        </Li>
      </Ul>

      <SectionHeading>Skills</SectionHeading>
      <Row>
        <Text>Kotlin</Text>
        <Bullet />
        <Text>Postgres</Text>
        <Bullet />
        <Text>React</Text>
        <Bullet />
        <Text>Node.js</Text>
        <Bullet />
        <Text>TypeScript</Text>
        <Bullet />
        <Text>AI workflows</Text>
      </Row>

      <SectionHeading>Experience</SectionHeading>

      <Experience
        title="Apron"
        subtitle="Tech Lead"
        startDate="Jun 2024"
        hasDuration={false}
        hasDivider
      >
        <Text>
          Apron is a payments and AI bookkeeping SaaS for businesses, backed by Index Ventures (Discord, Figma, Revolut).
        </Text>
        <Ul>
          <Li>
            Technical owner of payments, wallets, authentication, user management, and company-wide engineering
            initiatives.
          </Li>
          <Li>
            Launched a company-wide engine of <B>24/7 background AI agents</B> that investigate production incidents,
            close product gaps, monitor feature health and user feedback, and fix bugs and accessibility issues. Adopted
            by 6 teams; in one month, it helped close 73 engineering escalation tickets and 10 accessibility issues, and
            proactively fixed 5 bugs.
          </Li>
          <Li>Led the development and launch of the Rewards product stream with Virgin, driving 30% revenue growth.</Li>
          <Li>
            Led the development of Wallets, company-wide authentication (SCA), and major payment products redesigns.
          </Li>
          <Li>
            Delivered a company-wide E2E testing system, enabling 3 product teams to own and scale their <B>QA</B>.
          </Li>
          <Li>
            Led the payment success project, implementing tools and monitoring that reduced the manual effort required
            to detect and resolve stuck payments. This reduced engineering intervention from 6% to 2%.
          </Li>
        </Ul>
      </Experience>

      <Experience
        title="SoftSwiss"
        subtitle="Senior Software Engineer"
        startDate="Oct 2022"
        endDate="May 2024"
        hasDuration={false}
        hasDivider
      >
        <Text>
          Company with €450M+ monthly turnover. Worked on a white-label product operating under 150 brands in 62
          countries.
        </Text>
        <Ul>
          <Li>
            Led <B>performance optimization</B> for a high-traffic sportsbook app on <B>React</B>, improving load speed
            and mobile Lighthouse score from 6 to 72, significantly improving usability for real users on low-end
            devices.
          </Li>
        </Ul>
      </Experience>

      <Experience
        title="Arrival"
        subtitle="Lead Software Engineer"
        startDate="Jan 2019"
        endDate="Oct 2022"
        hasDuration={false}
        hasDivider
      >
        <Text>
          Arrival is a British electric vehicle manufacturer with an IPO in ’21 and a $3B valuation.
        </Text>
        <Ul>
          <Li>
            Developed an in-house <B>procurement platform</B> using <B>React, TypeScript</B> and <B>Kotlin
            microservices</B>, reducing supplier onboarding cycle time by 90%, cutting costs by 40%, and enhancing data
            quality for over 5000 suppliers.
          </Li>
          <Li>
            Launched the invoice management system by establishing data pipelines with Node.js and Rossum <B>AI</B> to
            extract, recognize, and export invoices, reducing invoice processing time from 15 minutes to 1 minute.
          </Li>
        </Ul>
      </Experience>

      <Experience
        title="VeeRoute"
        subtitle="Software Engineer"
        startDate="Oct 2017"
        endDate="Jan 2019"
        hasDivider
        hasDuration={false}
        isLast
      >
        <Text>
          VeeRoute is a B2B SaaS company providing logistics solutions.
        </Text>
        <Ul>
          <Li>
            Developed a front-end app for the logistics planner for the National Kazakhstan Post in 3 months
            using <B>TypeScript</B> and <B>Angular</B>, reducing parcel delivery time 5x.
          </Li>
        </Ul>
      </Experience>

      <SectionHeading>Education</SectionHeading>
      <Experience
        title="Bachelor’s Degree in Software Engineering"
        subtitle="Saint Petersburg State University of Aerospace Instrumentation"
        startDate="2015"
        endDate="2019"
        hasDuration={false}
        isLast
      />

      <SectionHeading>Activities and Projects</SectionHeading>
      <Ul>
        <Li>
          <B>Mentorship:</B> gave 6 tech talks and mentored students at GuideDao (#1 crypto and AI-coding school in the
          CIS).
        </Li>
        <Li>
          <B>Open Source:</B> contributed to
          {" "}<A src="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55370">DefinitelyTyped / Jaeger</A>
          {" "}(46.6k stars).
        </Li>
        <Li>
          <B>Other:</B> 3rd place in the world’s largest hackathon, with over 3.2k participants, verified by <B>Guinness
          World Records</B>.
        </Li>
      </Ul>
    </Page>
  </Document>
);
