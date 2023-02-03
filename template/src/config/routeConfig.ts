import { RouteConfig } from "types/RoteConfig"
import BottomTab from "route/BottomTab"

const RouteArr: Array<RouteConfig> = [
  {
    name: 'BottomTab',
    component: BottomTab,
    options: { headerShown: false }
  }
]
export default RouteArr