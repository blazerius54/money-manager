import { INCREMENT_SPENT, ADD_PAYMENT, CHANGE_PAYMENT, DELETE_PAYMENT } from '../const/index';

export function reducer(state = [], action) {
    switch (action.type) {
        case INCREMENT_SPENT:
            // console.log('reducer', action);
            return {

                categories: [
                    ...state.categories.slice(0, action.index),
                    state.categories[action.index] = addText(state.categories[action.index], action),
                    ...state.categories.slice(action.index + 1)
                ],
            };
        case ADD_PAYMENT: 
            // console.log('reducer', action);
            // Сашин вариант 
              return {
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
            case CHANGE_PAYMENT:
                let newPayment = state.categories[action.category].payments.filter((item, index)=>{
                    return item.id === action.id
                })[0]
                let index2 = state.categories[action.category].payments.findIndex(item=>{
                    return item === newPayment
                })
                // console.log(index2)
                // console.log(action)
                return {
                    categories: [
                        ...state.categories.slice(0,action.category),
                        state.categories[action.category] = {
                            ...state.categories[action.category],
                            payments: [
                                ...state.categories[action.category].payments.slice(0, index2),
                                state.categories[action.category].payments[index2] = foo( state.categories[action.category].payments[index2], action),
                                ...state.categories[action.category].payments.slice(index2+1) 
                            ]
                        },
                        ...state.categories.slice(action.category+1),
                    ]    
                }
                // return state
            case DELETE_PAYMENT: 
                // console.log(state.categories[action.category].payments)
                return {
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
        default:
            return state;
    }
}

function foo (state = [], action) {
    // console.log(action.payment)
    // if(!action.payment.paymentText || !action.payment.paymentAmount || !action.payment.date) {
    //     return state
    // } else {
        let newState = action.payment
        return newState
    // }
}

function addPayment (state = [], action) {
    console.log('action',action)
    console.log(state)
    return Object.assign(
        [],
        state,
        {
            payments: [
                ...state.payments,
                action.payment
            ]
        }
    )
}

function addText(state = [], action) {
    // console.log(action)
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

