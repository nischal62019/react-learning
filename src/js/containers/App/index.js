import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import configureStore from '../../store'

// import components
import Header from '../../components/Header'
import TodoInputContainer from '../TodoInput'
import TodoListContainer from '../TodoList'

// import actions
import * as TodoActions from '../../actions/TodoActions' 

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

    render() {
        console.log('AppContainer ',this.state.todos)
        return (
            <Router>
                <div>
                    <Header/>
                    <TodoInputContainer/>
                    <Route path="/:id?" render={props => <TodoListContainer todos={this.state.todos} {...props} />} />                    
                </div>
            </Router>
        )
    }
}
