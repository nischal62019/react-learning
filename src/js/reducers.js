import { TodoListReducer } from './containers/TodoList/reducer'
import { TodoInputReducer } from './containers/TodoInput/reducer'
import { combineReducers } from 'redux'

export default combineReducers({
    todos: TodoListReducer,
    todoInput: TodoInputReducer
})