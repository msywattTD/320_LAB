import { useState } from 'react'

function CreateTodo({addTodo}) {

    
  const [newTodo, setNewTodo] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (newTodo === "") {
            console.log("empty todo attempt")
            return
        }
        addTodo(newTodo)

        setNewTodo('')
    }


    return     (
    <form className="new-todo" onSubmit={handleSubmit}>
        <div className="new-entry">
        <label htmlFor="todo">New Todo</label>
            <input type="text" id="todo" value={newTodo} onChange={e => setNewTodo(e.target.value) } />
        </div>
        <button className="btn">Add New Todo</button>
  </form>
    )
}

export default CreateTodo