import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";

const LetsStart = ({ navigation }) => {
  const handleStartAITest = () => {
    const url = 'https://79ebe154e22e8fd98f.gradio.live/'; // Replace with your actual URL
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profileIcon}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={require("../../assets/Profile.png")}
            style={{ width: 30, height: 30, tintColor: "black" }}
          />
        </TouchableOpacity>
        <Text style={styles.centerText}>
          Hi, Please select one option below
        </Text>
        <Text style={styles.mainText}>Let's Start</Text>
        <TouchableOpacity
          style={[styles.rectangle1, { backgroundColor: "#B218FB" }]}
          onPress={handleStartAITest}
        >
          {/* Purplish color */}
          <Image
            source={require("../../assets/testicon.png")}
            style={[styles.image, styles.border]}
          />
          <Text style={styles.text}>Start AI Test</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.rectangle2, { backgroundColor: "#00D015" }]}
          onPress={() => navigation.navigate("SelfLearning")}
        >
          {/* Parrot color */}
          <Image
            source={require("../../assets/selficon.png")}
            style={[styles.image, styles.border]}
          />
          <Text style={styles.text}>Self Learning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.rectangle3, { backgroundColor: "#FBB718" }]}
          onPress={() => navigation.navigate("HomeSide")}
        >
          {/* Dark Yellow color */}
          <Image
            source={require("../../assets/home.png")}
            style={[styles.image, styles.border]}
          />
          <Text style={styles.text}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LetsStart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#FFFBEF",
  },
  centerText: {
    marginTop:80,
    textAlign: "center",
    fontSize: 17,
  },
  mainText: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 30,
    fontWeight: "bold",
    marginBottom: 50,
  },
  rectangle1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 20,
    elevation: 3,
    width: 300,
  },
  rectangle2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 20,
    elevation: 3,
    width: 300,
  },
  rectangle3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 20,
    elevation: 3,
    width: 300,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    margin: 10,
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  profileIcon: {
    marginTop: 60,
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 15,
  },
});
