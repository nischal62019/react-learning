import React from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends React.Component {
    render() {
        const todos = this.props.todos
        const todoItems = todos.map((todo) => {
            return <TodoItem key={todo.id} text={todo.text} completed={todo.completed}/>
        })
        return (
            <div>
                {todoItems}
            </div>
        )
    }
}