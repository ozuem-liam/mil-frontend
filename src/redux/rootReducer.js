import { combineReducers } from "redux";
import { UserReducers } from "./UserRedux/reducer";


const rootReducer = combineReducers({
    users: UserReducers,
})


export default  rootReducer