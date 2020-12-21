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
        flex: 1,
        width: "100%",
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: "#999",
    }
})