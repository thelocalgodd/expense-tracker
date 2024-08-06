import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import { GlobalProvider } from "./src/context/GlobalState";

const Stack = createStackNavigator();

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Expense Tracker" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}
