import { createStore } from 'redux';
import { reducer } from '../reducers/index';
import categories from '../data/index';

const defaultState = {
    categories
  };

const store = createStore(reducer, defaultState);

export default store;