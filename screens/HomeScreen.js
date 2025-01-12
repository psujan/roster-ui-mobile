import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-remix-icon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PressableBack from "../components/PressableBack";
import UserProfile from "../components/partials/UserProfile";

export default function HomeScreen({ navigation }) {
  const workspaceItems = [
    { id: "1", name: "Profile", icon: "user-shared-line", route: "Profile" },
    { id: "2", name: "Roster", icon: "time-line", route: "Roster" },
    {
      id: "3",
      name: "Availability",
      icon: "calendar-line",
      route: "Availability",
    },
    { id: "4", name: "History", icon: "history-line", route: "History" },
    { id: "5", name: "Issues", icon: "ticket-line", route: "Issues" },
    { id: "6", name: "Leave", icon: "leaf-line", route: "Roster Detail" },
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
          <Text style={styles.headerText}>Dashboard</Text>
          <Text></Text>
        </View>

        {/* Profile Section */}
        <UserProfile />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#fff" }}
        >
          {/* Work Hours */}
          <View style={styles.hoursContainer}>
            <Text style={styles.hoursText}>
              You have worked 15 hrs this week
            </Text>
            <Text style={styles.todayText}>Today: 4hr:27min</Text>
          </View>

          {/* Disturbance Message */}
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#DCF1F9" : "f8f8f8",
              },
              {
                backgroundColor: "#f8f8f8",
                marginTop: 20,
                marginBottom: 20,
                padding: 10,
              },
            ]}
          >
            <Text style={styles.disturbanceMessage}>
              Feeling Disturbed? Access Fair work
            </Text>
          </Pressable>

          {/* Workspace */}
          <View style={styles.appSection}>
            <Text style={styles.sectionTitle}>Workspace</Text>
            <FlatList
              data={workspaceItems}
              numColumns={3}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => navigation.navigate(item.route)}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? "#DCF1F9" : "#f6f6f6",
                    },
                    styles.workspaceItem,
                  ]}
                >
                  <Icon name={item.icon} size={32} color="black" />
                  <Text style={styles.workspaceItemText}>{item.name}</Text>
                </Pressable>
              )}
            />
          </View>

          {/* Highlights */}
          <View style={styles.appSection}>
            <Text style={styles.sectionTitle}>Highlights</Text>
            {highlights.map((highlight) => (
              <TouchableOpacity key={highlight.id} style={styles.highlightItem}>
                <Text style={styles.highlightText}># {highlight.text}</Text>
                <Icon name="external-link-line" size={20} color="#666" />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
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
  fairWorkLink: {
    marginTop: 20,
    marginBottom: 20,
  },
  disturbanceMessage: {
    color: "#007BFF",
    textAlign: "center",
    // marginBottom: 20,
    // marginTop: 20,
    // backgroundColor: "#F8F8F8",
    // padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  workspaceItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 15,
    //backgroundColor: "#F6F6F6",
    borderRadius: 10,
  },
  workspaceItemText: {
    marginTop: 10,
    fontSize: 14,
  },
  highlightItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 0,
    backgroundColor: "#f8f8f8",
    borderRadius: 4,
    marginVertical: 5,
  },
  highlightText: {
    fontSize: 14,
  },
  appSection: {
    marginTop: 10,
    marginBottom: 10,
  },
});