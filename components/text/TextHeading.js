import { StyleSheet } from "react-native"
import { Text } from "react-native"

export default function TextHeading({text , isWhite=false}){
    return (
        <Text style={[ styles.heading , {color:isWhite ? '#fff':'#000'}]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
  heading:{
    fontFamily:'Inter',
    fontSize:24,
    fontWeight:"700",
    color: '#000'
  }
})