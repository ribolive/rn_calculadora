import React from 'react'
import { Text } from 'react-native'
import Estilo from './style'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtM}> Usuário Logado:</Text>
                <Text style={Estilo.txtM}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
    )
}