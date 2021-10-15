import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {deleteTask, statusTask, editTask} from '../JS/actions/task'
import { Button } from 'react-bootstrap';

const Task = ({task}) => {
    const dispatch = useDispatch();
    const styleDesc= task.isDone ? {color: '#708090', textDecoration: 'line-through' , fontWeight: 'bold'} : {fontWeight: 'bold'};
    const [isEdit, setIsEdit] = useState(false);
    const [description, setDescription] = useState(task.description);
    const handleEdit = () => {
        dispatch(editTask(task.id, description));
        setIsEdit(false);
    }

    return (
        <div className='task'>
            {isEdit ? 
                (
                <div>
                    <input className='input' type='text' onChange={(e) => setDescription(e.target.value)} value={description}/>
                    <Button variant="outline-primary" onClick={handleEdit}>Validate Change</Button>
                </div>)
            : (<p style={styleDesc}>{task.description}</p>) }
            <Button variant="outline-dark" onClick={() => setIsEdit(!isEdit)}>Edit</Button>
            <Button variant="outline-danger" onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
            <Button variant="outline-info" onClick={() => dispatch(statusTask(task.id))}>{task.isDone ? 'UNDONE' : 'DONE'}</Button>
            <br/><br/>
        </div>
    )
}

export default Task;