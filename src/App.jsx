import { useState } from 'react'
import CreateTodo from './Components/CreateTodo'
import TodoList from './Components/TodoList'
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos((prevTodos) =>{
      return [
      ...prevTodos,
      {title, completed: false}
      ]
  })
  }


  function toggleTodo(title, completed) {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.title == title) {
          return { ...todo, completed }
        } else {
          return todo
        }
      })
    })
  }


  // make a pop up box and set that to newtitle??? maybe just recreate the entire list idk
  // function editTodo(title, newTitle) {
  //   setTodos(prevTodos =>{
  //     return prevTodos.filter(todo => {
  //       if (todo.title == title) {
  //         todo.title = newTitle
  //       }
  //     })
  //   })
  // }

  function deleteTodo(title) {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.title !== title)
    })
  }


  return (
  <>
    <CreateTodo addTodo={addTodo} />
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

  </>
  )
}