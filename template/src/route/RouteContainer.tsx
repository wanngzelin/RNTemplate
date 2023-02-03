import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RouteArr from 'config/routeConfig';
import { StackParamList } from 'types/RouteParamList';

const Stack = createNativeStackNavigator<StackParamList>()

const RouterContainer: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitleVisible: false,
            headerTitleAlign: 'center'
          }}
        >
          {
            RouteArr.map(v => <Stack.Screen key={v.name} name={v.name} component={v.component} options={v.options} />)
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
export default RouterContainer
