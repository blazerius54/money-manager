const categories = [
    {   
        path: 'food',
        name :"Еда",
        spent : 0,
        payments: [
            {
                categoryName: 'food',
                paymentText: 'Молоко',
                paymentAmount: 35,
                date: 'Fri Jan 23 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            },
            {
                categoryName: 'food',
                paymentText: 'Мясо',
                paymentAmount: 50,
                date: 'Fri Feb 20 2018 14:33:19 GMT+0700 (RTZ 6 (зима))'
            },
            {
                categoryName: 'food',
                paymentText: 'Фрукты',
                paymentAmount: 45,
                date: 'Fri Feb 16 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            },
            {
                categoryName: 'food',   
                paymentText: 'Картошка',
                paymentAmount: 130,
                date: 'Fri Mar 29 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            },
            {
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
                categoryName: 'apartment',
                paymentText: 'Вода',
                paymentAmount: 50,
                date: 'Fri Jan 9 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            },
            {   
                categoryName: 'apartment',
                paymentText: 'Отопление',
                paymentAmount: 25,
                date: 'Fri Feb 10 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            },
            {   
                categoryName: 'apartment',
                paymentText: 'Ремонт',
                paymentAmount: 100,
                date: 'Fri Mar 10 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            }, 
            {   
                categoryName: 'apartment',
                paymentText: 'Интернет',
                paymentAmount: 60,
                date: 'Fri Mar 29 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            }, 
            
        ]
    }
]

export default categories; 