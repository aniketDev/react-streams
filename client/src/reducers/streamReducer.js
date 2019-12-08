import { TYPES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.paylaod.id };
    case TYPES.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case TYPES.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
