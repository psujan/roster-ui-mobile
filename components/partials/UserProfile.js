import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";
import PressableIcon from "../PressableIcon";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import Modal from "react-native-modal";
import More2Line from "../../assets/images/more-2-line.png";
import Icon from "react-native-remix-icon";

const data = [
  { label: "My Profile", value: "Profile" },
  { label: "Availability", value: "Availability" },
  { label: "Logout", value: "Login" },
];

export default function UserProfile({ navigation }) {
  const [value, setValue] = useState(null);
  const [modal, setModal] = useState(false);
  const showModal = () => {
    console.log("showing");
    setModal(true);
  };
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileMain} onClick={() => showModal()}>
        <Pressable style={{ flexDirection: "row" }} onPress={showModal}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
            }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Alica</Text>
            <Text style={styles.profileRole}>Staff | Full time</Text>
          </View>
        </Pressable>
      </View>
      <Pressable onPress={() => showModal()}>
        <View>
          <Image source={More2Line} />
        </View>
      </Pressable>
      <Modal
        isVisible={modal}
        style={styles.modal}
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
        onBackdropPress={() => setModal(false)}
      >
        <View style={styles.modalWrap}>
          <View style={{ marginVertical: 10 }}>
            <Pressable
              onPress={() => navigation.navigate("Profile")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#f4f4f4" : "#fff",
                },
                {
                  flexDirection: "row",
                  padding: 10,
                  borderRadius: 6,
                },
              ]}
            >
              <Icon name="user-shared-line" size={22} color="#666"></Icon>
              <Text style={{ marginLeft: 6 }}>Profile</Text>
            </Pressable>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Pressable
              onPress={() => navigation.navigate("Login")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#f4f4f4" : "#fff",
                },
                {
                  flexDirection: "row",
                  padding: 10,
                  borderRadius: 6,
                },
              ]}
            >
              <Icon name="logout-box-line" size={22} color="#666"></Icon>
              <Text style={{ marginLeft: 6 }}>Logout</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  leftIcon: {
    borderWidth: 0,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  profileMain: {
    flexDirection: "row",
    gap: 6,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileRole: {
    fontSize: 14,
    color: "#666",
  },

  //for dropdown
  dropdown: {
    height: 24,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 200,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
    border: 0,
    elevation: 0,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdwonContainer: {
    backgroundColor: "white",
    padding: 16,
    borderWidth: 0,
    // width: 200,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
    borderRadius: 10,
  },
  modalWrap: {
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderColor: "transparent",
    borderWidth: 1,
    marginHorizontal: 4,
  },
});
