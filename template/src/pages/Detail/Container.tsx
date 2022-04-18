import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ContainerProps { }

const Container = (props: ContainerProps) => {
  return (
    <View style={styles.container}>
      <Text>Container</Text>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {}
});
