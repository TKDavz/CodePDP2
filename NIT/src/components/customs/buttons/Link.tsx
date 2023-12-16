import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { Colors, fonts } from '../Styles'

type Prop = {
    title?: string,
    onPress?: () => void,
    style?: ViewStyle | ViewStyle[],
}

const Link = (prop : Prop) => {
  return (
    <TouchableOpacity style={[prop?.style]} onPress={()=>{
        prop?.onPress && prop.onPress()
        }}>
      <Text style={[fonts.link, {color: Colors.primary}]}>{prop?.title || "title" }</Text>
    </TouchableOpacity>
  )
}

export default Link