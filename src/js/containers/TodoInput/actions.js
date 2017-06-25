import dispatcher from '../../dispatcher'
import {CREATE} from './constants.js'

export function createTodo(text) {
    dispatcher.dispatch({
        type: CREATE,
        text
    })
}