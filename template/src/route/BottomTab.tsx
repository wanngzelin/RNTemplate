import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList, StackParamList} from 'types/RouteParamList';
import Home from 'pages/Home';
import Mine from 'pages/Mine';
import IconFont from 'iconfont';
import color from 'config/color';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/core/lib/typescript/src/types';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function getCurentTabName(
  route: RouteProp<StackParamList>,
): NativeStackNavigationOptions {
  let routeName = getFocusedRouteNameFromRoute(route) ?? '首页';
  switch (routeName) {
    case 'Home':
      routeName = '首页';
      break;
    case 'Mine':
      routeName = '我的';
      break;
    default:
      routeName = '首页';
      break;
  }
  return {
    headerTitle: routeName,
  };
}

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.primary[400],
        headerShown: false,
      }}
      backBehavior={'none'}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconFont name="index" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Mine'}
        component={Mine}
        options={{
          tabBarIcon: ({color, size}) => (
            <IconFont name="mine" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
