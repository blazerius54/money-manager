import { INCREMENT_SPENT, ADD_PAYMENT, CHANGE_PAYMENT, DELETE_PAYMENT, ADD_INCOME } from '../const/index';

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
    // console.log('action ', action)
    
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

export const addIncome = (payment) => {
    const action = {
        type: ADD_INCOME,
        income: {
            id: Math.random(),
            incomeText: payment.text,
            incomeAmount: payment.amount,
            date: new Date()
        }    
    }
    console.log(action)
    return action
}