/**
 * 路由相关的类型声明文件
 */
import type {CompositeScreenProps, RouteProp} from '@react-navigation/native';
import type {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

//底部导航类型申明
export type BottomTabParamList = {
  Home: undefined;
  Mine: undefined;
};

// 全部导航生命
export type StackParamList = {
  BottomTab: undefined;
  Login: undefined;
};

// 导航组件类型声明 eg:@/config/routesConfig
export type RoutesConfig = {
  name: keyof StackParamList;
  component: React.ComponentType<any>;
  options?:
    | StackNavigationOptions
    | ((props: {
        route: RouteProp<StackParamList, keyof StackParamList>;
        navigation: StackNavigationProp<StackParamList>;
      }) => StackNavigationOptions);
};

// 堆栈导航组件参数类型泛型 eg:
/**
 * const Login:React.FC<StackScreenProps<'Login'>>=({navigation,route})=>{
 *   return(
 *   ......
 *   )
 * }
 */
export type AppScreenProps<T extends keyof StackParamList> = StackScreenProps<
  StackParamList,
  T
>;

// 底部嵌套路由导航类型声明 用做在bottom-tab页面中获取navigation，route等参数时等类型提示
export type BottomScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    AppScreenProps<keyof StackParamList>
  >;

// 为useNavigation hooks提供全局的参数提示
declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
