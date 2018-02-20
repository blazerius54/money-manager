import { INCREMENT_SPENT, ADD_PAYMENT, CHANGE_DATE } from '../const/index';

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
            console.log('reducer', action);
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
            case CHANGE_DATE:
                    // console.log(state.categories[action.category])
                return {
                    categories: [
                        ...state.categories.slice(0,action.category),
                        state.categories[action.category] = {
                            ...state.categories[action.category],
                            payments: [
                                ...state.categories[action.category].payments.slice(0, action.index),
                                state.categories[action.category].payments[action.index] = 
                                // {
                                //         categoryName: 'apartment',
                                //         paymentText: action.paymentText,
                                //         paymentAmount: action.paymentAmount,
                                //         date: action.date
                                    
                                // }, 
                                action.payment,
                                ...state.categories[action.category].payments.slice(action.index+1) 
                            ]
                        },
                        ...state.categories.slice(action.category+1),
                    ]    
                }
        default:
            return state;
    }
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

