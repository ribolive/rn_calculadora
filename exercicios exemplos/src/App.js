import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

// import MinMax from './Components/MinMax'
// import RandomNumber from './Components/RandomNumber'
// import ComponentePadrao, { Comp1, Comp2 } from './Components/Multi'
// import Primeiro from './Components/Primeiro'
// import Titulo from './Components/Titulo'
// import Botao from './Components/Botao'
// import Contador from './Components/Contador'
// import Pai from './Components/Direta/Pai'
// import PaiIndireto from './Components/Indireta/Pai'
// import ContadorV2 from './Components/Contador/ContadorV2'
// import Familia from './Components/Relacao/Familia'
// import Membro from './Components/Relacao/Membro'
// import UsuarioLogado from './Components/UsuarioLogado'
// import ListaProdutosV2 from './Components/Produtos/ListaProdutosV2'
// import DigiteSeuNome from './Components/DigiteSeuNome'
// import FlexBoxV2 from './Components/Layout/FlexBoxV2'
// import FlexBoxV3 from './Components/Layout/FlexBoxV3'
// import FlexBoxV4 from './Components/Layout/FlexBoxV4'
import Mega from './Components/Mega/Mega'

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdDeNumeros={7} />
        {/* <MinMax min={3} max={20} />
        <FlexBoxV4/>
        <FlexBoxV3/>
        <FlexBoxV2/>
        <DigiteSeuNome/>
        <ListaProdutosV2/>
        <ListaProdutos/>
        <UsuarioLogado usuario={ {nome: "Gabriel", email: "gabriel@example.com"} }/>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda"/>
            <Membro nome="Carlos" sobrenome="Arruda"/>
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Arruda"/>
            <Membro nome="Julia" sobrenome="Arruda"/>
        </Familia>
        <ContadorV2/>
        <Contador inicial={100} passo={13} />
        <Titulo principal="Cadastro de Produto" secundario="Tela de cadastro" />
        <Botao />
        <MinMax min={1} max={50} />
        <RandomNumber min={10} max={100} />
        <Primeiro />
        <ComponentePadrao />
        <Comp1 />
        <Comp2 /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})