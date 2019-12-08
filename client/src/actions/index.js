import { TYPES } from './types';
import streams from '../apis/streams';
import { types } from '@babel/core';

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
  const response = await streams.post('/streams', formValues);

  dispatch({ type: TYPES.CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: TYPES.FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: TYPES.FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: TYPES.EDIT_STREAM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  const response = await streams.delete(`/streams/${id}`);

  dispatch({ type: TYPES.DELETE_STREAM, payload: id });
};
