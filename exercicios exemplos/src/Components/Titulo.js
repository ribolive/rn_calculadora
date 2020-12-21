import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import Estilo from './style';

export default props => (
    <>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text style={Estilo.txtM}>{props.secundario}</Text>
    </>
)