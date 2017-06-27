import { TOGGLE, DELETE, FETCH } from './constants'

export function toggleTodo(id) {
    return (dispatch) => {
        dispatch({
            type: TOGGLE,
            payload: id
        })
    }
}

export function deleteTodo(id) {
    return (dispatch) => {
        dispatch({
            type: DELETE,
            payload: id
        })
    }
}

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

export function fetchTodos() {
    return (dispatch) => {
        dispatch({
            type: FETCH,
            payload: todos
        })
    }
}