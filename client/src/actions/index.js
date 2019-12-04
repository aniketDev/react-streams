import { TYPES } from './types';

export const signIn = () => {
  return {
    type: TYPES.SIGN_IN
  };
};

export const signOut = () => {
  return {
    type: TYPES.SIGN_OUT
  };
};
