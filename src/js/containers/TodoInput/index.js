import React from 'react'
import { connect } from 'react-redux'
import TodoInput from '../../components/TodoInput'
import * as Actions from './actions'

@connect((store) => {
    return {
        todoInput: store.todoInput
    }
})
export default class TodoInputContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {inputInitValue: ''}
    }

    handleKeyPress(e) {
        this.setState({ inputInitValue: e.target.value })
        this.todoStr = e.target.value
    }

    handleClick(e) {
        if (this.todoStr && this.todoStr.length > 0) {
            this.setState({inputInitValue: ''})
            console.log('create todo action ', Actions.createTodo(this.todoStr))
            this.props.dispatch(Actions.createTodo(this.todoStr))
        }
    }

    render() {
        return (
            <div>
                <TodoInput inputValue={this.state.inputInitValue} onclick={this.handleClick.bind(this)} onkeypress={this.handleKeyPress.bind(this)} />
            </div>
        )
    }

}