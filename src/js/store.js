import EventEmitter from 'events'
import dispatcher from './dispatcher'

class Store extends EventEmitter {
  constructor() {
    super()
    this.inputInitValue=""
    this.todos = [
      {
        id: 1,
        text: 'Buy milk',
        completed: false
      },
      {
        id: 2,
        text: 'Buy bread',
        completed: false
      },
      {
        id: 3,
        text: 'Buy jam',
        completed: false
      }
    ]
  }

  handleActions(action) {
    console.log('action received ', action)
    switch (action.type) {
      case "CREATE":
        this.createTodo(action.text)
        break;
      case "DELETE":
        this.deleteTodo(action.id)
        break;
      case "TOGGLE":
        this.toggleTodo(action.id)
        break;
      default:
        break;
    }
  }

  createTodo(text) {
    const id = Date.now()
    this.todos.push({
      id,
      text,
      completed: false
    })
    this.inputInitValue = ""
    this.emit("change")
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => {
      return todo.id != id
    })
    this.emit('change')
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.emit('change')
  }


}

const store = new Store

dispatcher.register(store.handleActions.bind(store))

window.store = store
window.dispatcher = dispatcher

export default function configureStore() {
  return store
}