import { INCREMENT_SPENT, ADD_PAYMENT } from '../const/index';

export function reducer(state = [], action) {
    let newState = null;
    switch (action.type) {
        case INCREMENT_SPENT:
            console.log('reducer', action);
            return {

                categories: [
                    ...state.categories.slice(0, action.index),
                    state.categories[action.index] = addText(action.categ, action),
                    ...state.categories.slice(action.index + 1)
                ],
            };
        case ADD_PAYMENT: 
            // console.log('reducer', action);
            let newState = {
                paymentText: action.text,
                paymentAmount: action.amount
            };
            // let state2 = null;
            // console.log(...state.categories[action.index].payments, {newState})
            //     state2 = state;
            //     state2.categories[action.index].payments = [...state2.categories[action.index].payments, {paymentText: action.text,
            //         paymentAmount: action.amount}]
                
            //     return state2
            let state2 = {
                categories: [
                  ...state.categories,
                  state.categories[action.index] = {
                    ...state.categories[action.index],
                    payments: [
                      ...state.categories[action.index].payments,
                      newState
                    ]
                  }
      
                ]
              } 
              return state
        default:
            return state;
    }
}

function addPayment (state = [], action) {
    console.log(state)
    // let xx = null;
    // let newState = {
        // };
        // console.log(newState)
        return {
            paymentText: action.text,
            paymentAmount: action.amount
            }
    
}

function addText(state = [], action) {
    console.log(state)
    if (state.payments.length > 1) {
        let sum=0;
        state.payments.forEach((item, i)=>{
            sum+=state.payments[i].paymentAmount
        })
        return {
            ...state,
            spent: sum        
        }
    } else {
        return {
            ...state,
            spent: state.payments[0].paymentAmount

        }
    }
}


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