
import { Map } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { HOME_ALL_USERS_ACTION } from '../consts/actions';

// CREATE ACTIONS
export const allUsers = createAction(HOME_ALL_USERS_ACTION);

// SET INITIAL STATE
const INITIAL_STATE = Map({
  users: [],
});

// WRITE HANDLERS FOR ACTIONS
export default handleActions(
  {

    [HOME_ALL_USERS_ACTION](state, { payload: { data } }) {
      return state.set("users", data);
    },

  },
  INITIAL_STATE,
);
