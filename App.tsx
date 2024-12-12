import { NavigationContainer } from "@react-navigation/native";
import Home from "./app/screens/Home";
import RootStackNavigation from "./app/navigation/RootStack";

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigation />  
    </NavigationContainer>
  );
}
