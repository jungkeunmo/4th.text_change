import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const App = () => {
  const [text, setText] = useState("");

  const pageHandlerT1 = () => {
    this.text = "t1 입니다.";
    console.log(this.text);
    setText("T1입니다.");
  };

  const pageHandlerT2 = () => {
    this.text = "t2 입니다.";
    console.log(this.text);
    setText("T2입니다.");
  };

  const pageHandlerT3 = () => {
    this.text = "t3 입니다.";
    console.log(this.text);
    setText("T3입니다.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerH}>
        <Button title="T1" onPress={() => pageHandlerT1()}></Button>
        <Button title="T2" onPress={() => pageHandlerT2()}></Button>
        <Button title="T3" onPress={() => pageHandlerT3()}></Button>
      </View>
      <View style={styles.containerF}>
        <Text style={styles.fTextfont}>{text}</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  containerH: {
    padding: 50,
    height: 150,
    flexDirection: "row",
    backgroundColor: "#777",
  },

  containerF: {
    paddingLeft: 60,
    height: 700,
    backgroundColor: "#888",
  },

  fTextfont: {
    fontSize: 18,
  },
});
