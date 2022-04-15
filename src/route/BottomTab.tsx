import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from 'types/routeTypes';
import Home from 'pages/Home/Container';
import Mine from 'pages/Mine/Container';
import { IconIndex, IconMine } from 'iconfont';
import color from 'config/color';

const Tab = createBottomTabNavigator<BottomTabParamList>();


const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: color.pink[900], headerShown: false }}
    >
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{ tabBarIcon: ({ focused, color, size }) => <IconIndex size={size} color={color} /> }}
      />
      <Tab.Screen
        name={'Mine'}
        component={Mine}
        options={{ tabBarIcon: ({ focused, color, size }) => <IconMine size={size} color={color} /> }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab