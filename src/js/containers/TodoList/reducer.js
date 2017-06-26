import { List } from 'immutable'
import {  DELETE, TOGGLE } from './constants'
import { CREATE } from '../TodoInput/constants'

const todos = [
    {
        id: 1,
        text: 'Buy milk',
        completed: false
    },
    {
        id: 2,
        text: 'Buy bread',
        completed: false
    },
    {
        id: 3,
        text: 'Buy jam',
        completed: false
    }
]

const initState = List(todos)

export const TodoListReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE:
            state = state.push(action.payload)
            break;
        case DELETE:
            state = state.filter((todo) => {
                return todo.id != action.payload
            })
            break;
        case TOGGLE:
            state = state.map((todo) => {
                if (todo.id == action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            break;
        default:
            break;
    }
    return state
}