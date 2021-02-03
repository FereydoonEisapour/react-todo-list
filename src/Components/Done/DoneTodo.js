import React, { useContext } from 'react'
import TodosContexts from '../../Contexts/Todos'
import { ListGroup } from 'react-bootstrap'
function DoneTodo(props) {
    const todoContext = useContext(TodosContexts)
    let toggleDone = () => {
        todoContext.dispatch({ type: 'toggle_todo', payload: props.todo.key })
    }
    let delTodo = () => {
        todoContext.dispatch({ type: 'delete_todo', payload: props.todo.key })
    }
    return (
        <ListGroup.Item className="w-100 d-flex justify-content-between" >
            <div >{props.todo.text}</div>
            <div>
                <span className="material-icons btn btn-warning mr-1 text-light" onClick={toggleDone} >
                    undo
                </span>
                <span className="material-icons  btn btn-danger" onClick={delTodo}>
                    delete
                </span>
            </div>
        </ListGroup.Item>
    )
}

export default DoneTodo
