import React, {useState} from 'react'
import { FormControl, Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


export default function AddTodos() {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(title || desc){
            alert("title or desc cannot be blank");
        }
    }
    return (
        <>
            <div className="container">
                <h3>Add ToDos</h3>
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="enter title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="desc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="enter description" />
                    </Form.Group>
                    <Button variant="success" size="sm" type="submit">
                        Add
                    </Button>
                </Form>
            </div>
        </>
    )
}