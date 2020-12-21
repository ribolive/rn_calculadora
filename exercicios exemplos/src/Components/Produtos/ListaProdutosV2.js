import React from 'react'
import {Text, FlatList} from 'react-native'
import Estilo from '../style'

import Produtos from './Produtos'

export default props => {

    const ProdutoRender = ({ item: p }) =>{
        return <Text>{p.id}) {p.nome}</Text>
    }

    return (
        <>
            <Text style={Estilo.txtM}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={Produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={ProdutoRender}
            />
        </>
    )
}