import { ADD_TASK, DELETE_TASK, EDIT_TASK, STATUS_TASK } from "../constants/task"

export const addTask = (newTask) => {
    return {type: ADD_TASK, payload: newTask};
};
export const deleteTask = (id) => {
    return{type: DELETE_TASK, payload: id}
}
export const editTask = (id,description) => {
    return{type: EDIT_TASK, payload: {id, description}}
}
export const statusTask = (id) => {
    return{type: STATUS_TASK, payload: id}
}