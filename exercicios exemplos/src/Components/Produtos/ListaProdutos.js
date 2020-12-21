import React from 'react'
import {Text} from 'react-native'
import Estilo from '../style'

import Produtos from './Produtos'

export default props => {

    function GetListaProdutos(){
        return Produtos.map(p => {
            return (
                <Text key={p.id}>
                    {p.id}) {p.nome} | Preço: R$ {p.preco}
                </Text>
            )
        })
    }
    

    return (
        <>
            <Text style={Estilo.txtM}>
                Lista de Produtos
            </Text>
            {GetListaProdutos()}
        </>
    )
}