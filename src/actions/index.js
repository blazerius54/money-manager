import { INCREMENT_SPENT, ADD_PAYMENT, CHANGE_PAYMENT, DELETE_PAYMENT, 
        ADD_INCOME, EDIT_INCOME, CHANGE_MONTH } from '../const/index';

export const changeMonth = (month) => {
    const action = {
        type: CHANGE_MONTH,
        month
    }
    console.log(action)
    return action
}

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
    console.log(action)
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
    return action    
}

export const changePayment = (text, amount, date, category, index, id) => {
    // console.log(action)
    const action = {
        type: CHANGE_PAYMENT,
        category,
        index,
        payment: {
            paymentText: text,
            paymentAmount: Number(amount),
            date,
            id            
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

export const editIncome = (text, amount, date, index, id) => {
    const action = {
        type: EDIT_INCOME,
        index,
        income: {
            text,
            // paymentAmount: Number(amount),
            amount,
            date,
            id        
        }
    } 
    console.log(action)
    return action
}