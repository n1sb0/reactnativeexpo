import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Details from "../screens/Details";
import DrawerNav from "./DrawerNav";
import Modal from "../screens/Modal";

type RootStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
  Details: { id: number };
  Drawer: undefined;
  Modal: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type HomePageProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type ProfilePageProps = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;
export type DetailsPageProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Page :)" }}
        />
        <RootStack.Screen name="Feed" component={Feed} />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen name="Details" component={Details} />
        <RootStack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{ headerShown: false }}
        />
      </RootStack.Group>

      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name="Modal"
          component={Modal}
          options={{ presentation: "modal" }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
