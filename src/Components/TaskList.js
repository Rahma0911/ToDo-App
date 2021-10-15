import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Filter from './Filter';
import Task from './Task';

const TaskList = () => {
    const [filter, setFilter] = useState(1);
    const tasks = useSelector(state => state.taskReducer.tasks);
    
    return (
        <div>
            <br/> <br/>
            <Filter setFilter={setFilter}/>

            {
                filter==1 ? tasks.map(task => (<Task task={task} key={task.id} />))
                : filter==2 ? tasks .filter(el=>el.isDone==true)
                                    .map(task => (<Task task={task} key={task.id} />))
                : tasks .filter(el=>el.isDone==false)
                                    .map(task => (<Task task={task} key={task.id} />))
            }
        </div>
    )
}

export default TaskList;
