import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { Button, Card } from "../components/ui";

/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets/{id}
 * API Example: https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

export default function ListScreen({ route, navigation }: any) {
  /* ToDo: Get the id param from the route */
  const [item, setItem] = useState<any>();
  const { id } = route.params;

  const getAsset = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.coincap.io/v2/assets/${id}`
      );
      console.log(data.data);
      setItem(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAsset();
  }, []);

  return (
    <View style={styles.container}>
      {item ? (
        <View style={styles.content}>
          <Card
            detail
            symbol={item.symbol}
            name={item.name}
            rank={item.rank}
            value={item.priceUsd}
            performance={item.changePercent24Hr}
            supply={item.supply}
            maxSupply={item.maxSupply}
            marketCap={item.marketCapUsd}
          />

          <Button title="My Wallet" onPress={() => navigation.navigate("Wallet")} />
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
