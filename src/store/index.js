import { createStore } from 'redux';
import { reducer } from '../reducers/index';
import categories from '../data/categories';
import incomes from '../data/incomes';
import { date, filtredMonth } from '../data/categories';

const defaultState = {
    incomes,
    categories,
    date,
    filtredMonth 
    
};

const store = createStore(reducer, defaultState);
export default store;