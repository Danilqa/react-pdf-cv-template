import { memo, PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

interface HeaderProps extends PropsWithChildren {
  fullName: string;
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: -5,
  },
  fullName: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontStyle: 'bold',
    marginBottom: 2,
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