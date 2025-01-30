import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
// import SelectDropdown from "react-native-select-dropdown";
// import Icon from "react-native-remix-icon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PressableBack from "../components/PressableBack";
import UserProfile from "../components/partials/UserProfile";
import AppButton from "../components/buttons/AppButton";
import { useState } from "react";

export default function AvailabilityScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const roster = [
    {
      id: 1,
      day: "Mon",
      time: ["6am - 2pm", "6pm-2pm"],
    },
    {
      id: 2,
      day: "Tue",
      time: ["6am - 2pm"],
    },
    {
      id: 3,
      day: "Tue",
      time: ["6am - 2pm", "3pm-6pm"],
    },
    {
      id: 4,
      day: "Sun",
      time: ["6am - 2pm", "8pm-12pm"],
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* <Icon name="arrow-left-line" /> */}
          <PressableBack
            icon="arrow-left-line"
            navigation={navigation}
          ></PressableBack>
          <Text style={styles.headerText}>My Availability</Text>
          <Text></Text>
        </View>

        {/* Profile Section */}
        <UserProfile navigation={navigation}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Workspace */}
          <View style={styles.appSection}>
            <View style={styles.appSectionHeader}>
              <View>
                <Text style={styles.sectionTitle}>My Availability</Text>
              </View>
              <Text style={styles.rosterDate}>4 days a week</Text>
            </View>
            <FlatList
              scrollEnabled={false}
              data={roster}
              numColumns={1}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? "#DCF1F9" : "#f8f8f8",
                    },
                    styles.rosterWrap,
                  ]}
                  //   onPress={() => navigation.navigate("Roster-Detail")}
                >
                  <View style={styles.availabilityCard}>
                    <View style={styles.rosterInfo}>
                      <Text style={styles.rosterDay}>{item.day}</Text>
                    </View>
                    <View>
                      {item.time.map((d) => (
                        <Text key={d}>{d}</Text>
                      ))}
                    </View>
                  </View>
                </Pressable>
              )}
            />
            <View style={{ marginVertical: 10 }}>
              <AppButton
                title="Update My Timing"
                onPress={() => setModalVisible(true)}
              />
            </View>
          </View>
          <Modal isVisible={modalVisible}>
            <View style={styles.modalWrap}>
            <View
                style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}
              >
                <Text style={{minWidth:'48%'}}>Day</Text>
                <Text>Time</Text>
              </View>
              <View
                style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}
              >
                <TextInput placeholder="Sun" style={styles.input} />
                <TextInput placeholder="6am- 2pm" style={styles.input} />
              </View>
              <View
                style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}
              >
                <TextInput placeholder="Mon" style={styles.input} />
                <TextInput placeholder="6am- 2pm" style={styles.input} />
              </View>
              <View
                style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}
              >
                <TextInput placeholder="Tue" style={styles.input} />
                <TextInput placeholder="6am- 2pm" style={styles.input} />
              </View>
              <View
                style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}
              >
                <TextInput placeholder="Sat" style={styles.input} />
                <TextInput placeholder="6am- 2pm" style={styles.input} />
              </View>
              <View
                style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}
              >
                <Pressable
                  onPress={()=>setModalVisible(false)}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? "#f5f5f5" : "#f4f4f4",
                    },
                    styles.appButtonContainer,
                  ]}
                >
                  <Text style={[styles.appButtonText , {color:'#000'}]}>Cancel</Text>
                </Pressable>
                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? "#005678" : "#22789A",
                    },
                    styles.appButtonContainer,
                  ]}
                >
                  <Text style={styles.appButtonText}>Update</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appSectionHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  rosterDate: {
    color: "#666",
    fontSize: 13,
  },
  rosterWrap: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 4,
    //backgroundColor: "#f8f8f8",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  availabilityCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 4,
  },
  rosterDay: {
    fontSize: 14,
    color: "#666",
    fontWeight: 500,
  },
  rosterHr: {
    color: "#666",
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
  },

  hoursContainer: {
    backgroundColor: "#DCF1F9",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  hoursText: {
    fontSize: 12,
  },
  todayText: {
    fontSize: 12,
    color: "#22789A",
    fontWeight: 500,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  appSection: {
    marginTop: 10,
    marginBottom: 10,
  },
  modalWrap: {
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  input: {
    fontSize: 13,
    display: "flex",
    justifyContent: "center",
    borderColor: "#f1f1f1",
    paddingVertical: 10,
    color: "#666",
    height: 38,
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 4,
    backgroundColor: "#F1F1F1",
    minWidth: "48%",
  },
  cancelBtn:{
    color:'#000'
  },
  appButtonContainer: {
    //elevation: 1,
    //backgroundColor: "#22789A",
    color: "#fff",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 10,
    minWidth:'48%'
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "medium",
    alignSelf: "center",
    fontFamily: "Inter",
    //   textTransform: "uppercase"
  },
});
