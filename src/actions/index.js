import { INCREMENT_SPENT, ADD_PAYMENT } from '../const/index';

export const increment = (categ, index) => {
    const action = {
        type: INCREMENT_SPENT,
        categ,
        index,
        text: 'new',
    }
    console.log('action ', action)
    return action;
}

export const addPayment = (text, amount, index) => {
    const action = {
        type: ADD_PAYMENT,
        text,
        amount, 
        index
    }
    console.log('action ', action)
    return action    
}