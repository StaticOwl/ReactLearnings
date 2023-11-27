import React, { Component } from 'react'

class ClassClick extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello World!'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        console.log('Button clicked');
        console.log(this);
        this.setState({
            message: 'Goodbye World!'
        })
    }

    clickHandlerArrow = () => {
        this.setState({
            message: 'Goodbye World!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler.bind(this)}>ClickMe</button>
                <button onClick={() => this.clickHandler()}>ClickMe</button>
                <button onClick={this.clickHandler}>ClickMe</button>
                <button onClick={this.clickHandlerArrow}>ClickMe</button>
            </div>
        )
    }
}

export default ClassClick