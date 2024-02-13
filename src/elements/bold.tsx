import { Text, StyleSheet } from '@react-pdf/renderer';
import { FC, PropsWithChildren } from 'react';

const styles = StyleSheet.create({
  bold: {
    fontStyle: 'bold'
  }
});

export const Bold: FC<PropsWithChildren> = ({ children }) => (
  <Text style={styles.bold}>{children}</Text>
);