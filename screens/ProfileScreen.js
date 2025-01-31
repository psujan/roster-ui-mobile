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

export default function ProfileScreen({ navigation }) {
  const generalDetails = [
    {
      name: "Name",
      value: "Alica Johnson",
    },
    {
      name: "Address",
      value: "3 cres st, Rockdale",
    },
    {
      name: "Phone",
      value: "0452 666 345",
    },
    {
      name: "Email",
      value: "alicajohn@gmail.com",
    },
    {
      name: "Joined Date",
      value: "11 Mar 2021",
    },
    {
      name: "Role",
      value: "Maintenance Associate",
    },
    {
      name: "Team",
      value: "ENVIRONMENT & ENG",
    },
  ];

  const bankingDetails = [
    {
      name: "Account Name",
      value: "Alica Johnson",
    },
    {
      name: "Account Number",
      value: "7******6",
      showValue: "72323556",
    },
    {
      name: "Bank Name",
      value: "******",
      showValue: "Suncorp",
    },
    {
      name: "Super Annuation",
      value: "*******",
      showValue: "13345345256",
    },
    {
      name: "TFN",
      value: "******",
      showValue: "149 340 345 304",
    },
  ];

  const documents = [
    {
      name: "Personal Identification",
      link: "",
    },
    {
      name: "Police Check",
      link: "",
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
          <Text style={styles.headerText}>My Profile</Text>
          <Text></Text>
        </View>

        {/* Profile Section */}
        <UserProfile navigation={navigation}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Workspace */}
          <View style={styles.appSection}>
            <View style={styles.appSectionHeader}>
              <Text style={styles.sectionTitle}>General Details</Text>
            </View>
            {generalDetails.map((row) => (
              <View
                key={row.name}
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#666", fontSize: 14 }}>{row.name}</Text>
                <Text style={{ color: "#000", fontSize: 14 }}>{row.value}</Text>
              </View>
            ))}
          </View>
          <View style={styles.appSection}>
            <View style={styles.appSectionHeader}>
              <Text style={styles.sectionTitle}>Banking Details</Text>
              {/* <Text>These are hidden by default</Text> */}
            </View>
            {bankingDetails.map((row) => (
              <View
                key={row.name}
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#666", fontSize: 14 }}>{row.name}</Text>
                <View>
                  <Text style={{ color: "#000", fontSize: 14 }}>
                    {row.value}
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.appSection}>
            <View style={styles.appSectionHeader}>
              <Text style={styles.sectionTitle}>Documents</Text>
              {/* <Text>These are hidden by default</Text> */}
            </View>
            {documents.map((row) => (
              <View
                key={row.name}
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#666", fontSize: 14 }}>{row.name}</Text>
                <View>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed ? "#" : "#f8f8f8",
                      },
                      {
                        padding: 4,
                        borderRadius:4
                      },
                    ]}
                  >
                    <Icon name={"arrow-down-line"} size={18} color="#22789A" />
                  </Pressable>
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
