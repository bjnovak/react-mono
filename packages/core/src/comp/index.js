import React from 'react';
import './index.css';

export class Comp extends React.Component {
    render() {
        return (
            <div className='comp'>
                <h1>Comp - container</h1>
                {this.props.children}
            </div>
        );
    }
}