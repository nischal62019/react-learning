import React from 'react'

export default class TodoItem extends React.Component {
    render() {
        return (
            <div>
                    <input type="checkbox" name="vehicle" value="Bike"/>{this.props.value} <br/>
            </div>
        )
    }
}