import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
    render() {
        
        const todoItems = this.props.todos.map((todo) => {
            return <TodoItem onTodoChange={this.props.onTodoChange} key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
        })

        return (
            <div>
                {todoItems}
            </div>
        )
    }
}