import { actionsType } from "./constants";
export const addTask = (payload) =>{
    return{
        type:actionsType.ADD_TYPE,
        payload,
    };
};
export const removeTask = () =>{
    return{
        type:actionsType.REMOVE_ALL,
    };
};