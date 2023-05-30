import React, {useReducer, useMemo, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from 'pages/Login';
import {StackParamList} from 'types/RouteParamList';
import Storage from 'utils/storage';
import color from 'config/color';
import RouteArr from 'config/routeArr';

const Stack = createNativeStackNavigator<StackParamList>();

export const AuthContext = React.createContext<{
  isSignedIn: boolean;
  signIn: (T: any) => void;
  signOut: () => void;
}>({
  isSignedIn: false,
  signIn: () => {},
  signOut: () => {},
});

type State = {
  isLoading: boolean;
  isSignout: boolean;
  userInfo: undefined | string;
};

type Action =
  | {type: 'RESTORE_TOKEN'; user: undefined | string}
  | {type: 'SIGN_IN'; user: string}
  | {type: 'SIGN_OUT'};

// APP初始化加载登录信息
const SplashScreen = () => {
  return (
    <View style={styles.content}>
      <ActivityIndicator />
    </View>
  );
};

const RouterContainer: React.FC = () => {
  // 初始化登录信息
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userInfo: action.user,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isLoading: false,
            isSignout: false,
            userInfo: action.user,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            isLoading: false,
            userInfo: undefined,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userInfo: undefined,
    },
  );

  // 获取当前登录信息
  useEffect(() => {
    Storage.getItem('userInfo').then(res => {
      if (!res) {
        return dispatch({type: 'SIGN_OUT'});
      }
      return dispatch({type: 'SIGN_IN', user: res});
    });
  }, []);

  const isSignedIn = state.userInfo !== undefined;

  const authContext = useMemo(
    () => ({
      isSignedIn,
      signIn: (T: any) => {
        dispatch({type: 'SIGN_IN', user: T});
        Storage.setItem('userInfo', T);
      },
      signOut: () => {
        dispatch({type: 'SIGN_OUT'});
        Storage.clearItem('userInfo');
      },
    }),
    [isSignedIn],
  );

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackTitleVisible: false,
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: color.primary[400],
              },
            }}>
            {isSignedIn ? (
              <Stack.Group>
                {RouteArr.map(v => (
                  <Stack.Screen
                    key={v.name}
                    name={v.name}
                    component={v.component}
                    options={v.options ?? {}}
                  />
                ))}
              </Stack.Group>
            ) : (
              <Stack.Group>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{headerTitle: '登录'}}
                />
              </Stack.Group>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});

export default RouterContainer;
