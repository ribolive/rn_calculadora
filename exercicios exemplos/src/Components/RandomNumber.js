import React from 'react'
import { Text } from 'react-native'
import Estilo from './style'

export default props => {
    const {min, max} = props
    const delta = max - min + 1;
    const randNumb = parseInt(Math.random() * delta) + min
    return (
        <Text style={Estilo.txtM}>Random Value: {randNumb}</Text>
    )
}