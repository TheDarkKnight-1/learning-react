import React from 'react'
import {Button} from 'react-bootstrap'
export default function ToDo({todo,onDelete}) {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <Button variant="danger" size="sm" onClick={onDelete}>Delete</Button>{' '}
        </div>
    )
}