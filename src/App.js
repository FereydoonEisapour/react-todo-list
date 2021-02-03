import { useReducer } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo/AddTodo'
import AppReducer from './Reducers/AppReducer'
import TodosContext from './Contexts/Todos'
import UnDoneTodos from './Components/Undone/UnDoneTodos';
import DoneTodos from './Components/Done/DoneTodos';
import Header from './Components/Layout/Header'
function App() {
  const [state, dispatch] = useReducer(AppReducer, {
    todos: []
  })
  return (
    <TodosContext.Provider value={{
      todos: state.todos,
      dispatch
    }}>
      <div className="App">
        <Header />
        <div className="container">
          <div className="row justify-content-center">
            <AddTodo />
            <UnDoneTodos />
            <DoneTodos />
          </div>
        </div>
      </div>
    </TodosContext.Provider>
  );
}
export default App;
