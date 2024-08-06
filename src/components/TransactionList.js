import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <View>
      <Text style={styles.title}>
        History{" "}
        <Text
          style={{
            fontSize: 10,
            fontWeight: 400,
            alignSelf: "center",
            color: "grey",
          }}
        >
          press and hold a transaction to delete
        </Text>
      </Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <TouchableOpacity
            onLongPress={() => {
              Alert.alert(
                "Confirm Delete",
                "Are you sure you want to delete this transaction?",
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => deleteTransaction(item.id),
                  },
                ]
              );
            }}
          >
            <View
              style={[
                styles.listItem,
                { borderRightColor: item.amount < 0 ? "#c0392b" : "#2ecc71" },
              ]}
            >
              <Text>{item.text}</Text>
              <Text>
                {item.amount < 0 ? "-" : "+"}GH¢{Math.abs(item.amount)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRightWidth: 5,
  },
});
