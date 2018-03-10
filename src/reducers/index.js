import { ADD_PAYMENT, CHANGE_PAYMENT, DELETE_PAYMENT, CHANGE_MONTH,
         ADD_INCOME, EDIT_INCOME, DELETE_INCOME } from '../const/index';
import { bake_cookie, read_cookie } from 'sfcookies';

export function reducer(state = [], action) {
    let newState = null;
    if(read_cookie('categories').categories) {
        state = read_cookie('categories');
    }
    switch (action.type) {
        case CHANGE_MONTH:
            console.log(action)      
            newState = {
                ...state,
                date: action.date
            }
            console.log(action)
            // bake_cookie('categories', newState);            
            
            return newState;
        case ADD_PAYMENT: 
            // Сашин вариант
            console.log(action) 
            newState = {
                ...state,
                categories:[
                    ...state.categories.slice(0, action.index),
                    Object.assign(
                        {},
                        state.categories[action.index],
                        {
                            payments: [
                                ...state.categories[action.index].payments,
                                action.payment
                            ]
                        } 
                    ),
                    // кривой вариант
                    // state.categories[action.index] = addPayment(state.categories[action.index], action), 
                    ...state.categories.slice(action.index+1),]
                };
            // bake_cookie('categories', newState)                
            return newState;
        case CHANGE_PAYMENT:
        
            let newPayments = state.categories[action.category].payments.filter(item=>{
                return item.id !== action.payment.id
            })
            newState = {
                ...state,
                categories: [
                    ...state.categories.slice(0,action.category),
                    state.categories[action.category] = {
                        ...state.categories[action.category],
                        payments: [...newPayments, action.payment]
                        
                    },
                    ...state.categories.slice(action.category+1),
                ]    
            }
            // bake_cookie('categories', newState)                            
            return newState
        case DELETE_PAYMENT: 
            console.log(action, state);
            newState = {
                ...state,
                date: state.date,                
                categories: [
                    ...state.categories.slice(0,action.category),
                    state.categories[action.category] = {
                        ...state.categories[action.category],
                        payments: state.categories[action.category].payments.filter(item=>{
                            return item.id !== action.id
                        })
                    },
                    ...state.categories.slice(action.category+1),
                ]  
            }
            // bake_cookie('categories', newState);  
            console.log(newState)          
            return newState;
        case ADD_INCOME: 
            newState = {
                ...state,
                incomes: [
                    ...state.incomes,
                    action.income
                ]
            }
            // bake_cookie('categories', newState);                        
            return newState
        case EDIT_INCOME:
            let newIncomes = state.incomes.filter(item=>{
                return item.id !== action.income.id
            })
            newState = {
                ...state,
                incomes: [
                    ...newIncomes, action.income
                ]
            }
            return newState
        case DELETE_INCOME: 
            newState = {
                ...state,
                incomes: state.incomes.filter(item => item.id !== action.id)
            }
            return newState
        default:
            return state;
    }
}