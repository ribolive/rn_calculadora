import React from 'react'
import {Text} from 'react-native'
import Estilo from '../style'

export default props => {
    return (
        <>
            <Text style={Estilo.txtM}>{props.a}</Text>
            <Text style={Estilo.txtM}>{props.b}</Text>
        </>
            
    )
}