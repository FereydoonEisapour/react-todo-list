import React, { useContext, useState } from 'react'
import { Form, Col, Button,ListGroup } from 'react-bootstrap'

import TodosContext from './../../Contexts/Todos'
function AddTodo() {
    const todosContext = useContext(TodosContext)
    const [text, setText] = useState('')
    let addTodoButton = (e) => {
        e.preventDefault()
        todosContext.dispatch({ type: 'add_todo', payload: text })
        setText('')
    }
    let inputHandler = (e) => {
        setText(e.target.value)
    }
    return (
            <ListGroup className=" my-4 col-md-8 col-lg-4" style={{ width: " 18rem" }} >
                <ListGroup.Item active className="w-100 d-flex justify-content-between align-content-center" >
                    <div className="lead">Add Your Todo</div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Form >
                        <Form.Row className="align-items-center d-flex">
                            <Col xs="auto" className=" col-9">
                                <Form.Label htmlFor="inlineFormInput" srOnly>
                                    Name
                                </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    id="inlineFormInput"
                                    placeholder="Todo"
                                    value={text} onChange={inputHandler}
                                />
                            </Col>
                            <Col xs="auto" className="col-2">
                                <Button type="submit" onClick={addTodoButton} className="mb-2">
                                    Add
                           </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </ListGroup.Item>
            </ListGroup>
    )
}
export default AddTodo