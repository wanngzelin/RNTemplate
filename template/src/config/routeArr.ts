import React from 'react';
import {StackParamList} from 'types/RouteParamList';
import {RouteProp} from '@react-navigation/core/lib/typescript/src/types';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import BottomTab, {getCurentTabName} from 'route/BottomTab';

type RoutesConfig = {
  name: keyof StackParamList;
  component: React.ComponentType<any>;
  options?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<StackParamList, keyof StackParamList>;
        navigation: any;
      }) => NativeStackNavigationOptions);
};
const RouteArr: RoutesConfig[] = [
  {
    name: 'BottomTab',
    component: BottomTab,
    options: ({route}) => getCurentTabName(route),
  },
];

export default RouteArr;
