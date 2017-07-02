import { createSelector } from 'reselect'

// create input selectors
const getFilter = (state, props) => props.match.params.id
const getTodosMap = state => state.todos.get('todos')

const getTodos = createSelector([getTodosMap], todosMap => {
    return todosMap && todosMap.toArray().map(todo => todo.toJS())
})

export const todoListSelector = createSelector(
    [getFilter, getTodos],
    (filter, todos) => {
        if (todos) {
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
        } else {
            return []
        }

    })
