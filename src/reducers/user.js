import { USER_GET_SUCCESS, PRESCRIPTION_GET_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_GET_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    case PRESCRIPTION_GET_SUCCESS:
      return {
        ...state,
        prescriptions: action.payload.prescriptions,
      }
    default:
      return state;
  }
};
