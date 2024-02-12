import { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  breakLine: {
    width: '100%',
    display: 'flex',
  },
});

export const BreakLine = () => (
  <View style={styles.breakLine}/>
)