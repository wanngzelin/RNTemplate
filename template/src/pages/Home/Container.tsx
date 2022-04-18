import React from 'react';
import { Text, View } from 'react-native';
import { NavigationProps } from 'types/routeTypes';


const Container: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <View >
      <Text>home</Text>
    </View>
  );
};

export default Container;

