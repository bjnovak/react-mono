import React from 'react';
import './index.css';

export class CoreMod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnColor: 'btn-blue'
        };
        this.clickMe = this.clickMe.bind(this);
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