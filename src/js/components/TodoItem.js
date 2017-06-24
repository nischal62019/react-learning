import React from 'react'
import TodoList from './TodoList'

export default class TodoItem extends React.Component {
    render() {
        const textDecor = this.props.completed? 'line-through' : 'underline'
        const itemStyle = {
            textDecoration : textDecor
        }
        return (
            <div>
                    <input type="checkbox" defaultChecked={this.props.completed} id={this.props.id} onChange={this.props.onTodoChange}/><span style={itemStyle}>{this.props.text}</span> <br/>
            </div>
        )
    }
}