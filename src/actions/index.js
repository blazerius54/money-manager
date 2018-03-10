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
        index,
        payment: {
            id: Math.random(),
            paymentText: text,
            paymentAmount: Number(amount),
            date: new Date()

        }
    }
    console.log(action)
    return action    
}

export const changePayment = (text, amount, date, category, id) => {
    const action = {
        type: CHANGE_PAYMENT,
        category,
        payment: {
            paymentText: text,
            paymentAmount: Number(amount),
            date,
            id            
        }
    }
    console.log(action)
    
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
    console.log(action)
    return action
}

export const editIncome = (text, amount, date, id) => {
    const action = {
        type: EDIT_INCOME,
        income: {
            id,        
            text,
            amount: Number(amount),
            date
        }
    } 
    console.log(action)
    return action
}

export const deleteIncome = (id) => {
    const action = {
        type: DELETE_INCOME,
        id
    }
    return action
}