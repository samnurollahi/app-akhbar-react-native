import { Image, StyleSheet, Text, View } from "react-native";

export default function Disconnect() {
  return (
    <View style={styles.container}>
        <Image source={require("../assets/disconnect.png")} width="300" height="200" resizeMode="contain" />
      <Text>disconnect</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
