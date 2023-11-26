import React, { Component } from 'react';

class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello Man!',
            subscription: false,
            subsText: 'Subscribe!'
        }
    }

    changeState() {
        if (this.state.subscription) {
            this.setState({
                message: 'Sorry to see you go!',
                subscription: false,
                subsText: 'Re-Subscribe!'
            });
        } else {
            this.setState({
                message: 'Thank you for subscribing!',
                subscription: true,
                subsText: 'Unsubscribe!'
            });
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeState()}>{this.state.subsText}</button>
            </div>
        )}
}

export default Message;