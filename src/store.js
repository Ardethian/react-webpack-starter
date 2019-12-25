import { createStore } from 'redux';
import { text } from './reducers';

export const initialState = {
	text: 'Some text'
};

export const store = createStore(text);
