import React from 'react'
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycleA componentDidUpdate')
    }

    render() {
        return (
            <div>
                <div>
                    LifeCycleA
                </div>
                <button onClick={() => this.setState({name: 'Jane'})}>Change state</button>
                <LifeCycleB/>
            </div>
        )
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }
}

export default LifeCycleA