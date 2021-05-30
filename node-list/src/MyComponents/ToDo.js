import React from 'react'
import {Button} from 'react-bootstrap'
export default function ToDo({todo,onDelete}) {
    return (
        <div className="container">
            <h5>{todo.title}</h5>
            <p>{todo.desc}</p>
            <Button variant="danger" size="sm" onClick={()=>{onDelete(todo)}}>Delete</Button>{' '}
        </div>
    )
}