import React, {useState} from 'react'
import {View, TextInput, Text} from 'react-native'
import Estilo from './style'

export default props => {
    let [nome, setNome] = useState("Teste")
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Digite Seu Nome"
                value={nome} // Se Digitar Null como valor, transforma em um Componente Não controlado (sem vinculos de estado do componente)
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}