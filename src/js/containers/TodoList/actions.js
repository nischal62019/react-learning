import { TOGGLE, DELETE } from './constants'

export function toggleTodo(id) {
    return (dispatch) => {
        dispatch({
            type: TOGGLE,
            payload: id
        })
    }
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: DELETE,
        payload: id
    })
}