const categories = [
    {   
        path: 'food',
        name :"Еда",
        spent : 0,
        payments: [
            {   
                id: 0,
                categoryName: 'food',
                paymentText: 'Молоко',
                paymentAmount: 35,
                date: 'Fri Jan 23 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            },
            {   
                id: 1,
                categoryName: 'food',
                paymentText: 'Мясо',
                paymentAmount: 50,
                date: 'Fri Feb 20 2018 14:33:19 GMT+0700 (RTZ 6 (зима))'
            },
            {   
                id: 2,
                categoryName: 'food',
                paymentText: 'Фрукты',
                paymentAmount: 45,
                date: 'Fri Feb 16 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            },
            {   
                id: 3,
                categoryName: 'food',   
                paymentText: 'Картошка',
                paymentAmount: 130,
                date: 'Fri Mar 29 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            },
            {   
                id: 4,
                categoryName: 'food',   
                paymentText: 'Печенье',
                paymentAmount: 10,
                date: 'Fri Mar 25 2018 11:10:19 GMT+0700 (RTZ 6 (зима))'
            }
        ]
    },
    {   
        path: 'apartment',
        name :"Квартира",
        spent : 0,
        text: 'text',
        payments: [
            {   
                id: 5,   
                categoryName: 'apartment',
                paymentText: 'Вода',
                paymentAmount: 50,
                date: 'Fri Jan 9 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            },
            {   
                id: 6,   
                categoryName: 'apartment',
                paymentText: 'Отопление',
                paymentAmount: 25,
                date: 'Fri Feb 10 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            },
            {   
                id: 7,   
                categoryName: 'apartment',
                paymentText: 'Ремонт',
                paymentAmount: 100,
                date: 'Fri Mar 10 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            }, 
            {   
                id: 8,   
                categoryName: 'apartment',
                paymentText: 'Интернет',
                paymentAmount: 60,
                date: 'Fri Mar 29 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            }, 
            
        ]
    }
]

export default categories; 