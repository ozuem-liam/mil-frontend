import { combineReducers } from "redux";
import { PostReducers } from "./PostRedux/reducer";


const rootReducer = combineReducers({
    users: PostReducers,
})


export default  rootReducer