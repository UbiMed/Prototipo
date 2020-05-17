import React, { Component } from 'react';
import Map from './Map';
import Buscador from './Buscador'

export default class Index extends Component {
    render() {
        return (
            <div>
                <h1 className="center-align col s6">BIENVENIDO A UBIMED</h1>
                <Buscador />
                <Map />
            </div>
        )
    }
}
