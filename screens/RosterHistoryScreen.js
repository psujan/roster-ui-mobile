import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  // TouchableOpacity,
  // FlatList,
  // Pressable,
  ScrollView,
  Pressable,
} from "react-native";
import Icon from "react-native-remix-icon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PressableBack from "../components/PressableBack";
import UserProfile from "../components/partials/UserProfile";
import AppButton from "../components/buttons/AppButton";
import Modal from "react-native-modal";
import { Dropdown } from "react-native-element-dropdown";

export default function RosterHistoryScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    { label: "Jan", value: "1" },
    { label: "Feb", value: "2" },
    { label: "Mar", value: "3" },
    { label: "Apr", value: "4" },
    { label: "May", value: "5" },
    { label: "Jun", value: "6" },
    { label: "Jul", value: "7" },
    { label: "Aug", value: "8" },
    { label: "Sep", value: "9" },
    { label: "Oct", value: "10" },
    { label: "Nov", value: "11" },
    { label: "Dec", value: "12" },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const rosterHistory = [
    {
      id: "R672",
      workplace: "Bar & Kitchen",
      date: "Dec 20",
      hrs: 8,
    },
    {
      id: "R673",
      workplace: "Office Cleaning",
      date: "Dec 21",
      hrs: 4,
    },
    {
      id: "R674",
      workplace: "Warehouse Cleaning",
      date: "Dec 22",
      hrs: 4,
    },
    {
      id: "R675",
      workplace: "Ashfield Med center",
      date: "Dec 23",
      hrs: 6,
    },
    {
      id: "R676",
      workplace: "Bar & Kitchen",
      date: "Dec 24",
      hrs: 6,
    },

    {
      id: "R679",
      workplace: "Level 2 / 4 Railway Pd",
      date: "Dec 26",
      hrs: 5.5,
    },
    {
      id: "R680",
      workplace: "Level 2 / 4 Railway Pd",
      date: "Dec 27",
      hrs: 5.5,
    },
    {
      id: "R6781",
      workplace: "Level 2 / 4 Railway Pd",
      date: "Dec 28",
      hrs: 5.5,
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
          <Text style={styles.headerText}>History</Text>
          <Text></Text>
        </View>

        {/* Profile Section */}
        <UserProfile navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Workspace */}
          <View style={styles.appSection}>
            <View style={[styles.appSectionHeader, { marginBottom: 5 }]}>
              <Text style={{ color: "#22789A", fontSize: 15, fontWeight: 500 }}>
                Today Work Hours
              </Text>
              <Text style={{ color: "#666", fontSize: 15, fontWeight: 500 }}>
                {" "}
                4hrs 27min
              </Text>
            </View>
          </View>
          <View style={styles.appSection}>
            <View style={styles.appSectionHeader}>
              <Text style={styles.sectionTitle}>My Shift History</Text>
              <View>
                <Pressable
                  onPress={() => setModalVisible(true)}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? "#f1f1f1" : "#f4f4f4",
                    },
                    {
                      padding: 6,
                      borderRadius: 6,
                    },
                  ]}
                >
                  <Text style={{ color: "#666" }}>Dec 1- Dec 31</Text>
                </Pressable>
              </View>
            </View>
            {rosterHistory.map((row) => (
              <View
                key={row.id}
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#666", fontSize: 13, marginRight: 6 }}>
                    {row.id}
                  </Text>
                  <Text style={{ color: "#000", fontSize: 13 }}>
                    {row.workplace}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#666", fontSize: 13, marginRight: 6 }}>
                    {row.date}
                  </Text>
                  <Text style={{ color: "#000", fontSize: 13 }}>
                    {row.hrs} hrs
                  </Text>
                </View>
              </View>
            ))}
            <View style={[styles.appSectionHeader, { marginBottom: 5 }]}>
              <Text style={{ color: "#22789A", fontSize: 15, fontWeight: 500 }}>
                Total Work Hours (Dec)
              </Text>
              <Text style={{ color: "#666", fontSize: 15, fontWeight: 500 }}>
                {" "}
                200hrs 45mins
              </Text>
            </View>
          </View>
          <Modal isVisible={modalVisible}>
            <View style={styles.modalWrap}>
              <Text style={{ fontWeight: 500, fontSize: 15, marginBottom: 15 }}>
                History Month
              </Text>
              <View>
                <View style={styles.inputWrap}>
                  <View>
                    <Dropdown
                      style={[
                        styles.dropdown,
                        isFocus && { borderColor: "blue" },
                      ]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={data}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder={!isFocus ? "Select month" : "..."}
                      searchPlaceholder="Search..."
                      value={value}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={(item) => {
                        setValue(item.value);
                        setIsFocus(false);
                      }}
                    />
                  </View>
                </View>
                <View style={styles.inputWrapFlex}>
                  <View style={{ flex: 1 }}>
                    <Pressable
                      onPress={() => {
                        setValue(null);
                        setModalVisible(false);
                      }}
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
                    <AppButton
                      title={"Apply"}
                      onPress={() => {
                        setModalVisible(false);
                      }}
                    ></AppButton>
                  </View>
                </View>
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
    marginVertical: 18,
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
  inputLabel: {
    fontSize: 12,
    marginBottom: 8,
  },
  inputWrap: {
    marginBottom: 20,
  },
  inputWrapFlex: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 15,
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
    minWidth: "48%",
    textAlign: "center",
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "medium",
    alignSelf: "center",
    fontFamily: "Inter",
    //   textTransform: "uppercase"
  },
  // for dropdown
  dropdown: {
    height: 44,
    backgroundColor: "#f8f8f8",
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
});
