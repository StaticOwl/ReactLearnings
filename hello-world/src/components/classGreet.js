import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        const {name} = this.props;
        return <h1>This is the first Class Component, {name.firstName}</h1>
    }
}

export default Welcome;