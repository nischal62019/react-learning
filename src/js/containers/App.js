import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import configureStore from '../store'

// import components
import Header from '../components/Header'
import TodoItem from '../components/TodoItem'
import TodoInput from '../components/TodoInput'
import NewTodos from '../components/NewTodos'
import CompletedTodos from '../components/CompletedTodos'
import AllTodos from '../components/AllTodos'
import TodoList from '../components/TodoList'

// import actions
import * as TodoActions from '../actions/TodoActions' 

export default class App extends React.Component {
    
    constructor() {
        super()
        this.store = configureStore()
        this.state = this.store
    }

    componentWillMount() {
        this.store.on('change', () => {
            this.setState(this.store)
        })
    }

    handleKeyPress(e) {
        console.log("key pressed",e.target.value)
        this.setState({inputInitValue:e.target.value})
        this.todoStr = e.target.value
    }

    handleClick(e) {
        
        if(this.todoStr && this.todoStr.length > 0){
            console.log('invoked action')
            TodoActions.createTodo(this.todoStr)
        }
        
    }
    

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <TodoInput inputValue={this.state.inputInitValue} onclick={this.handleClick.bind(this)} onkeypress={this.handleKeyPress.bind(this)}/>
                    <div>
                        <TodoList todos={this.state.todos}/>
                    </div>
                    <Route path="/"/>                    
                    <Route path="/new" component={NewTodos}/>
                    <Route path="/completed" component={CompletedTodos}/>
                    <Route path="/all" component={AllTodos}/>                    
                </div>
            </Router>
        )
    }
}