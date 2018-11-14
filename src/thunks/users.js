
import { allUsers } from '../reducers/users';
import { getUsers as getUsersApi } from '../api/users';

export function getUsers() {
  return dispatch => getUsersApi()
    .then((response) => {
      const { data } = response;
      
      return {
        data,
      };
    })
    .then(({ data }) => {
      dispatch(allUsers(data));
    });
}
