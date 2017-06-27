import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../../components/TodoList'
import { fetchTodos, toggleTodo } from './actions'

class TodoListContainer extends React.Component {

    componentWillMount() {
        this.props.fetchTodos()
    }
    handleToggleTodo = (e) => {
        this.props.toggleTodo(e.target.id)
    }
    render() {
        return (
            <TodoList toggleTodo={this.handleToggleTodo.bind(this)} todos={this.props.todos}/>
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
        todos: filterTodoList(state.todos, ownProps.match.params.id),
    }
}
// This is another alternative of injecting dispatch to props

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         toggleTodo: (e) => {
//             dispatch(toggleTodo(e.target.id))
//         },
//         fetchTodos: () => {
//             dispatch(fetchTodos())
//         }
//     }
// }

export default connect(
    mapStateToProps, {
        toggleTodo,
        fetchTodos
    }
)(TodoListContainer)
