import React from 'react'
import TodoListItem  from './TodoListItem'

function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
  return (
    <ul className="list">
        {/* .reverse() might work somewhere but maybe a different approach all together */}
    {todos.map(todo => {
      return (
        <TodoListItem title={todo.title} completed={todo.completed} key={todo.title} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
      )
    })}
  </ul>
  )
}

export default TodoList