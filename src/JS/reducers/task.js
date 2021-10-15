import {ADD_TASK, DELETE_TASK, EDIT_TASK, STATUS_TASK} from'../constants/task.js'

const intialState={
    tasks:[ {id:Math.random(), description: "1st task", isDone: false},
            {id:Math.random(), description: "2nd task", isDone: false},
            {id:Math.random(), description: "3rd task", isDone: false},
            {id:Math.random(), description: "4th task", isDone: false},
            {id:Math.random(), description: "5th task", isDone: false},
            {id:Math.random(), description: "6th task", isDone: false},
            {id:Math.random(), description: "7th task", isDone: false},],
};


const taskReducer = (state=intialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]};
        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter( el => el.id != action.payload)};
        case EDIT_TASK:
            return {...state, tasks: state.tasks.map((el) => el.id==action.payload.id ? {...el, description: action.payload.description} : el) };
        case STATUS_TASK:
            return {...state, tasks: state.tasks.map((el) => el.id==action.payload ? {...el, isDone: !el.isDone} : el) };
        default:
            return state;
    }
};


export default taskReducer;