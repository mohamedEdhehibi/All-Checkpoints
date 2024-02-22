import React, { useState } from 'react'

const AddTask = (addtask) => {
    const [des, setDes] = useState('')
    return (

        <div className='row'>
            <div className='col-8 mt-2'>
                <input type="text" className='col-4' onChange={(e) => setDes(e.target.value)} />
            </div>
            <div className='col-2 justify-content-center mt-2' >
                <button className='btn btn-success' onClick={() => addtask.addtask(
                    { id: Date.now, description: des, done: false })} >Add</button>
            </div>
        </div>

    )
}

export default AddTask