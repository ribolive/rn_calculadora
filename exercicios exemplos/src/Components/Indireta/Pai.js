import React, {useState} from 'react'
import {Text} from 'react-native'
import Estilo from '../style'
import Filho from './Filho'

export default props => {
    const [num, SetNum] = useState(0)

    function exibirValor(numero) {
        SetNum(numero)
    }
    
    return (
        <>
            <Text style={Estilo.txtM}>{num}</Text>
            <Filho 
                min={1} 
                max={100} 
                funcao={exibirValor}
            />
        </>
    )
}
