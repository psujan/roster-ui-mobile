import { StyleSheet } from "react-native"
import { Text } from "react-native"

export default function TextPara({text , isWhite}){
    return (
        <Text style={[ styles.title , {color:isWhite ? '#fff':'#000'}]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
  title:{
    fontFamily:'Inter',
    fontSize:14,
    fontWeight:"400",
    color: '#000'
  }
})