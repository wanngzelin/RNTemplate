import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import color from 'config/color';
import {AuthContext} from 'route/RouteContainer';

const Login: React.FC = () => {
  const {signIn} = React.useContext(AuthContext);
  return (
    <View style={styles.content}>
      <TextInput placeholder="Username" style={[styles.input]} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input]}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => signIn({userInfo: 'xxx'})}>
        <Text style={styles.text}>登录</Text>
      </TouchableOpacity>
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
    borderColor: color.primary[400],
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
