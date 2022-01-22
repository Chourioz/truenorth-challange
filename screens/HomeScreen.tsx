import React, { useState, useContext, createContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Input } from "../components/ui";
import { UserContext } from "../providers/User.provider";

/* 
  Implement form using any user/pass combination 
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/

const newValues = {
  username: "",
  password: "",
};


export default function HomeScreen({ navigation }: any) {
  const { login } = useContext(UserContext);
  const [values, setValues] = useState(newValues);

  const handleSubmit = () => {
    if (values.username && values.password) {
      login(values.username);
      navigation.navigate("List");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Input
        value={values.username}
        onChangeText={(v) => setValues({ ...values, username: v })}
        placeholder="Enter your name"
      />
      <Input
        value={values.password}
        onChangeText={(v) => setValues({ ...values, password: v })}
        placeholder="Enter your passowrd"
        secureTextEntry
        returnKeyType="go"
      />
      <Button title="Sign In" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
