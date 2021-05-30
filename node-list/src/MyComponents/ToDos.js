import React from 'react'
import ToDo from './ToDo'

export default function ToDos(props) {
    return (
        <div className="container my-3">
            <h3 className="text-center my-4">My ToDos List</h3>
            {props.items.length===0?"Nothing to display":
            props.items.map((val) => {return <ToDo todo={val} key={val.slno} onDelete={props.onDelete} />})
            }
            
        </div>
    )
}