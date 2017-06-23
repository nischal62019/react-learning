import React from 'react'

export default class TodoInput extends React.Component {
    render() {
        return (
            <div>
                    <input onChange={this.props.onkeypress} value={this.props.inputValue}/> <button onClick={this.props.onclick}>Add</button>
            </div>
        )
    }
}