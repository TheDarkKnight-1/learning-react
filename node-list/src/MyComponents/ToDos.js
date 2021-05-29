import React from 'react'
import ToDo from './ToDo'

export default function ToDos(props) {
    return (
        <div className="container">
        <h3 className="text-center my-4">My ToDos List</h3>
        {props.items.map((val)=>{
            return <ToDo todo={val} onDelete={props.onDelete}/>
        })}
        
        </div>
    )
}