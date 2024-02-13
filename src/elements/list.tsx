import { StyleSheet, View, Text } from '@react-pdf/renderer';
import { FC, PropsWithChildren, ReactElement } from 'react';

const styles = StyleSheet.create({
  list: {
    width: '100%',
    display: 'flex',
  },
  item: {
    width: '100%',
    display: 'flex',
  }
});

export const ListItem: FC<PropsWithChildren> = ({ children }) => (
  <View style={styles.item}>
    <Text>• {children}</Text>
  </View>
)

export const List: FC<{ children: ReactElement<typeof ListItem>[] }> = ({ children }) => (
  <View style={styles.list}>
    {children}
  </View>
)