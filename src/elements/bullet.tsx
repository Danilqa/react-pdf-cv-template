import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  bullet: {
    display: 'flex',
    marginRight: 3,
    marginLeft: 3,
  }
});

export const Bullet = () => (
  <View style={styles.bullet}>
    <Text>·</Text>
  </View>
);