import { StyleSheet, View, Text } from '@react-pdf/renderer';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { Row } from './row.tsx';

const styles = StyleSheet.create({
  list: {
    width: '100%',
    display: 'flex',
  },
  item: {
    // Eliminate React.PDF layout issue. When 100% width is used,
    // the text is overflowing the container.
    maxWidth: '98%',
    display: 'flex',
  },
  bullet: {
    display: 'flex',
    marginRight: 5,
  }
});

export const Li: FC<PropsWithChildren> = ({ children }) => (
  <View style={styles.item}>
    <Row>
      <View style={styles.bullet}>
        <Text>•</Text>
      </View>
      <Text>{children}</Text>
    </Row>
  </View>
)

type ItemType = ReactElement<typeof Li>;

export const Ul: FC<{ children: ItemType | ItemType[] }> = ({ children }) => (
  <View style={styles.list}>
    {children}
  </View>
)