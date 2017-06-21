import React from 'react'

// import components
import Header from '../components/Header'
import TodoItem from '../components/TodoItem'
import TodoInput from '../components/TodoInput'

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <TodoInput/>
                <div>
                    <TodoItem value='submit report'/>
                    <TodoItem value='Schedule meetings'/>
                </div>
            </div>
        )
    }
}