import { StyleSheet, View, Text } from '@react-pdf/renderer';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { Row } from './row.tsx';

const styles = StyleSheet.create({
  list: {
    width: '100%',
    display: 'flex',
  },
  item: {
    width: '100%',
    display: 'flex',
  },
  bullet: {
    display: 'flex',
    marginTop: -1,
    marginRight: 5,
  }
});

export const ListItem: FC<PropsWithChildren> = ({ children }) => (
  <View style={styles.item}>
    <Row>
      <View style={styles.bullet}>
        <Text>•</Text>
      </View>
      <Text>{children}</Text>
      </Row>
  </View>
)

type ItemType = ReactElement<typeof ListItem>;

export const List: FC<{ children: ItemType | ItemType[] }> = ({ children }) => (
  <View style={styles.list}>
    {children}
  </View>
)