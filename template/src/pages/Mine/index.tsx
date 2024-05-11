import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {UserContext} from '@/serviceType';

const Mine: React.FC = () => {
  const insets = useSafeAreaInsets();
  const {signOut} = React.useContext(UserContext);

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
      <Pressable onPress={signOut}>
        <Text>退出登录</Text>
      </Pressable>
    </View>
  );
};

export default Mine;
