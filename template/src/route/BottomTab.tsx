import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from 'types/RouteParamList';
import Home from 'pages/Home';
import Mine from 'pages/Mine';
import IconFont from 'iconfont';
import color from 'config/color';


const Tab = createBottomTabNavigator<BottomTabParamList>();


const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: color.primary[400], headerShown: false }}
    >
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <IconFont name='index' size={size} color={color} />,
          headerTitle: '首页'
        }}
      />
      <Tab.Screen
        name={'Mine'}
        component={Mine}
        options={{
          tabBarIcon: ({ color, size }) => <IconFont name='mine' size={size} color={color} />,
          headerTitle: '我的'
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab