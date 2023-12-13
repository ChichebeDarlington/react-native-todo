import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Header from "./components/header";
import Todo from "./components/todo";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Yes! I am a native developer", key: "1" },
    { text: "Yes! I am a native developer", key: "2" },
    { text: "Yes! I am a native developer", key: "3" },
  ]);

  const handlePress = (key) => {
    setTodos((prev) => {
      return prev.filter((item) => item.key != key);
    });
  };

  const handleSubmit = (text) => {
    if (!text) {
      return Alert.alert("CHAI!", "Todo can not be empty", [
        { text: "Hope you get?", onPress: () => console.log("Yupp!") },
      ]);
    }
    setTodos((prev) => {
      return [{ text, key: Math.random().toString() }, ...prev];
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleSubmit={handleSubmit} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todo item={item} handlePress={handlePress} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
