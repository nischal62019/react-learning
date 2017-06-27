import { CREATE, UPDATE_INPUT } from './constants.js'

export function createTodo(text) {
    return {
        type: CREATE,
        payload: {
            text,
            id: Date.now()
        }
    }
}

export function updateInputText(text) {
    return {
        type: UPDATE_INPUT,
        payload: text
    }
}