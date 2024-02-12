import { memo, ReactNode } from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

interface HeaderProps {
  fullName: string;
  children: ReactNode;
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  fullName: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 12,
  }
});

export const Header = memo<HeaderProps>(({ fullName, children }) => (
  <View style={styles.header}>
    <Text style={styles.fullName}>{fullName}</Text>
    <View style={styles.description}>{children}</View>
  </View>
));