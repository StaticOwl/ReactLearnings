import React from 'react'

class LifeCycleB extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'John'
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycleB componentDidUpdate')
    }
    render() {
        return (
            <div>
                LifeCycleB
            </div>
        )
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }
}

export default LifeCycleB