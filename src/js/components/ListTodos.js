import React from 'react'
import TodoList from './TodoList'

export default class ListTodos extends React.Component {

    render() {
        return (
            <div>
                <TodoList filter={this.props.match.params.id} onTodoChange={this.props.onTodoChange} todos={this.props.todos} />
            </div>
        )
    }

}