import { createStore } from 'redux';
import { reducer } from '../reducers/index';
import categories from '../data/categories';
import incomes from '../data/incomes';
import {month} from '../data/categories';

const defaultState = {
    incomes: incomes,
    categories,
    month
};

const store = createStore(reducer, defaultState);
export default store;