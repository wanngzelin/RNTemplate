import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '@/types';
import Home from '@/pages/Home';
import Mine from '@/pages/Mine';
import {color} from '@/config';
import IconFont from '@/iconfont';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.primary[400],
        headerTitleAlign:'center'
      }}
      backBehavior={'none'}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
          headerTitle: '首页',
          tabBarIcon: ({color, size}) => (
            <IconFont name="index" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          headerTitle: '我的',
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <IconFont name="mine" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
