import { CHANGE_BG_COLOR, CHANGE_COLOR } from "../utils/constants";
const reduce = (state, action) => {
  switch (action.type) {
    case CHANGE_BG_COLOR:
      return {
        ...state,
        bgColor: action.payload,
      };
    case CHANGE_COLOR:
      return {
        ...state,
        activeColor: action.payload,
      };
    default:
      return state;
  }
};

export default reduce;
