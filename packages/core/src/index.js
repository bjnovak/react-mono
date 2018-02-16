import React from 'react';
import './index.css';
import { Comp } from './comp';

export class CoreMod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnColor: 'btn-blue'
        };
        this.clickMe = this.clickMe.bind(this);
    }

    clickMe() {
        this.setState((prevState) => ({
            btnColor: prevState.btnColor === 'btn-blue' ? 'btn-red' : 'btn-blue'
        }));
    }

    render() {
        return (
            <Comp>
                <button onClick={this.clickMe} className={this.state.btnColor}>CLICKER</button>
            </Comp>
        );
    }
}