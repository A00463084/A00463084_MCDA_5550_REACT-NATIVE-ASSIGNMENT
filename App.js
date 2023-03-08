import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import FeedbackScreen from "./screens/FeedbackScreen";
import CategoriesScreen1 from "./screens/CategoriesScreen1";
import WeatherScreen from "./screens/WeatherScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "#282120",
            headerStyle: {
              backgroundColor: "#FAD02C",
            },
            headerTitleStyle: {
              color: "#282120",
            },
          }}
        >
          <Stack.Screen
            name="A00463084-Francis Alex: Assignment 2: Welcome to my React Native app!"
            options={{ title: "A00463084_Assignment2_Home" }}
            component={CategoriesScreen1}
          />

          <Stack.Screen
            name="FeedbackPg"
            options={{ title: "FeedBack" }}
            component={FeedbackScreen}
          />

          <Stack.Screen
            name="WeatherPg"
            options={{ title: "Weather" }}
            component={WeatherScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
