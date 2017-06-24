import React from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends React.Component {
    render() {
        const filter = this.props.filter
        var todos = this.props.todos
        console.log(filter)
        todos = todos.filter((todo) => {
            if (filter == 'new') {
                return !todo.completed
            } else if (filter == 'completed') {
                return todo.completed
            } else {
                return true
            }
        })
        const todoItems = todos.map((todo) => {
            return <TodoItem onTodoChange={this.props.onTodoChange} key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
        })

        return (
            <div>
                {todoItems}
            </div>
        )
    }
}