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
            // bake_cookie('categories', newState);            
            
            return newState;
        case ADD_PAYMENT: 
        case DELETE_PAYMENT:
        case CHANGE_PAYMENT:
            return {
                ...state, 
                categories: [
                    ...state.categories.slice(0,action.category),
                    state.categories[action.category] =  newCateg(state.categories[action.category], action),
                    ...state.categories.slice(action.category+1),]
            }
        case ADD_INCOME: 
            newState = {
                ...state,
                incomes: addSome(state.incomes, action.income)
            }
            // bake_cookie('categories', newState);                        
            return newState
        case EDIT_INCOME:
        return {
            ...state,
            incomes: changeSome(state.incomes, action)
        }
            // let newIncomes = state.incomes.filter(item=>{
            //     return item.id !== action.income.id
            // })
            // let newIncomes = state.incomes.filter(item=>{
            //     return item.id !== action.income.id
            // })
            // newState = {
            //     ...state,
            //     incomes: [
            //         ...newIncomes, action.income
            //     ]
            // }
            // return newState
        case DELETE_INCOME: 
            newState = {
                ...state,
                incomes: deleteSome(state.incomes, action.id)
            }
            return newState
        default:
            return state;
    }
}

function deleteSome (state, id) {
    if (state.payments) {
        //для расходов
        return {
            ...state, 
            payments: state.payments.filter(item => item.id !== id) 
        }
    } else {
      //вариант для доходов
      return state.filter(item => item.id !== id);
    }
}

function addSome (state, obj) {
    let newState = state.payments || state;    
    if (state.payments) {
        //для расходов
        return {
            ...state, 
            payments: [...state.payments, obj]
        }
    } else {
      //вариант для доходов
      return [...newState, obj]
    }
}

function changeSome(state, action) {
    if(state.payments )
    {let newState = state.payments || state;
    // return state
    return {
        ...state,
        payments: [
            ...newState.filter(item => item.id !== action.obj.id), 
            action.obj
        ]
    }} else {
        let newIncomes = state.filter(item=>{
            return item.id !== action.obj.id
        })
        console.log(newIncomes)
        return [
                ...newIncomes, action.obj
            ]
        
    }      
}

function newCateg (state, action) {
    switch(action.type) {
        case DELETE_PAYMENT:
            return deleteSome(state, action.id)
        case ADD_PAYMENT: 
            return addSome(state, action.payment)
        case CHANGE_PAYMENT:
            return changeSome(state, action)
        default:
            return state
    }
}