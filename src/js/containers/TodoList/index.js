import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../../components/TodoList'
import { fetchTodos, toggleTodo } from './actions'
import { todoListSelector } from './selector'

class TodoListContainer extends React.Component {

    constructor() {
        super()
        this.toggleTodo = this.handleToggleTodo.bind(this)
    }

    componentWillMount() {
        this.props.fetchTodos()
    }
    handleToggleTodo = (e) => {
        const toggleTodo = this.props.todos.filter( todo => todo.id == e.target.id )
        toggleTodo[0].completed = !toggleTodo[0].completed
        this.props.toggleTodo(toggleTodo)
    }
    render() {
        return (
            <TodoList toggleTodo={this.toggleTodo} todos={this.props.todos}/>
        )
    }

}

const filterTodoList = (todos, filter) => {
    return todos.filter((todo) => {
        if (filter == 'new') {
            return !todo.completed
        } else if (filter == 'completed') {
            return todo.completed
        } else {
            return true
        }
    })
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: todoListSelector(state, ownProps)
    }
}

export default connect(
    mapStateToProps, {
        toggleTodo,
        fetchTodos
    }
)(TodoListContainer)
