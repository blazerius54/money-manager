import { createStore } from 'redux';
import { reducer } from '../reducers/index';
import categories from '../data/categories';
import incomes from '../data/incomes';

const defaultState = {
    incomes: incomes,
    categories,
};
console.log(defaultState)

const store = createStore(reducer, defaultState);
export default store;