import { INCREMENT_SPENT, ADD_PAYMENT, CHANGE_DATE } from '../const/index';

export const increment = (index, amount) => {
    const action = {
        type: INCREMENT_SPENT,
        index,
        amount,
        // categ
    }
    // console.log('action ', action)
    return action;
}

export const addPayment = (text, amount, index) => {
    const action = {
        type: ADD_PAYMENT, 
        index,
        payment: {
            paymentText: text,
            paymentAmount: amount,
            date: new Date()

        }
    }
    // console.log('action ', action)
    return action    
}

export const changeDate = (text, amount, date, category, index) => {
    const action = {
        type: CHANGE_DATE,
        category,
        index,
        payment: {
            paymentText: text,
            paymentAmount: amount,
            date,
            
        }
    }
    console.log(date)
    return action
}