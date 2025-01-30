import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-remix-icon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PressableBack from "../components/PressableBack";
import UserProfile from "../components/partials/UserProfile";
import Issue1 from "../assets/images/Issue1.png";
import Issue2 from "../assets/images/Issue2.png";

export default function RosterIssueScreen({ navigation }) {
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
          <Text style={styles.headerText}>Work Issues</Text>
          <Text></Text>
        </View>

        {/* Profile Section */}
        <UserProfile navigation={navigation}/>
        <ScrollView showsVerticalScrollIndicator={false}>
					<View><Text style={{fontSize:14, color:'#666'}}>2 work issues are reported</Text></View>
          {/* Workspace */}
          <View style={styles.appSection}>
            <View style={styles.issueInfo}>
              <Image
                resizeMode="cover"
                source={Issue1}
                style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
              />
              <View style={styles.issueDetails}>
                <Text style={styles.issueText}>
                  The door at the backdise was missed for painting
                </Text>
                <View style={styles.issueHighlight}>
                  <View style={{ flexDirection: "row" }}>
                    <Text>Roster Id: </Text>
                    <Text style={{ color: "#22789A" }}>#R673</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon name={"chat-1-line"} size={18} color={"#666"} />
                    <Text style={{ fontSize: 12 }}>4</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.issuePoint, styles.low]}></View>
                    <Text style={{ fontSize: 12 }}>Low</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.issueInfo}>
              <Image
                resizeMode="cover"
                source={Issue2}
                style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
              />
              <View style={styles.issueDetails}>
                <Text style={styles.issueText}>
                  The window and frame are not cleaned
                </Text>
                <View style={styles.issueHighlight}>
                  <View style={{ flexDirection: "row" }}>
                    <Text>Roster Id: </Text>
                    <Text style={{ color: "#22789A" }}>#R674</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon name={"chat-1-line"} size={18} color={"#666"} />
                    <Text style={{ fontSize: 12 }}>3</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.issuePoint, styles.critical]}></View>
                    <Text style={{ fontSize: 12 }}>High</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  issueInfo: {
    backgroundColor: "#F8F8F8",
    marginVertical: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  issueDetails: {
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  issueText: {
    color: "#000",
    fontSize: 13,
    marginBottom: 14,
  },
  issueHighlight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  issuePoint: {
    height: 8,
    width: 8,
    borderRadius: 30,
    marginRight: 4,
  },
  low: {
    backgroundColor: "#ccc",
  },
  medium: {
    backgroundColor: "#EE7738",
  },
  critical: {
    backgroundColor: "red",
  },
  dutyCard: {
    marginVertical: 10,
  },
  dutyImage: {
    resizeMode: "cover",
    marginVertical: 8,
    borderRadius: 4,
    flex: 1,
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
