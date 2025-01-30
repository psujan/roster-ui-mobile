import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-remix-icon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PressableBack from "../components/PressableBack";
import UserProfile from "../components/partials/UserProfile";

export default function RosterScreen({ navigation }) {
  const roster = [
    {
      id: 1,
      day: "Mon",
      time: "6am - 2pm",
      workplaceType: "Kitchen",
      hrs: 8,
    },
    {
      id: 2,
      day: "Tue",
      time: "9am - 5pm",
      workplaceType: "Office",
      hrs: 8,
    },
    {
      id: 3,
      day: "Wed",
      time: "10am - 6pm",
      workplaceType: "Warehouse",
      hrs: 8,
    },
    {
      id: 4,
      day: "Thu",
      time: "7am - 3pm",
      workplaceType: "Retail",
      hrs: 8,
    },
    {
      id: 5,
      day: "Fri",
      time: "12pm - 8pm",
      workplaceType: "Hospital",
      hrs: 8,
    },
    {
      id: 6,
      day: "Sat",
      time: "2pm - 10pm",
      workplaceType: "Hotel",
      hrs: 8,
    },
    {
      id: 7,
      day: "Sun",
      time: "2pm - 10pm",
      workplaceType: "Hotel",
      hrs: 8,
    },
  ];

  const highlights = [
    { id: "1", text: "3 Issues have been reported" },
    { id: "2", text: "You have been added to the event team" },
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
          <Text style={styles.headerText}>Roster</Text>
          <Text></Text>
        </View>

        {/* Profile Section */}
        <UserProfile navigation={navigation}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Workspace */}
          <View style={styles.appSection}>
            <View style={styles.appSectionHeader}>
              <Text style={styles.sectionTitle}>MyShift</Text>
              <Text style={styles.rosterDate}>01 Jan - 08 Jan</Text>
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
                  onPress={() => navigation.navigate("Roster-Detail")}
                >
                  <View style={styles.rosterCard}>
                    <View style={styles.rosterInfo}>
                      <Text style={styles.rosterDay}>{item.day}</Text>
                      <Text style={styles.rosterHr}>
                        {item.workplaceType} | {item.hrs} hrs
                      </Text>
                    </View>
                    <View>
                      <Icon name="arrow-right-line" size={18} color="#666" />
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
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
});
