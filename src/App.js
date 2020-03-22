import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React", id: 0, isComplete: false },
    { text: "Draw", id: 1, isComplete: false },
    { text: "Swim", id: 2, isComplete: false }
  ]);
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        const nextId = todos[todos.length - 1].id + 1
        setTodos([...todos, { text: newTodo, id: nextId, isComplete: false }])
        setNewTodo("");
      }}>
        <input value={newTodo} required={true} onChange={e => {
          setNewTodo(e.target.value)
        }} />
        <button>Add New Todo</button>
      </form>
      {todos.map((todo, i) => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.isComplete} onChange={e => {
            const newTodos = Object.assign([], todos, {
              [i]: { ...todo, isComplete: !todo.isComplete }
            })
            setTodos(newTodos)
          }} />
          <input
            style={{
              textDecoration: todo.isComplete ? "line-through" : "none"
            }}
            value={todo.text}
            onChange={e => {
              const newTodos = Object.assign([], todos, {
                [i]: { ...todo, text: e.target.value }
              })

              setTodos(newTodos);

            }}
          />
          <button onClick={e => {
            const newTodos = todos.filter((todo, index) => index !== i)
            setTodos(newTodos)
          }}>X</button>
        </div>

      ))
      }
    </div >
  );
}

export default App;
