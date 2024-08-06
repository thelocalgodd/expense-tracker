import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <View style={styles.incomeExpenseContainer}>
      <View>
        <Text style={styles.text}>Income</Text>
        <Text style={styles.income}>GH¢{income}</Text>
      </View>
      <View>
        <Text style={styles.text}>Expense</Text>
        <Text style={styles.expense}>GH¢{expense}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  incomeExpenseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  income: {
    color: "#2ecc71",
    fontSize: 22,
  },
  expense: {
    color: "#c0392b",
    fontSize: 22,
  },
});
