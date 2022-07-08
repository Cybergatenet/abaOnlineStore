import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        // if(this.props.todo.isCompleted){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }else{
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
        }
    }

    // markComplete = (e) => {

    // }

    render() {
        // console.log(this.props.todo);
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: "50%",
    cursor: "pointer",
    float: 'right',
    outline: 'none',
}

export default TodoItem
