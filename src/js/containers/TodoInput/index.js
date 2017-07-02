import React from 'react'
import { connect } from 'react-redux'
import TodoInput from '../../components/TodoInput'
import { createTodo } from './actions'

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const TodoInputContainer = connect(
    mapStateToProps, {
        createTodo
    }
) (TodoInput)

export default TodoInputContainer