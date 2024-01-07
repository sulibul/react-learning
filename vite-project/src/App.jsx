import {useState} from "react";

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false},]
    })
    setTodos(currentTodos => {
      [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false},]
    })
    }

  console.log(todos)  

  return (
  <>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        type="text" 
        id="item"
        />
      </div>
        <button className="btn">ADD</button>
    </form>
    <h1 className="header">to do list</h1>
    <ul className="list">
      {todos.map(todo => {
        return(
        <li>
        <label>
          <input type="checkbox" checked={todo.completed}/>
          {todo.title}
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
        )
      })}
    </ul>
    </>)
}