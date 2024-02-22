import React from 'react'
import './Todo.css'
const Todo = ({ task: { id, description, done }, handledelete, handledone }) => {
    return (
        <div className='row'>
            <div className='col-6 mt-2'>
                <span className={(done) ? 'done' : 'undone'}>{description}</span>

            </div>
            <div className='col-2 justify-content-center mt-2' >
                <button className='btn btn-danger' onClick={() => handledelete(id)}>Delete</button>
            </div>
            <div className='col-2 justify-content-center mt-2'>
                <button className='btn btn-success' onClick={() => handledone(id)}>Done</button>

            </div>
        </div>
    )
}

export default Todo