import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

// import components
import Header from '../../components/Header'
import TodoInputContainer from '../TodoInput'
import TodoListContainer from '../TodoList'


export default class App extends React.Component {
    
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <TodoInputContainer/>
                    <Route path="/:id?" render={props => <TodoListContainer {...props} />} />                    
                </div>
            </Router>
        )
    }
}
