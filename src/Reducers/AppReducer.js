import { v4 as uuidv4 } from 'uuid';
function AppReducer(state, action) {
    switch (action.type) {
        case 'add_todo':
            return addTodo(state, action)
        case 'toggle_todo':
            return toggleTodo(state, action)
        case 'delete_todo':
            return deleteTodo(state, action)
        default:
            return state
    }
}
export default AppReducer

let addTodo = (state, action) => {
    let text = action.payload
    return {
        ...state,
        todos: [
            ...state.todos,
            { key: uuidv4(), done: false, text }
        ]
    }
}

let toggleTodo = (state, action) => {
    let key = action.payload
    let todo = state.todos.find(item => item.key === key)
    todo.done = !todo.done
    return {
        ...state,
        todos: [
            ...state.todos,
        ]
    }
}
let deleteTodo = (state, action) => {
    let key = action.payload
    return {
        ...state,
        todos: state.todos.filter(item => item.key !== key)

    }
}