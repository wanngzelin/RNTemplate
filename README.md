#### 本模板使用TS
### 使用方法
```
npx react-native init ProjectName --template tsrntemp
```



- 文件目录
 - src
  - assets`静态资源文件夹`
  - components`公用组件文件夹`
  - config`配置文件夹`
  - iconfont`图标字体文件夹`
  - pages`所有页面文件夹`
  - route`路由页面文件夹`
  - types`类型申明文件夹`
  - utils`工具类文件夹`


##### 新增路由须配置两个地方
- types/routeTypes

```
//添加页面地址，以及页面所需的参数
export type RootStackParamList = {
  BottomTab: undefined;
}
```
- config/routeConfig.ts

```
import BottomTab from "route/BottomTab" //引入所需组件

const RouteArr: Array<RouteType> = [
  {
    name: 'BottomTab', //匹配第一步配置时的名称
    component: BottomTab,//引入的组件
    options: { headerShown: false }//页面所需的额外配置
  }
]
```

##### icont使用
- 根目录下有一个iconfont.json文件
- [具体使用参照](https://www.npmjs.com/package/react-native-iconfont-cli)


##### requset
- 使用的请求库为umi-reuest
- [具体使用参照](https://www.npmjs.com/package/umi-request)