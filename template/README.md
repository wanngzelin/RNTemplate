## :space_invader: React Native Template TypeScript

English | [简体中文](./README_zh-CN.md)

## :arrow_forward: 用法
```sh
npx react-native init ProjectName --template tsrntemp
```

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| 0.72         | 1.2.\*   |
| 0.71         | 1.1.\*   |
| 0.67         | 1.0.\*   |

`The default of this project is TS building, integrated routing, caching, request tool and icon tool`

- 文件目录
 - src
  - src/assets`Static resource folder`
  - src/components`Public component folder`
  - src/config`Configuration folder`
  - src/iconfont`Icon font folder`
  - src/pages`All of the page folders`
  - src/route`Route the page folder`
  - src/types`Type statement folder`
  - src/utils`Tool Class Folders`

### react-navigation
- [Use reference](https://reactnavigation.org/docs/getting-started)

##### icont
- The configuration file for the icon is the iconfont.json file located in the root directory
- [Use reference](https://www.npmjs.com/package/react-native-iconfont-cli)


##### requset
- The request library used is `umi-reuest`
- [Use reference](https://www.npmjs.com/package/umi-request)

##### storage
- The cache library used is `react-native-mmkv` and is a library that returns data directly, unlike the promise that `async-storage` is returned
- [Use reference](https://github.com/mrousavy/react-native-mmkv/blob/master/README.md)


##### size-matters
- Size adaptation
- [Use reference](https://www.npmjs.com/package/react-native-size-matters)

