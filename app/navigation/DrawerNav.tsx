import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Details from "../screens/Details";
import Feed from "../screens/Feed";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { useNavigation } from "@react-navigation/native";

type DrawerStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
  Details: { id: number };
};

const Drawer = createDrawerNavigator<DrawerStackParamList>();

function CustomDrawerContent(props: any) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Reset Navigation"
        onPress={() => navigation.goBack()}
      />
    </DrawerContentScrollView>
  );
}
const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Details" component={Details} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
