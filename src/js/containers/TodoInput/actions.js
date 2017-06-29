import { CREATE } from './constants.js'

export function createTodo(text) {
    return {
        type: CREATE,
        payload: {
            text,
            id: Date.now()
        }
    }
}
