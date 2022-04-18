import { StackNavigationOptions, StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';

//底部导航类型申明
export type BottomTabParamList = {
  Home: undefined;
  Mine: undefined;
}
//所有页面路由申明
export type RootStackParamList = {
  BottomTab: undefined;
}

//申明路由配置文件所需数据
export type RouteType = {
  name: keyof RootStackParamList,
  component: React.ComponentType<any>
  options?: StackNavigationOptions
}

//页面如需引用路由跳转以及获取路由参数时的类型申明
export interface NavigationProps {
  navigation: StackNavigationProp<RootStackParamList>
  route: RouteProp<RootStackParamList>
}