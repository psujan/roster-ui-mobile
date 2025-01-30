import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  ToastAndroid,
} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import Icon from "react-native-remix-icon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PressableBack from "../components/PressableBack";
import UserProfile from "../components/partials/UserProfile";
import AppButton from "../components/buttons/AppButton";
import Modal from "react-native-modal";
import { Dropdown } from "react-native-element-dropdown";

export default function LeaveScreen({ navigation }) {
  const showToast = () => {
    ToastAndroid.showWithGravity(
      "Leave request submitted",
      ToastAndroid.LONG,
      ToastAndroid.TOP
    );
  };
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
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

  const data = [
    { label: "Sick", value: "1" },
    { label: "Annual", value: "2" },
    { label: "Parental", value: "3" },
    { label: "Compassionate", value: "4" },
    { label: "Service", value: "5" },
    { label: "Unpaid", value: "6" },
    { label: "Other", value: "8" },
  ];

  const [date, setDate] = useState(dayjs());

  const [datePicker, setDatePicker] = useState(false);
  const [dateBtn, setDateBtn] = useState(true);

  const pickDate = () => {
    setDatePicker(true);
    setDateBtn(false);
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
        <UserProfile navigation={navigation}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Workspace */}
          <View style={styles.appSection}>
            <View style={styles.appSectionHeader}>
              <Text style={styles.sectionTitle}>My Leave</Text>
              <Text style={styles.rosterDate}>2024</Text>
            </View>
            <Text style={{ fontSize: 12, color: "#666", marginBottom: 15 }}>
              You have applied 4 leave request this year
            </Text>

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
                      <View
                        style={item.isPaid ? styles.isPaid : styles.isUnpiad}
                      ></View>
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
                    placeholder={!isFocus ? "Select item" : "..."}
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
              <View style={styles.inputWrap}>
                <View>
                  <Text style={styles.inputLabel}>Date</Text>
                  {dateBtn ? (
                    <Pressable
                      onPress={() => {
                        pickDate();
                      }}
                      style={({ pressed }) => [
                        {
                          backgroundColor: pressed ? "#f5f5f5" : "#f4f4f4",
                        },
                        styles.appButtonContainer,
                      ]}
                    >
                      <Text
                        style={[
                          styles.appButtonText,
                          { color: "#000", textAlign: "left" },
                        ]}
                      >
                        Pick A Date
                      </Text>
                    </Pressable>
                  ) : null}
                  {datePicker ? (
                    <View
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: 6,
                        padding: 4,
                        borderColor: "#f1f1f1",
                        borderWidth: 1,
                      }}
                    >
                      <DateTimePicker
                        mode="single"
                        minDate={Date()}
                        date={date}
                        onChange={(params) => setDate(params.date)}
                      />
                    </View>
                  ) : null}
                  {/* <DateTimePicker
                    mode="single"
                    date={date}
                    onChange={(params) => setDate(params.date)}
                  /> */}
                  {/* <TextInput style={[styles.input]} placeholder="Jan 2 2024" /> */}
                </View>
              </View>
              {/* <View style={styles.inputWrap}>
                <View>
                  <Text style={styles.inputLabel}>To</Text>
                  <TextInput style={[styles.input]} placeholder="Jan 3 2024" />
                </View>
              </View> */}
              <View style={styles.inputWrapFlex}>
                <View style={{ flex: 1 }}>
                  <Pressable
                    onPress={() => {
                      setValue(null);
                      setModalVisible(false);
                      setDatePicker(false);
                      setDateBtn(true);
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
                    title={"Submit"}
                    onPress={() => {
                      setModalVisible(false);
                      showToast();
                    }}
                  ></AppButton>
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
    height: 44,
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
    marginBottom: 20,
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
  isPaid: {
    width: 8,
    height: 8,
    backgroundColor: "#22789A",
    borderRadius: 50,
  },
  isUnpiad: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "red",
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
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
