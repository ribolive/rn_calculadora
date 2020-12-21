import React from 'react'
import {Button, View, StyleSheet} from 'react-native'

export default props => {
    return (
        <View style={[style.Btn]}>
            <Button title="-" onPress={props.dec}/>
            <Button title="+" onPress={props.inc}/>
        </View>
    )
}

const style = StyleSheet.create({
    Btn: {
        flexDirection: "row",
    }
})