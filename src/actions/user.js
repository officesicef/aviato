import { getUserInformationApi, getUserPrescriptionsApi } from '../api/user';
import { USER_GET_SUCCESS, PRESCRIPTION_GET_SUCCESS } from './types';

export const getUserInformation = () => dispatch => getUserInformationApi()
  .then((value) => {
    const { data } = value.data;
    dispatch({ type: USER_GET_SUCCESS, payload: { user: data } });
});

export const getUserPrescriptions = () => dispatch => getUserPrescriptionsApi()
  .then((value) => {
    const { data } = value.data;
    dispatch({ type: PRESCRIPTION_GET_SUCCESS, payload: { prescriptions: data } });
});
