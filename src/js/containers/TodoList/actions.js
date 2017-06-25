import dispatcher from '../../dispatcher'
import {TOGGLE, DELETE} from './constants'

export function toggleTodo(id) {
    dispatcher.dispatch({
        type: TOGGLE,
        id
    })
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: DELETE,
        id
    })
}