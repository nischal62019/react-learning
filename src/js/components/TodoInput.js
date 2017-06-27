import React from 'react'

export default class TodoInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = { inputText: '' }
    }

    onChange(e) {
        this.setState({ inputText: e.target.value })
    }

    onClick(e) {
        if (this.state.inputText && this.state.inputText.length > 0) {
            this.props.createTodo(this.state.inputText)
            this.setState({ inputText: '' })
        }
    }

    render() {
        return (
            <div>
                <input onChange={this.onChange.bind(this)} value={this.state.inputText} /> <button onClick={this.onClick.bind(this)}>Add</button>
            </div>
        )
    }
}