import { View, Text, TextInput, ViewStyle } from 'react-native'
import React from 'react'
import { Colors, components, fonts } from '../Styles'

type Props = {
  title?: string,
  value?: string,
  onChangeText?: (text: string) => void,
  style?: ViewStyle | ViewStyle[]
}

const Username = (prop: Props) => {
  return (
    <View style={[components.textUser_Container, prop?.style]}>
      <Text style={[fonts.tag, {color: 'black'}]}>{prop?.title || 'Username'}</Text>
      <TextInput style={[components.textUser_input, fonts.text,  {color: 'black'}]}
        value={prop?.value != "" ? prop?.value : ""}
        // placeholder={prop?.title || 'Username'}
        onChangeText={(newText) => {
          prop.onChangeText && prop.onChangeText(newText)
        }} />
    </View>
  )
}

export default Username