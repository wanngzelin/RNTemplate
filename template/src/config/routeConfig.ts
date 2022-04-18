import { RouteType } from "types/routeTypes"
import BottomTab from "route/BottomTab"


const RouteArr: Array<RouteType> = [
  {
    name: 'BottomTab',
    component: BottomTab,
    options: { headerShown: false }
  }
]


export default RouteArr

