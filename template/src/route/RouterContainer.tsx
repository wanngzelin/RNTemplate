/**
 * @file RouterContainer
 * @created 2024/4/26
 * @dec 页面容器
 */
import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StackParamList} from '@/types';
import {UserContext, UserInfo, UserInfoAction} from '@/serviceType';
import {routesConfig} from '@/config';
import Login from '@/pages/Login';

const Stack = createStackNavigator<StackParamList>();

const initialState: UserInfo = null;

function stateReducer(state: UserInfo, action: UserInfoAction): UserInfo {
  switch (action.type) {
    case 'signOut':
      return null;
    case 'signIn':
      return action.value;
    default:
      throw new Error('Unknown action');
  }
}
const RouterContainer: React.FC = () => {
  const [userInfo, dispatch] = useReducer(stateReducer, initialState);
  const authContext = React.useMemo(
    () => ({
      userInfo,
      signIn: (data: UserInfo) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'signIn', value: data});
      },
      signOut: () => dispatch({type: 'signOut'}),
    }),
    [userInfo],
  );

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <UserContext.Provider value={authContext}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}>
            {userInfo ? (
              routesConfig.map(v => (
                <Stack.Screen
                  key={v.name}
                  name={v.name}
                  component={v.component}
                  options={v.options ?? undefined}
                />
              ))
            ) : (
              <Stack.Screen name="Login" component={Login} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </SafeAreaProvider>
  );
};

export default RouterContainer;
