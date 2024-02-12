import { StyleSheet, View, Styles } from '@react-pdf/renderer';
import { FC, PropsWithChildren } from 'react';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

interface RowProps extends PropsWithChildren {
  style?: Styles[string];
}

export const Row: FC<RowProps> = ({ children, style = {} }) => (
  <View style={[styles.row, style]}>
    {children}
  </View>
)