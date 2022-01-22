import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "../components/ui";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.illustration}
        source={require("../assets/home-illustration.png")}
      />
      <Text style={styles.title}>Howdy partner!</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText} >This is your assignment.</Text>
        <Text style={styles.descriptionText} >Follow the instructions on the Readme file.</Text>
        <Text style={styles.descriptionText} >
          Don’t worry, it’s easy! You should have the app looking smooth in no
          time.
        </Text>
      </View>
      <Button title="Get Started" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },
  illustration: {
    width: 256,
    height: 256,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },
  descriptionContainer: {
    marginTop: 24,
    marginBottom: 44
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19.6,
    textAlign: "center"
  },
});
