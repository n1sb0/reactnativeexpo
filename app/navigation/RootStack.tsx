import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Details from "../screens/Details";

type RootStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
  Details: { id: number };
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
    <RootStack.Navigator
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
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
