import React from 'react'
import {Text} from 'react-native'

export default props => {
    return (
        <>
            <Text>Mambros da Família:</Text>
            {props.children} 
        </>
    )
}