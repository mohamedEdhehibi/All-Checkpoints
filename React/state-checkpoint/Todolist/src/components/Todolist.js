import React from 'react'
import Todo from './Todo'
const Todolist = ({ todos, handledelete, handledone }) => {
    return (
        <div>
            {todos.map((task, key) => (
                <Todo
                task={task} 
                key={key}
                handledelete={handledelete}
                handledone={handledone}
                />

        )
            )}
        </div>
    )
}

export default Todolist