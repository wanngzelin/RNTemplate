import {RoutesConfig} from '@/types';
import BottomTab from '@/route/BottomTab';

export const routesConfig: RoutesConfig[] = [
  {
    name: 'BottomTab',
    component: BottomTab,
    options: {headerShown: false},
  },
];
