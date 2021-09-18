import { actionsType } from "./constants";
export const addTask = (payload) =>{
    return{
        type:actionsType.ADD_TYPE,
        payload,
    };
};
export const pushTask = (payload) =>{
    return{
        type:actionsType.PUSH_TASKS,
        payload,
    };
};
export const removeTask = () =>{
    return{
        type:actionsType.REMOVE_ALL,
    };
};