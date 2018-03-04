import { INCREMENT_SPENT, ADD_PAYMENT, CHANGE_PAYMENT, DELETE_PAYMENT, ADD_INCOME, CHANGE_MONTH } from '../const/index';
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
                month: action.month
            }
            console.log(newState)
            bake_cookie('categories', newState);            
            
            return newState;
        case INCREMENT_SPENT:
            newState = {
                ...state,
                categories: [
                    ...state.categories.slice(0, action.index),
                    state.categories[action.index] = addText(state.categories[action.index], action),
                    ...state.categories.slice(action.index + 1)
                ],
            };
            bake_cookie('categories', newState);            
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
            bake_cookie('categories', newState)                
            return newState;
        case CHANGE_PAYMENT:
            console.log(state);
        
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
            bake_cookie('categories', newState)                            
            return newState
        case DELETE_PAYMENT: 
            console.log(action, state);
            newState = {
                ...state,
                month: state.month,                
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
            bake_cookie('categories', newState);  
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
            bake_cookie('categories', newState);                        
            return newState
        default:
            return state;
    }
}

// function foo (state = [], action) {
//     let newState = action.payment
//     console.log(newState)
//         return newState
// }

// function addPayment (state = [], action) {
//     console.log('action',action)
//     console.log(state)
//     return Object.assign(
//         [],
//         state,
//         {
//             payments: [
//                 ...state.payments,
//                 action.payment
//             ]
//         }
//     )
// }

function addText(state = [], action) {
    // console.log(state)
    if (state.payments.length > 0) {
        let sum=0;
        sum+=action.amount;
        state.payments.forEach((item, i)=>{
            sum+=state.payments[i].paymentAmount
        })
        // sum+=action.amount
        return {
            ...state,
            spent: sum        
        }
    } else {
        return {
            ...state,
            spent: action.amount

        }
    }
}

        
// мои варианты
// let state2 = null;
// state2 = state;
// state2.categories[action.index].payments = [...state.categories[action.index].payments, action.payment]
// return state2

// console.log(state.categories[action.index].payments)
// let newState = {
//     paymentText: action.text,
//     paymentAmount: action.amount
// };
// console.log(newState)
// return {
//     categories: [
//         ...state.categories,
//         state.categories[action.index] = [
//             ...state.categories[action.index],
//             state.categories[action.index].payments = newState
//         ]
//     ]
// }  

