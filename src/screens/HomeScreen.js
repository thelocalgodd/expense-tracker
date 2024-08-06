import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";
import { GlobalContext } from "../context/GlobalState";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("expense");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount:
        transactionType === "expense"
          ? -Math.abs(parseFloat(amount))
          : Math.abs(parseFloat(amount)),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
    setTransactionType("expense");
  };

  return (
    <View style={styles.container}>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <View>
        <Text style={styles.title}>Add New Transaction</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter text..."
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter amount..."
          keyboardType="numeric"
          value={amount}
          onChangeText={(amount) => setAmount(amount)}
        />
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              transactionType === "expense" &&
                styles.radioButtonSelectedExpense,
            ]}
            onPress={() => setTransactionType("expense")}
          >
            <Text style={styles.radioText}>Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.radioButton,
              transactionType === "income" && styles.radioButtonSelectedIncome,
            ]}
            onPress={() => setTransactionType("income")}
          >
            <Text style={styles.radioText}>Income</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={onSubmit}>
          <Text style={styles.addButtonText}>Add transaction</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  radioButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 6,
    flex: 1,
    marginRight: 5,
  },
  radioButtonSelectedExpense: {
    backgroundColor: "#e74c3c", // Red for expense
  },
  radioButtonSelectedIncome: {
    backgroundColor: "#2ecc71", // Green for income
  },
  radioText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#2ecc71",
    padding: 10,
    borderRadius: 6,
  },
  addButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
