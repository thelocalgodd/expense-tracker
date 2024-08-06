import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <View>
      <Text style={styles.text}>Your Balance</Text>
      <Text style={styles.balance}>GH¢{total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  balance: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
