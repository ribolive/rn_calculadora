import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../style'

import MegaNumero from './Numero'

export default class Mega extends Component {

    state = {
        qtdDeNumeros: this.props.qtdDeNumeros,
        numeros: []
    }

    GetRandNum = nums => {
        const newNumb = parseInt(Math.random() * 60) + 1
        return nums.includes(newNumb) ? this.GetRandNum(nums) : newNumb
    }

    SetQtdNumero = (qtd) => {
        this.setState({qtdDeNumeros: +qtd})
    }

    GerarNumeros = () => {
        const numeros = Array(this.state.qtdDeNumeros)
            .fill()
            .reduce(n => [...n, this.GetRandNum(n)], [])
            .sort((a,b) => a - b)
        this.setState({numeros})
    }
    
    ExibirNumeros = () => { 
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num}/>
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtM}>
                    Gerador Mega-Senna
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    maxLength={2}
                    style={{borderBottomWidth: 0.5}}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdDeNumeros}`}
                    onChangeText={this.SetQtdNumero}
                />
                <Button 
                    title="Gerar"
                    onPress={this.GerarNumeros}
                />
                <View style={{marginTop:20, flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
                    {this.ExibirNumeros()}
                </View>
            </>
        )
    }
}