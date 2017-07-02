import { CREATE } from './constants.js'
import normalizeTodos from '../../todoNormalizer'

export function createTodo(text) {
    return {
        type: CREATE,
        payload: normalizeTodos([{
            text,
            id: Date.now()
        }])
    }
}
