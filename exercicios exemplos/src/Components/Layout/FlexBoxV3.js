import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlaxV1}>
            <Quadrado cor="#ff801a"/>
            <Quadrado cor="#50d1f6"/>
            <Quadrado cor="#dd22c1"/>
            <Quadrado cor="#8312ed"/>
            <Quadrado cor="#35c9a7"/>
        </View>
    )
}

const style = StyleSheet.create({
    FlaxV1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 350,
        width: "100%",
        backgroundColor: "#999",
    }
})