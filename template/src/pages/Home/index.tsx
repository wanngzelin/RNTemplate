import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from 'types/RouteParamList';

const Home: React.FC<BottomTabScreenProps<BottomTabParamList>> = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',

        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Text>Home Component</Text>
    </View>
  );
};

export default Home;
