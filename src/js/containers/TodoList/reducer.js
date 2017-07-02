import { fromJS } from 'immutable'
import { DELETE, TOGGLE, FETCH } from './constants'
import { CREATE } from '../TodoInput/constants'
import normalizeTodos from '../../todoNormalizer'

const initState = fromJS(normalizeTodos([]))

export const TodoListReducer = (state = initState, action) => {
    switch (action.type) {
        case DELETE:
            state = state.filter((todo) => {
                return todo.id != action.payload
            })
            break;
        case TOGGLE:
        case CREATE:
        case FETCH:
            state = state.mergeDeep(action.payload)
            break;
        default:
            break;
    }
    return state
}