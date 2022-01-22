import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

export const CardItem = ({
  symbol,
  name,
  value,
  rank,
  performance,
  onPress,
  detail,
  supply,
  maxSupply,
  marketCap,
}: any) => {
  const treatNumber = (number: string) =>
    Math.abs(parseFloat(number)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.symbol}>{`${symbol} - `}</Text>
              <Text style={styles.name}>{name}</Text>
            </View>
            <View>
              <Text>{`# ${rank}`}</Text>
            </View>
          </View>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.value}>{`$ ${treatNumber(value)} `}</Text>
              <Text style={styles.currency}>USD</Text>
            </View>
            <View
              style={[
                performance > 0 ? styles.positive : styles.negative,
                styles.performanceLayout,
              ]}
            >
              <Image
                source={
                  performance > 0
                    ? require("../../assets/arrow-up.png")
                    : require("../../assets/arrow-down.png")
                }
              />
              <Text
                style={
                  performance > 0
                    ? styles.performancePositive
                    : styles.performanceNegative
                }
              >
                {`${treatNumber(performance)}%`}
              </Text>
            </View>
          </View>
          {detail && (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                padding: 5,
              }}
            >
              <View style={styles.row}>
                <Text>Supply</Text>
                <Text>{` ${treatNumber(supply)}`}</Text>
              </View>
              <View style={styles.row}>
                <Text>Max Supply</Text>
                <Text>
                  {maxSupply && ` ${treatNumber(maxSupply)}`}
                </Text>
              </View>
              <View style={styles.row}>
                <Text>Market Cap</Text>
                <Text>{` $ ${treatNumber(marketCap)} USD`}</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 354,
    minHeight: 100,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    padding: 20,
    elevation: 1.5,
    marginHorizontal: 10,
  },
  symbol: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
    color: "#0A132C",
  },
  name: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 24,
    color: "#0A132C",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  value: {
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    color: "#019FB5",
  },
  currency: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#6B7280",
  },
  performanceLayout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  positive: {
    width: 67,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#D1FAE5",
  },
  negative: {
    width: 71,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FDDCDC",
  },
  performancePositive: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "right",
    color: "#065F46",
  },
  performanceNegative: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "right",
    color: "#A50606",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
