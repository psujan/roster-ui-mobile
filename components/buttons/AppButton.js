import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";
import TextPara from "../text/TextPara";

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Login</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 1,
      backgroundColor: "#22789A",
      color:'#fff',
      borderRadius: 4,
      paddingVertical: 13,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize:16,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      fontFamily:'Inter'
    //   textTransform: "uppercase"
    }
  });
export default AppButton