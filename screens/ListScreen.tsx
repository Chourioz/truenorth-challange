import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import axios from "axios";
import { Card } from "../components/ui";

/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets
 * API Example: https://docs.coincap.io/#89deffa0-ab03-4e0a-8d92-637a857d2c91
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

export default function ListScreen({ navigation }: any) {
  const [list, setList] = useState<any[]>([]);
  const data = mockData.data;

  const getAssets = useCallback(async () => {
    try {
      const { data } = await axios.get("https://api.coincap.io/v2/assets");
      console.log(data.data);
      setList(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAssets();
  }, []);

  const ListItem = ({ item }: any) => {
    return (
      <Card
        symbol={item.symbol}
        name={item.name}
        value={item.priceUsd}
        rank={item.rank}
        performance={item.changePercent24Hr}
        onPress={() => navigation.navigate("Detail", { id: item.id })}
      />
    );
  };

  return (
    <View style={styles.container}>
      {list && list.length > 0 ? (
        <ScrollView>
          {list.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ScrollView>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  illustration: {
    width: 50,
    height: 50,
  },
  itemContainer: {
    display: "flex",
    backgroundColor: "#fff",
    marginVertical: 6,
    padding: 8,
  },
});

const mockData = {
  data: [
    {
      id: "bitcoin",
      rank: "1",
      symbol: "BTC",
      name: "Bitcoin",
      supply: "18699443.0000000000000000",
      maxSupply: "21000000.0000000000000000",
      marketCapUsd: "1015247880827.1353075029297279",
      volumeUsd24Hr: "29060906818.4485396840769794",
      priceUsd: "54292.9477004815227653",
      changePercent24Hr: "-6.5116870123483020",
      vwap24Hr: "55997.2133851391811930",
      explorer: "https://blockchain.info/",
    },
    {
      id: "ethereum",
      rank: "2",
      symbol: "ETH",
      name: "Ethereum",
      supply: "115737290.0615000000000000",
      maxSupply: null,
      marketCapUsd: "386628811693.0624014790470075",
      volumeUsd24Hr: "31432181076.4195139481844396",
      priceUsd: "3340.5725284186038137",
      changePercent24Hr: "1.1359859562693353",
      vwap24Hr: "3352.4239757346908390",
      explorer: "https://etherscan.io/",
    },
    {
      id: "binance-coin",
      rank: "3",
      symbol: "BNB",
      name: "Binance Coin",
      supply: "153432897.0000000000000000",
      maxSupply: "170532785.0000000000000000",
      marketCapUsd: "96293024995.0299971487645969",
      volumeUsd24Hr: "3662164344.1704711620723615",
      priceUsd: "627.5904768651405777",
      changePercent24Hr: "-7.3482646947958675",
      vwap24Hr: "650.8946548822847374",
      explorer:
        "https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    },
  ],
};
