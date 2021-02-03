import React, { useContext } from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import UnDoneTodo from './UnDoneTodo'
import TodosContexts from '../../Contexts/Todos'

function UnDoneTodos() {
    const todoContext = useContext(TodosContexts)
    let UnDoneTodos = todoContext.todos.filter(item => item.done === false)
    return (
        <ListGroup className=" my-4 col-lg-4 " style={{ width: " 18rem" }}>
            <ListGroup.Item active className="w-100 d-flex justify-content-between" >
                <div className="lead">DO</div>
                <div ><Badge variant="light">{UnDoneTodos.length}</Badge> </div>
            </ListGroup.Item>
            {UnDoneTodos.map(todo =><UnDoneTodo
                key={todo.key}
                todo={todo} />)}
        </ListGroup>
    )
}
export default UnDoneTodos
