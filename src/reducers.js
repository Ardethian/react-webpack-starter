import { initialState } from './store';
import { TYPES } from './actions';

export const text = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CHANGE_TEXT:
      return { ...state, text: action.text };
    default:
      return state;
  }
};