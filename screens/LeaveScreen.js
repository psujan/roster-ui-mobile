import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-remix-icon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PressableBack from "../components/PressableBack";
import UserProfile from "../components/partials/UserProfile";
import AppButton from "../components/buttons/AppButton";
import Modal from "react-native-modal";

export default function LeaveScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const leaves = [
    {
      date: "Oct 20 - Oct 29",
      type: "Annual Leave",
      duration: "9 days",
      isPaid: true,
    },
    {
      date: "Nov 1",
      type: "Compassionate Leave",
      duration: "1 day",
      isPaid: false,
    },
    {
      date: "Nov 27",
      type: "Sick Leave",
      duration: "1 day",
      isPaid: true,
    },
    {
      date: "Nov 29",
      type: "Sick Leave",
      duration: "1 day",
      isPaid: false,
    },
  ];

  const showLeaveModal = () => {
    setModalVisible(true);
    console.log("opening");
  };

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
          <Text style={styles.headerText}>Leave</Text>
          <Text></Text>
        </View>

        {/* Profile Section */}
        <UserProfile />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Workspace */}
          <View style={styles.appSection}>
            <View style={styles.appSectionHeader}>
              <Text style={styles.sectionTitle}>My Leave</Text>
              <Text style={styles.rosterDate}>2024</Text>
            </View>
            <Text style={{fontSize:12, color:'#666', marginBottom: 15}}>You have applied 4 leave request this year</Text>

            <FlatList
              scrollEnabled={false}
              data={leaves}
              numColumns={1}
              keyExtractor={(item) => item.date}
              renderItem={({ item }) => (
                <Pressable
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? "#DCF1F9" : "#f8f8f8",
                    },
                    styles.rosterWrap,
                  ]}
                  onPress={() => navigation.navigate("Roster-Detail")}
                >
                  <View style={styles.rosterCard}>
                    <View style={styles.rosterInfo}>
                      <Text style={styles.rosterDay}>{item.date}</Text>
                      <Text style={styles.rosterHr}>
                        {item.type} | {item.duration}
                      </Text>
                    </View>
                    <View>
                      <View style={item.isPaid ? styles.isPaid: styles.isUnpiad}></View>
                    </View>
                  </View>
                </Pressable>
              )}
            />
            <View style={{ marginTop: 10 }}>
              <AppButton onPress={showLeaveModal} title="Apply For Leave" />
            </View>
          </View>
        </ScrollView>
        <Modal isVisible={modalVisible}>
          <View style={styles.modalWrap}>
            <Text style={{ fontWeight: 500, fontSize: 15, marginBottom: 15 }}>
              Apply For A Leave
            </Text>
            <View>
              <View style={styles.inputWrap}>
                <Text style={styles.inputLabel}>Leave Type</Text>
                <TextInput style={styles.input} placeholder="Sick Leave" />
              </View>
              <View style={styles.inputWrapFlex}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.inputLabel}>From</Text>
                  <TextInput style={[styles.input]} placeholder="Jan 2 2024" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.inputLabel}>To</Text>
                  <TextInput style={[styles.input]} placeholder="Jan 3 2024" />
                </View>
              </View>
              <View style={styles.inputWrapFlex}>
                <View style={{ flex: 1 }}>
                  <Pressable
                    onPress={() => setModalVisible(false)}
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed ? "#f5f5f5" : "#f4f4f4",
                      },
                      styles.appButtonContainer,
                    ]}
                  >
                    <Text style={[styles.appButtonText, { color: "#000" }]}>
                      Cancel
                    </Text>
                  </Pressable>
                </View>
                <View style={{ flex: 1 }}>
                  <AppButton title={"Submit"} onPress={() => setModalVisible(false)}></AppButton>
                </View>
              </View>
            </View>
          </View>
        </Modal>
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
  rosterCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rosterDay: {
    fontSize: 14,
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
    // minWidth: "48%",
  },
  inputLabel: {
    fontSize: 12,
    marginBottom: 8,
  },
  inputWrap: {
    marginBottom: 10,
  },
  inputWrapFlex: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 15,
  },
  appButtonContainer: {
    color: "#fff",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 10,
    minWidth:'48%',
    textAlign:'center'
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "medium",
    alignSelf: "center",
    fontFamily: "Inter",
    //   textTransform: "uppercase"
  },
  isPaid:{
    width:8,
    height:8,
    backgroundColor:'#22789A',
    borderRadius:50
  },
  isUnpiad:{
    width:8,
    height:8,
    borderRadius: 50,
    backgroundColor:'red'
  }
});
