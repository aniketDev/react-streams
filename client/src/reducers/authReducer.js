import { TYPES } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SIGN_IN:
      return { ...state, isSignedIn: true };
    case TYPES.SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
