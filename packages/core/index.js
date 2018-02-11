import React from 'react';
import './index.css';

export class CoreMod extends React.Component {
    constructor() {
        super();
        this.state = {
            btnColor: 'btn-blue'
        };
    }

    clickMe() {
        this.setState((prevState, props) => ({
            btnColor: prevState == 'btn-blue' ? 'btn-red' : 'btn-blue'
        }));
    }

    render() {
        return (
            <div>
                <h1>React</h1>
                <button onClick={this.clickMe} className={this.state.btnColor}>click me</button>
            </div>
        )
    }
}