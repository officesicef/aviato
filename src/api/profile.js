
import axios from '.';

export function editProfile(bloodType, height, weight, birthday, gender, emergency) {
  return axios.post('/profile/edit', {
    bloodType,
    height,
    weight,
    birthday,
    gender,
    emergency,
  });
}
