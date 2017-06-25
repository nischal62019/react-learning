import React from 'react'
import TodoInput from '../../components/TodoInput'
import * as Actions from './actions'

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
            Actions.createTodo(this.todoStr)
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