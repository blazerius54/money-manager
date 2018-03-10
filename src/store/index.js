import { createStore } from 'redux';
import { reducer } from '../reducers/index';
import categories from '../data/categories';
import incomes from '../data/incomes';
import { date } from '../data/categories';

const defaultState = {
    incomes,
    categories,
    date
};

const store = createStore(reducer, defaultState);
export default store;