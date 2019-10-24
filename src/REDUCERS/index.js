import {combineReducers} from "redux";
import miniPackageReducer from "./minipackage";

const rootReducer = combineReducers({
    miniPackage: miniPackageReducer
  });
  
export default rootReducer;