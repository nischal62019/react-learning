import React from 'react'
import { connect } from 'react-redux'
import TodoInput from '../../components/TodoInput'
import { createTodo } from './actions'

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         handleCreateTodo: (todoText) => {
//             dispatch( Actions.createTodo( todoText ) )
//         }
//     }
// }

const TodoInputContainer = connect(
    mapStateToProps, {
        createTodo
    }
) (TodoInput)

export default TodoInputContainer