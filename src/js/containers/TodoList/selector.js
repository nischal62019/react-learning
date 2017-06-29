import { createSelector } from 'reselect'

// create input selectors
const getFilter = (state, props) => props.match.params.id
const getTodos = (state) => state.todos

export const todoListSelector = createSelector(
    [getFilter, getTodos],
    (id, todos) => {
        // well, refactor
        const filter = id
        todos = todos.filter((todo) => {
            if (filter == 'new') {
                return !todo.completed
            } else if (filter == 'completed') {
                return todo.completed
            } else {
                return true
            }
        })
        return todos
    })
