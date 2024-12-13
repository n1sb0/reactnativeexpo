import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import RootStackNavigation from "./RootStack";
import { Ionicons } from "@expo/vector-icons";

type TabsParamList = {
  HomeTab: undefined;
  FeedTab: undefined;
  ProfileTab: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

const TabsNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={RootStackNavigation}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FeedTab"
        component={Feed}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNav;
