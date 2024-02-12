import { Page, Text, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { Header } from './sections/header.tsx';
import { FONT_FAMILY } from './constants.ts';

import FontRegular from './fonts/regular.ttf';
import { Bullet } from './elements/bullet.tsx';
import { Row } from './elements/row.tsx';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: FONT_FAMILY.REGULAR,
    color: '#000000',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

Font.register({
  family: FONT_FAMILY.REGULAR,
  src: FontRegular,
  fontStyle: 'normal',
  fontWeight: 'normal'
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
        <Row style={{ justifyContent: 'center' }}>
          <Text>London, UK</Text>
        </Row>
      </Header>
    </Page>
  </Document>
);