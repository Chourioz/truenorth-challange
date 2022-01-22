import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Linking,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useCallback, useContext } from "react";
import { UserContext } from "../providers/User.provider";

/**
 * ToDo: Create a Bottom Tab Navigation for: Account and Partners sections
 * ToDo: In the Account tab, print the name submited in the Sign-In form
 * ToDo: In the Partners tab, manually list some apps you create
 *
 * 💯 Published apps where you been involved is great plus
 */

const Tab = createBottomTabNavigator();

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: "#019FB5",
  inactiveTintColor: "#0A132C",
  labelStyle: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22.4,
  },
  tabStyle: {
    justifyContent: "center",
  },
  style: {
    borderTopColor: "transparent",
  },
};

export default function WalletScreen({ navigation }: any) {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Account" component={AccountSection} />
      <Tab.Screen name="Partners" component={PartnersSection} />
    </Tab.Navigator>
  );
}

const OpenURLButton = ({ url, children }: any) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ color: "#6B7280" }}>{url}</Text>
    </TouchableOpacity>
  );
};

function AccountSection() {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Image
        style={styles.illustration}
        source={require("../assets/finish-illustration.png")}
      />
      <Text style={styles.title}>Hello, {user.name}</Text>
      <Text>Glad you are here,</Text>
      <Text>hope to see you soon!</Text>
    </View>
  );
}

function PartnersSection() {
  const partnerList = [
    {
      name: "Sinof",
      url: "https://synout.app",
      comments:
        "This app allows to manage and create sign-offs for your patients all. I did create this PWA from both side back-end and front-end, the front-end is done using React js.",
    },
    {
      name: "Faciliscan",
      url: "https://www.faciliscan.com",
      comments:
        "Faciliscan is a mobile facility auditing application created to ease the facility cleaning and estimating process by simplifying quality assurance audits. I did the all mobile application using React Native, this application are available on Android and iOS.",
    },
  ];

  const ListItem = ({ item }: any) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription} >{item.comments}</Text>
        <View style={styles.itemURL}>
          <Text>URL: </Text>
          <OpenURLButton url={item.url} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partners</Text>
      <Text>Here are some apps I was involved in:</Text>
      {partnerList && partnerList.length > 0 ? (
        <ScrollView>
          {partnerList.map((item) => (
            <ListItem key={item.name} item={item} />
          ))}
        </ScrollView>
      ) : (
        <Text>No Apps 🙈</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },
  illustration: {
    width: 256,
    height: 160,
  },
  itemContainer: {
    width: 354,
    minHeight: 100,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    padding: 20,
    elevation: 1.5,
    marginHorizontal: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
    color: "#019FB5",
  },
  itemDescription: {
    fontSize: 16,
    lineHeight: 22,
    color: "#0A132C",
    marginVertical: 10
  },
  itemURL: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
