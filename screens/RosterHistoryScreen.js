import React from "react";
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

export default function RosterHistoryScreen({ navigation }) {
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
        <UserProfile navigation={navigation}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Workspace */}
          <View style={styles.appSection}>
            <View style={styles.appSectionHeader}>
              <Text style={styles.sectionTitle}>My Shift History</Text>
              {/* <Text>These are hidden by default</Text> */}
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
                  <Text style={{ color: "#666", fontSize: 13, marginRight:6 }}>{row.id}</Text>
                  <Text style={{ color: "#000", fontSize: 13 }}>{row.workplace}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#666", fontSize: 13, marginRight:6 }}>{row.date}</Text>
                  <Text style={{ color: "#000", fontSize: 13 }}>{row.hrs} hrs</Text>
                </View>
              </View>
            ))}
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
