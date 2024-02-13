import { StyleSheet, View, Text } from '@react-pdf/renderer';
import { FC, PropsWithChildren } from 'react';
import { COLOR } from '../constants.ts';

const styles = StyleSheet.create({
  sectionHeading: {
    display: 'flex',
    marginTop: 15,
    marginBottom: 8,
    paddingBottom: 2,
    width: '100%',
    borderBottom: `0.5pt solid ${COLOR.PRIMARY}`,
    fontSize: 9,
    textTransform: 'uppercase',
  },
});

export const SectionHeading: FC<PropsWithChildren> = ({ children }) => (
  <View style={styles.sectionHeading}>
    <Text>{children}</Text>
  </View>
)