import { createStore } from "redux";
import rootReducer from "./reducers";

function configureStore(state = { bgColor: "black", activeColor: "info" }) {
    return createStore(rootReducer,state);
};

export default configureStore;