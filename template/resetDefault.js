import { Text, TextInput, TouchableOpacity, Image } from "react-native";
/**
 * 说明:此文件为修改React-native的原生组件的一些默认属性配置
 * 1.修改Text和TextInput的属性,字体大小不跟随系统设置
 * 2.修改TouchableOpacity的默认属性0.2 => 1(即去除该组件默认的按下去的阴影效果 => 点击的时候按下去没有阴影效果)
 */
TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, {
  allowFontScaling: false,
});
Text.defaultProps = Object.assign({}, Text.defaultProps, {
  allowFontScaling: false,
});
TouchableOpacity.defaultProps = Object.assign(
  {},
  TouchableOpacity.defaultProps,
  { activeOpacity: 0.8 }
);
Image.defaultProps = Object.assign(
  {},
  Image.defaultProps,
  { fadeDuration: 0 }
)
