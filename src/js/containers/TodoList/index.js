import React from 'react'
import TodoList from '../../components/TodoList'
import * as Actions from './actions'

export default class TodoListContainer extends React.Component {

    handleTodoSelected(e) {
        Actions.toggleTodo(e.target.id)
    }

    render() {
        const filter = this.props.match.params.id
        var todos = this.props.todos
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