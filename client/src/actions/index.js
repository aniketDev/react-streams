import { TYPES } from './types';
import streams from '../apis/streams';

export const signIn = userId => {
  return {
    type: TYPES.SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: TYPES.SIGN_OUT
  };
};

export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues);
};
