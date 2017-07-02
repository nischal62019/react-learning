import { normalize, denormalize, schema } from 'normalizr'

const todos = new schema.Entity('todos')
const normalizeTodos = todoData => normalize(todoData, [todos]).entities

export default normalizeTodos
