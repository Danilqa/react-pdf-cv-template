import { StyleSheet, View, Styles } from '@react-pdf/renderer';
import { FC, PropsWithChildren } from 'react';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
});

interface RowProps extends PropsWithChildren {
  justifyContent?: Styles[string]['justifyContent'];
}

export const Row: FC<RowProps> = ({ children, justifyContent }) => (
  <View style={[styles.row, { justifyContent }]}>
    {children}
  </View>
)