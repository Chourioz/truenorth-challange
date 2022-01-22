import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ToDoScreen from "./screens/ToDoScreen";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";
import WalletScreen from "./screens/WalletScreen";
import { Logo } from "./components/ui";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserProvider } from "./providers/User.provider";

/**
 * Use `HomeScreen` as the initial route
 * Replace the screen title with the `Logo` component
 *
 * 💯  Usage of TypeScript is a plus
 */

// import Logo from './components/ui/Logo';

const Stack = createStackNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: "center",
            headerLeft: (props) =>
              props.canGoBack && (
                <TouchableOpacity onPress={props.onPress}>
                  <View style={styles.leftContainer}>
                    <Image source={require("./assets/arrow-left.png")} />
                    <Text style={styles.leftLabel}>{props.label}</Text>
                  </View>
                </TouchableOpacity>
              ),
          }}
        >
          <Stack.Screen
            name="ToDo"
            component={ToDoScreen}
            options={{ title: "To Do" }}
          />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Wallet" component={WalletScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: () => <Logo />,
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  leftContainer: {
    padding: 10,
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftLabel: {
    fontSize: 14,
    lineHeight: 140,
    color: "#019FB5",
    marginLeft: 10,
  },
});

export default App;
