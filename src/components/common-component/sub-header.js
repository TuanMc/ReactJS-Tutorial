import React from 'react';
import '../../assets/App.css';

export default class SubHeader extends React.Component {
    render() {
        return (
            <p className="App-intro">
                Hello {this.props.name}! How ya doin.
            </p>
        )
    }
}