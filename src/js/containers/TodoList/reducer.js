import { List } from 'immutable'
import { DELETE, TOGGLE, FETCH } from './constants'
import { CREATE } from '../TodoInput/constants'

const initState = List([])

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
        case FETCH:
            state = List(action.payload)
            break;
        default:
            break;
    }
    return state
}