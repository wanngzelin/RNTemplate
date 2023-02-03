// 缓存工具库
/**
 * 使用可以参照
 * https://react-native-async-storage.github.io/async-storage/docs/usage
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {

  //读取数据
  static async getItem(key: string) {
    try {
      return AsyncStorage.getItem(key)
    } catch (error) {
      console.log(error)
    }
  }

  //保存数据
  static async setItem(key: string, val: string) {
    return AsyncStorage.setItem(key, val)
  }

  //更新保存数据
  static async updateItem(key: string, val: string) {
    try {
      return AsyncStorage.mergeItem(key, val)
    } catch (error) {
      console.log(error)
    }
  }

  //清除指缓存
  static async clearItem(key: string) {
    return AsyncStorage.removeItem(key)
  }

  // 获取所有已存储的键
  static async getAllKeys() {
    return AsyncStorage.getAllKeys()
  }

  // 批量获取数据
  static async getMultiple(key: readonly string[]) {
    return AsyncStorage.multiGet(key)
  }

  // 批量设置数据
  static async multiSet(keyValuePairs: [string, string][]) {
    return AsyncStorage.multiSet(keyValuePairs)
  }

  // 批量更新数据
  static async updateMultiple(keyValuePairs: [string, string][]) {
    return AsyncStorage.multiMerge(keyValuePairs)
  }

  //批量移除
  static async multiClear(key: string[]) {
    return AsyncStorage.multiRemove(key)
  }

  // 清除所有缓存
  static async clearAll() {
    return AsyncStorage.clear()
  }

}

