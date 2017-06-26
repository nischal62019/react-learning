import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../../components/TodoList'
import * as Actions from './actions'

@connect((store) => {
    return {
        todos: store.todos
    }
})
export default class TodoListContainer extends React.Component {

    handleTodoSelected(e) {
        console.log(e.target.id)
        this.props.dispatch(Actions.toggleTodo(e.target.id))
    }

    render() {
        const filter = this.props.match.params.id
        var todos = this.props.todos
        console.log('List of todos',todos)
        todos = todos.filter((todo) => {
            if (filter == 'new') {
                return !todo.completed
            } else if (filter == 'completed') {
                return todo.completed
            } else {
                return true
            }
        })
        return (
            <div>
                <TodoList filter={this.props.match.params.id} onTodoChange={this.handleTodoSelected.bind(this)} todos={todos} />
            </div>
        )
    }
}