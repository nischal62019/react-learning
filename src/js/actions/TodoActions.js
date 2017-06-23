import dispatcher from '../dispatcher'

export function createTodo(text) {
    dispatcher.dispatch({
        type: 'CREATE',
        text
    })
}

export function toggleTodo(id) {
    dispatcher.dispatch({
        type: 'TOGGLE',
        id
    })
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: 'DELETE',
        id
    })
}