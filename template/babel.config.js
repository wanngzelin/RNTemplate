module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "*": "./src",
          "@components": "./src/components",
          "@assets": "./src/assets",
          "@pages": "./src/pages",
          "@route": "./src/route",
          "@utils": "./src/utils",
          "@types": "./src/types",
          "@config": "./src/config",
          "@iconfont": "./src/iconfont"
        }
      }
    ]
  ],
  env:{
    production:{
      plugins:['transform-remove-console']
    }
  }
};
