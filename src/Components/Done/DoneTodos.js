import React, { useContext } from 'react'
import TodosContexts from '../../Contexts/Todos'
import { ListGroup, Badge } from 'react-bootstrap'
import DoneTodo from './DoneTodo'
function DoneTodos() {
    const todoContext = useContext(TodosContexts)
    let doneTodos = todoContext.todos.filter(item => item.done === true)
    return (
            <ListGroup className="my-4 col-lg-4"style={{ width: " 18rem" }}>
                <ListGroup.Item active className="w-100 d-flex justify-content-between" >
                <div className="lead">DONE</div>
                <div ><Badge variant="light">{doneTodos.length}</Badge> </div>
                </ListGroup.Item>
                {doneTodos.map(todo => <DoneTodo
                    key={todo.key}
                    todo={todo} />)}
            </ListGroup>
    )
}

export default DoneTodos
