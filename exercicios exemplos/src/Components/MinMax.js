import React from 'react'
import { Text } from 'react-native'
import Estilo from './style'

export default props => {
    return (
        <Text style={Estilo.txtG}>
            O Valor {props.max} é Maior que o valor {props.min}!
        </Text>
    )
}