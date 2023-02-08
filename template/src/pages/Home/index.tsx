import React from 'react';
import { View, Text } from 'react-native';

export default class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    console.log(Text.prototype)
    return (
      <View>
         <Text>Home Component</Text>
      </View>
    );
  }
}

