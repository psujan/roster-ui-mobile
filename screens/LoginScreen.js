import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import LoginImageBg from "../assets/images/LoginScreenBackground.png";
import TextHeading from "../components/text/TextHeading";
import AppButton from "../components/buttons/AppButton";

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        {/* <View style={styles.container}> */}
        <ImageBackground
          source={LoginImageBg}
          resizeMode="cover"
          style={styles.image}
        >
          <View
            style={{
              position: "absolute",
              top: 200,
              left: 20,
              right: 0,
              bottom: 0,
            }}
          >
            <TextHeading text="Welcome" isWhite={true} />
          </View>
        </ImageBackground>
        <View style={styles.viewcontainer}>
          {/* <Text style={styles.title}>Login</Text> */}
          <TextInput placeholder="john@gmail.com" style={styles.input} />
          <TextInput
            placeholder="******"
            style={styles.input}
            secureTextEntry
          />
          <AppButton onPress={handleLogin} title="Login" />
          {/* <Button title="Login" color="#22789A" height="48" padding="12" onPress={handleLogin} style={styles.appBtn}/> */}
        </View>
        {/* </View> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appBtn: {
    color: "#fff",
    backgroundColor: "#22789A",
    height: 48,
    borderRadius: 4,
    border: 0,
    textTransform: "capitalize",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //justifyContent: "center",
    // padding: 20,
  },
  image: {
    flex: 1,
    // height:62%,
  },
  viewcontainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f1f1f1",
    padding: 10,
    height: 40,
    marginBottom: 15,
    borderRadius: 4,
    backgroundColor: "#F1F1F1",
  },
});
