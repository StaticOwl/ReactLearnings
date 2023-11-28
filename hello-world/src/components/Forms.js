import React from "react";

class Form extends React.Component {
    handleUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUserName}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={(event) => this.setState({comments: event.target.value})}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={(event) => this.setState({topic:event.target.value})}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form;