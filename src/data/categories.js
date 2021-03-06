export let date = new Date(Date.now());


let categories = [
    {
        path: 'food',
        name: "Продукты",
        // spent : 0,
        payments: [
            // {   
            //     id: 0,
            //     categoryName: 'food',
            //     paymentText: 'Молоко',
            //     paymentAmount: 35,
            //     date: 'Fri Jan 23 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            // },
            // {   
            //     id: 1,
            //     categoryName: 'food',
            //     paymentText: 'Мясо',
            //     paymentAmount: 50,
            //     date: 'Fri Feb 20 2018 14:33:19 GMT+0700 (RTZ 6 (зима))'
            // },
            // {   
            //     id: 2,
            //     categoryName: 'food',
            //     paymentText: 'Фрукты',
            //     paymentAmount: 45,
            //     date: 'Fri Feb 16 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            // },
            // {   
            //     id: 3,
            //     categoryName: 'food',   
            //     paymentText: 'Картошка',
            //     paymentAmount: 130,
            //     date: 'Fri Mar 29 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            // },
            // {   
            //     id: 4,
            //     categoryName: 'food',   
            //     paymentText: 'Печенье',
            //     paymentAmount: 10,
            //     date: 'Fri Mar 25 2017 11:10:19 GMT+0700 (RTZ 6 (зима))'
            // },
            // {   
            //     id: 5,
            //     categoryName: 'food',   
            //     paymentText: 'Печенье',
            //     paymentAmount: 2,
            //     date: 'Fri Mar 25 2018 11:10:19 GMT+0700 (RTZ 6 (зима))'
            // }
        ]
    },
    {
        path: 'apartment',
        name: "Дом",
        // spent : 0,
        // text: 'text',
        payments: [
            // {   
            //     id: 5,   
            //     categoryName: 'apartment',
            //     paymentText: 'Вода',
            //     paymentAmount: 50,
            //     date: 'Fri Jan 9 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            // },
            // {   
            //     id: 6,   
            //     categoryName: 'apartment',
            //     paymentText: 'Отопление',
            //     paymentAmount: 25,
            //     date: 'Fri Feb 10 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            // },
            // {   
            //     id: 7,   
            //     categoryName: 'apartment',
            //     paymentText: 'Ремонт',
            //     paymentAmount: 100,
            //     date: 'Fri Mar 10 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            // }, 
            // {   
            //     id: 8,   
            //     categoryName: 'apartment',
            //     paymentText: 'Интернет',
            //     paymentAmount: 60,
            //     date: 'Fri Mar 29 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            // }, 

        ]
    },
    {
        path: 'car',
        name: "Машина",
        // spent : 0,
        // text: 'text',
        payments: [
            // {   
            //     id: 9,   
            //     categoryName: 'car',
            //     paymentText: 'Бензин',
            //     paymentAmount: 50,
            //     date: 'Jan 5 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            // },
            // {   
            //     id: 10,   
            //     categoryName: 'car',
            //     paymentText: 'Дворник',
            //     paymentAmount: 25,
            //     date: 'Feb 15 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            // },
            // {   
            //     id: 11,   
            //     categoryName: 'car',
            //     paymentText: 'Ремень генератора',
            //     paymentAmount: 100,
            //     date: 'Mar 2 2018 11:00:19 GMT+0700 (RTZ 6 (зима))'
            // }, 


        ]
    },
    {
        path: 'wear',
        name: "Одежда",
        payments: []
    },
    {
        path: 'relations',
        name: "Связь",
        payments: []
    },
    {
        path: 'health',
        name: "Здоровье",
        payments: []
    },
    {
        path: 'presents',
        name: "Подарки",
        payments: []
    },
    {
        path: 'transport',
        name: "Транспорт",
        payments: []
    },
    {
        path: 'other',
        name: "Прочее",
        payments: []
    },
]

export default categories;

export let filtredMonth = categories.map(item => {
    return item.payments.filter(item => {
        let date2 = item.date;
        let year = new Date(date2).getFullYear();
        let month = new Date(date2).getMonth();
        if (month === new Date(date).getMonth() &&
            year === new Date(date).getFullYear()
        ) {
            return item
        } else {
            return null
        }
    })
})