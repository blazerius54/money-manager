import { INCREMENT_SPENT, ADD_PAYMENT, CHANGE_PAYMENT, DELETE_PAYMENT } from '../const/index';

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
            id: Math.random(),
            paymentText: text,
            paymentAmount: amount,
            date: new Date()

        }
    }
    // console.log('action ', action)
    return action    
}

export const changePayment = (text, amount, date, category, index, id) => {
    // console.log(action)
    const action = {
        type: CHANGE_PAYMENT,
        category,
        index,
        id,
        payment: {
            paymentText: text,
            paymentAmount: amount,
            date,
            id: Math.random()            
        }
    }
    return action
}

export const deletePayment = (id, category) => {
    const action = {
        type: DELETE_PAYMENT,
        id,
        category

    }
    // console.log(action.id)
    return action
}