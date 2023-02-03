import React from "react"
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { StackParamList } from "./RouteParamList";

export type RouteConfig = {
  name: keyof StackParamList,
  component: React.ComponentType
  options?: NativeStackNavigationOptions
}