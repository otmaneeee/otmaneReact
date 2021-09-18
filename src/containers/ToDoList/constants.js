export const actionsType = {
    ADD_TYPE : "ADD_TYPE",
    REMOVE_ALL : "REMOVE_ALL",
    PUSH_TASKS : "PUSH_TASKS",
};

export const listMission = new Array(30).fill().map((item,index)=>(
    {id:index,text:`MISSION_${index}`}
));