import React, {useState} from 'react'
import {Text} from 'react-native'
import Estilo from '../style'

import ContadorDisplay from './ContadorDisplay'
import ContadorBtn from './ContadorBtn'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text style={Estilo.txtM}> ContadorV2 </Text>
            <ContadorDisplay num={num}/>
            <ContadorBtn inc={inc} dec={dec}/>
        </>
    )
}