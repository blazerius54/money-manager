import { CHANGE_MONTH, ADD_PAYMENT, CHANGE_PAYMENT, DELETE_PAYMENT, 
        ADD_INCOME, EDIT_INCOME, DELETE_INCOME } from '../const/index';

export const changeMonth = (date) => {
    if(isNaN(new Date(date).getMonth()) ) {
        date = new Date(Date.now()).getFullYear()+'-01';
    } 
    const action = {
        type: CHANGE_MONTH,
        date
    }
    console.log(action)
    return action
}

export const addPayment = (text, amount, index) => {
    const action = {
        type: ADD_PAYMENT, 
        category: index,
        payment: {
            id: Math.random(),
            paymentText: text,
            paymentAmount: Number(amount),
            date: new Date()

        }
    }
    return action    
}

export const changePayment = (obj, category) => {
    const action = {
        type: CHANGE_PAYMENT,
        category,
        obj       
    }
    return action
}

export const deletePayment = (id, category) => {
    const action = {
        type: DELETE_PAYMENT,
        id,
        category
    }
    return action
}

export const addIncome = (text, amount) => {
    const action = {
        type: ADD_INCOME,
        income: {
            id: Math.random(),
            text,
            amount: Number(amount),
            date: new Date()
        }    
    }
    return action
}

export const editIncome = (text, amount, date, id) => {
    const action = {
        type: EDIT_INCOME,
        obj: {
            id,        
            text,
            amount: Number(amount),
            date
        }
    }
    return action
}

export const deleteIncome = (id) => {
    const action = {
        type: DELETE_INCOME,
        id
    }
    return action
}