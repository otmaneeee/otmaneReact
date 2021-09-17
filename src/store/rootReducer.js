import { combineReducers } from "redux";
import todoReducer from "../containers/ToDoList/reducer";

export default combineReducers({
  tasksState: todoReducer,
});
