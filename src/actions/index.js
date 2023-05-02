import { CHANGE_BG_COLOR, CHANGE_COLOR } from "../utils/constants";
const setBgColorAction = (payload) => {
  return {
    type: CHANGE_BG_COLOR,
    payload,
  };
};

const setColorAction = (payload) => {
  return {
    type: CHANGE_COLOR,
    payload,
  };
};

export { setBgColorAction, setColorAction };
