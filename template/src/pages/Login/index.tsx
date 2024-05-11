import React from 'react';
import {View, TextInput, StyleSheet, Text, Pressable} from 'react-native';
import {UserContext} from '@/serviceType';
import {color} from '@/config';
import {AppScreenProps} from '@/types';

const Login: React.FC<AppScreenProps<'Login'>> = () => {
  const {signIn} = React.useContext(UserContext);
  return (
    <View style={styles.content}>
      <TextInput placeholder="Username" style={[styles.input]} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input]}
      />
      <Pressable style={styles.btn} onPress={() => signIn({userInfo: 'xxx'})}>
        <Text style={styles.text}>登录</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    margin: 8,
    padding: 10,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
  },
  button: {
    margin: 8,
  },
  text: {
    textAlign: 'center',
    margin: 8,
  },
  btn: {
    backgroundColor: color.primary[400],
    marginTop: 16,
    borderRadius: 5,
  },
});

export default Login;
