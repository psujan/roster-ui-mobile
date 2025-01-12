import { View, Text, Image, StyleSheet } from "react-native";
import PressableIcon from "../PressableIcon";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import More2Line from "../../assets/images/more-2-line.png";

const data = [
  { label: "My Profile", value: "1" },
  { label: "Availability", value: "2" },
  { label: "Logout", value: "3" },
];

export default function UserProfile() {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <View>
          <PressableIcon icon="more-2-line" />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileMain}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>Alica</Text>
          <Text style={styles.profileRole}>Staff</Text>
        </View>
      </View>
      {/* <View>
        <PressableIcon icon="more-2-line" />
      </View> */}
      <View style={styles.dropdwonContainer}>
        {/* {renderLabel()} */}
        <Dropdown
          dropdownPosition="bottom"
          containerStyle={{
            borderRadius: 8,
          }}
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          //placeholderStyle={styles.placeholderStyle}
          //selectedTextStyle={styles.selectedTextStyle}
          //inputSearchStyle={styles.inputSearchStyle}
          //iconStyle={styles.iconStyle}
          data={data}
          iconStyle={{
            resizeMode: "cover",
          }}
          // search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder=""
          searchPlaceholder=""
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          //   renderLeftIcon={() => (
          //     <View style={styles.leftIcon}>
          //       <PressableIcon icon="more-2-line" />
          //     </View>
          //   )}
          // renderRightIcon={()=>{
          //   <View>
          //     <PressableIcon icon="more-2-line" />
          //   </View>
          // }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  leftIcon: {
    borderWidth: 0,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  profileMain: {
    flexDirection: "row",
    gap: 6,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileRole: {
    fontSize: 14,
    color: "#666",
  },

  //for dropdown
  dropdown: {
    height: 24,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 200,
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
    border: 0,
    elevation: 0,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdwonContainer: {
    backgroundColor: "white",
    padding: 16,
    borderWidth: 0,
    // width: 200,
  },
});
