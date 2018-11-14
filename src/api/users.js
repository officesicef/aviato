
import axios from '.';

export function getUsers() {
  return axios.get('/users');
}
