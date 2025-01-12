import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-remix-icon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PressableBack from "../components/PressableBack";
import UserProfile from "../components/partials/UserProfile";
import duty1 from "../assets/images/w-1.png";
import duty2 from "../assets/images/w-2.png";


export default function RosterDetailScreen({ navigation }) {
  const roster = [
    {
      day: "Mon",
      time: "6am - 2pm",
      workplaceType: "Kitchen",
      hrs: 8,
    },
    {
      day: "Tue",
      time: "9am - 5pm",
      workplaceType: "Office",
      hrs: 8,
    },
    {
      day: "Wed",
      time: "10am - 6pm",
      workplaceType: "Warehouse",
      hrs: 8,
    },
    {
      day: "Thu",
      time: "7am - 3pm",
      workplaceType: "Retail",
      hrs: 8,
    },
    {
      day: "Fri",
      time: "12pm - 8pm",
      workplaceType: "Hospital",
      hrs: 8,
    },
    {
      day: "Sat",
      time: "2pm - 10pm",
      workplaceType: "Hotel",
      hrs: 8,
    },
    {
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
          <Text style={styles.headerText}>Roster Detail</Text>
          <Text></Text>
        </View>

        {/* Profile Section */}
        <UserProfile />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Workspace */}
          <View style={styles.appSection}>
            <View style={styles.appSectionHeader}>
              <Text style={styles.sectionTitle}>Roster Detail</Text>
              <Text style={styles.rosterId}>#636</Text>
            </View>
            <View style={styles.rosterInfo}>
              <View style={styles.rosterInfoSingle}>
                <Text style={styles.rosterInfoKey}>Start Time</Text>
                <Text style={styles.rosterInfoValue}>6:00 AM</Text>
              </View>
              <View style={styles.rosterInfoSingle}>
                <Text style={styles.rosterInfoKey}>Finish Time</Text>
                <Text style={styles.rosterInfoValue}>2:00 PM</Text>
              </View>
              <View style={styles.rosterInfoSingle}>
                <Text style={styles.rosterInfoKey}>Job Location</Text>
                <Text style={styles.rosterInfoValue}>3 Cres St, Rockdale</Text>
              </View>
            </View>
          </View>
          <View style={styles.appSection}>
            <Text style={styles.rosterId}>
              You will be assisted by building manager James (0452 415 666)
            </Text>
          </View>
          <View style={styles.appSection}>
            <Text style={styles.sectionTitle}>Duties</Text>
            <View style={styles.dutyCard}>
              <Text style={styles.dutyText}>
                1. Repair Light bulbs U52, U57 ,U89
              </Text>
              <Image source={duty1} style={styles.dutyImage}></Image>
            </View>
            <View style={styles.dutyCard}>
              <Text style={styles.dutyText}>
                2. Paint Gate Door and Pipe At Back Entrance 
              </Text>
              <Image source={duty2} style={styles.dutyImage}></Image>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  dutyText: {
    color: "#666",
    fontSize: 14,
  },
  dutyCard: {
    marginVertical: 10,
  },
  dutyImage:{
    resizeMode:'cover',
    marginVertical:8,
    borderRadius:4,
    flex:1
  },
  rosterInfo: {
    flexDirection: "column",
  },
  rosterInfoSingle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  rosterInfoKey: {
    fontSize: 13,
    color: "#666",
  },
  rosterInfoValue: {
    fontSize: 13,
  },
  appSectionHeader: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "baseline",
    marginVertical: 10,
  },
  rosterId: {
    color: "#22789A",
    fontSize: 14,
    marginLeft: 10,
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
    marginVertical: 10,
  },
});
