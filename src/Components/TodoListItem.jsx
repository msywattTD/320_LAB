import React from 'react'

function TodoListItem({ title, completed, toggleTodo, editTodo, deleteTodo }) {
  return (
    <li>
    <label>
      <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(title, e.target.checked)} />
      {title}
    </label>
  <button className="btn btn-edit" onClick={() => editTodo(title)}>Edit</button>
  <button className="btn btn-delete" onClick={() => deleteTodo(title)}>Delete</button>
  </li>
  )
}

export default TodoListItem