import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function AddTodo({ handleSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add todo"
        onChangeText={handleChange}
      />
      <Button
        title="Add todo"
        onPress={() => handleSubmit(text)}
        color={"coral"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
