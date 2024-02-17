import { StyleSheet, Link } from '@react-pdf/renderer';
import { ComponentProps, FC } from 'react';
import { COLOR } from '../constants.ts';

const styles = StyleSheet.create({
  link: {
    color: COLOR.PRIMARY,
  }
});

export const A: FC<ComponentProps<typeof Link>> = ({ children, ...props }) => (
  <Link style={styles.link} {...props}>{children}</Link>
);