import React from 'react';
import { addTask } from '../JS/actions/task';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

const AddTask = () => {
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleNewTask = (e) => {
        e.preventDefault();

        dispatch(addTask({id: Math.random(), description: description, isDone: false}));

        setDescription("");
    }
    return (
        <form>
            <input className='input' type='text' onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Enter new task description..." size='50'/>
            <Button variant="outline-success" onClick={handleNewTask}>ADD TASK</Button>
        </form>
    )
}

export default AddTask;
