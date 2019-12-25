import {CHANGE_BG_COLOR, CHANGE_COLOR} from "../utils/constants";

export const setBgColorAction = (payload) => {
    return {
      type: CHANGE_BG_COLOR,
      payload
    }
};

export const setColorAction = (payload) => {
    return {
      type: CHANGE_COLOR,
      payload
    }
};