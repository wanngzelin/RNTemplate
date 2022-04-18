import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { RootStackParamList } from 'types/routeTypes';
import RouteArr from 'config/routeConfig';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator<RootStackParamList>();

const RouteContainer: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerTitleAlign: 'center',
            headerMode: 'screen',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          }}
        >
          {
            RouteArr.map(item => <Stack.Screen key={item.name} name={item.name} component={item.component} options={item.options} />)
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  )
}

export default RouteContainer


