import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            buttonText: 'Log In'
        }
    }
    loginHandler = (prevState) => {
        this.setState({
            isLoggedIn: !prevState.isLoggedIn,
            buttonText: 'Log Out'
        })
    }
    render() {
/*        let message
        if(this.state.isLoggedIn) {
            message = <h1>Welcome Guest</h1>
        }
        else{
            message = <h1>Welcome back!</h1>
        }*/
        return (
            <div>
                {this.state.isLoggedIn ? <h1>Welcome Guest</h1> : <h1>Welcome back!</h1>}
                <button onClick={this.loginHandler}>{this.state.buttonText}</button>
            </div>)

        /*if(this.state.isLoggedIn) {
            return (
                <div>
                    <h1>Welcome Guest</h1>
                </div>
            );
        }else{
            return (
                <div>
                    <h1>Welcome back!</h1>
                </div>
            );
        }*/
    }
}

export default UserGreeting;