import React, { useContext } from 'react'
import TodosContexts from '../../Contexts/Todos'
import { ListGroup } from 'react-bootstrap'
function UnDoneTodo(props) {
    const todoContext = useContext(TodosContexts)
    let toggleDone = () => {
        todoContext.dispatch({ type: 'toggle_todo', payload: props.todo.key })
    }
    let delTodo = () => {
        todoContext.dispatch({ type: 'delete_todo', payload: props.todo.key })
    }
    return (
        <ListGroup.Item className="w-100 d-flex justify-content-between" >
            <div className=""> {props.todo.text}</div>
            <div>
                <span className="material-icons btn btn-success mr-1" onClick={toggleDone}>
                    done
                </span>
                <span className="material-icons btn btn-danger " onClick={delTodo}>
                    delete
                </span>
            </div>
        </ListGroup.Item>
    )
}

export default UnDoneTodo
