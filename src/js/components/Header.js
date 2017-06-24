import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    render() {
        
        return (
            <div>
                <h1>
                    My awesome app
                </h1>
                <ul>
                    <li><Link to="/">All</Link></li>                
                    <li><Link to="/new">New</Link></li>
                    <li><Link to="/completed">Completed</Link></li>
                </ul>
            </div>
        )
    }
}