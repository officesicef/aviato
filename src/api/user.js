
import axios from '.';

export function getUserInformationApi() {
  return axios.get('/auth/self');
}

export function getUserPrescriptionsApi() {
  return axios.get('/profile/prescriptions');
}

export function getUserNextExamination() {
  return axios.get('profile/upcoming-examination');
}
export function postMeasurementsApi(pressure, temperature, sugar) {
  return axios.post('/measurements', {
    sugar,
    temperature,
    pressure,
  });
}