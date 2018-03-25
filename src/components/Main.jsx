import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Categ from './Categ';
import Payment from './Payment';
import Incomes from './Incomes';


class Main extends Component {

    render () {
        let monthEarned = 0;
        let monthSpent = 0;

        const filterForDate = (item)=> {
            let date = item.date;
            let year = new Date(date).getFullYear();
            let month = new Date(date).getMonth();
            if(month === new Date(this.props.date).getMonth() &&
                year === new Date(this.props.date).getFullYear()
            ) {
                return item
            }
        }

        // this.props.categories.forEach((item)=>{
        //     item.payments.filter(filterForDate).map(item=>{
        //         return monthSpent += item.paymentAmount;
        //     })
        // })

        this.props.filtredMonth.forEach((item)=>{
            item.map(item=>{
                return monthSpent += item.paymentAmount;
            })
        })
    
        this.props.incomes.filter(filterForDate).forEach(item=>
            monthEarned += item.amount
            
        );

        return (
            <div className='app-wrapper'>
                {/* <Header /> */}
                <div className='main-content'>
                    <div className='main-content-item'>
                        <ul className='payments-container'>
                            {
                                this.props.categories.map((category, index)=>{
                                    return (
                                        <Categ key={index} index={index} categ={category} indexCat={index} date={this.props.date} monthSpent={monthSpent}/>
                                    ) 
                                })
                            }
                        </ul>
                        
                    </div>
                    <div className="main-content-item">
                        <p>Заработано за месяц: {monthEarned}</p>
                        <p>Потрачено за месяц: {monthSpent}</p>
                        <p>Баланс: {monthEarned - monthSpent}</p>
                    </div>
                    <Incomes incomes={this.props.incomes} month={this.props.date}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        incomes: state.incomes,
        categories: state.categories,
        date: state.date,
        filtredMonth: state.filtredMonth
        
    }
}

export default connect(mapStateToProps)(Main);