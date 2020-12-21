import React from 'react'
import {View, StyleSheet} from 'react-native'

export default props => {
    return (
        <View style={style.FlaxV1}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlaxV1: {
        flexGrow: 1,
        width: 100,
        backgroundColor: "#999",
    },
    V0:{
        backgroundColor: "#ff801a",
        height: 300
    },
    V1:{
        backgroundColor: "#dd22c1",
        flexGrow: 9
    },
    V2:{
        backgroundColor: "#35c9a7",
        flexGrow: 1
    }
})