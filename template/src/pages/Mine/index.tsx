import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from 'route/RouteContainer';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from 'types/RouteParamList';

const Mine: React.FC<BottomTabScreenProps<BottomTabParamList>> = () => {
  const insets = useSafeAreaInsets();
  const {signOut} = React.useContext(AuthContext);

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
      <TouchableOpacity onPress={signOut}>
        <Text>退出登录</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Mine;
