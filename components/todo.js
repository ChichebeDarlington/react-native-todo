import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Todo({ item, handlePress }) {
  return (
    <TouchableOpacity>
      <View style={styles.text}>
        <Text style={styles.itemText}>{item.text}</Text>
        <MaterialIcons
          name="delete"
          size={18}
          color={"#333"}
          style={styles.icon}
          onPress={() => handlePress(item.key)}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
    padding: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemText: {
    marginLeft: 10,
  },
});
