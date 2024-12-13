import { NavigationContainer } from "@react-navigation/native";
import Home from "./app/screens/Home";
import RootStackNavigation from "./app/navigation/RootStack";
import TabsNav from "./app/navigation/TabNav";

export default function App() {
  return (
    <NavigationContainer>
      <TabsNav /> 
      {/* <RootStackNavigation />   */}
    </NavigationContainer>
  );
}
