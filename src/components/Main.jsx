import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categ from './Categ';
import Incomes from './Incomes';
import Modal from './Modal'

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isModalVisible: false,
        }
    }

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
                    <div className='main-content-item main-payments'>
                    <p className='title'>Расходы:</p>
                        <ul className='payments-container make-scroll'>
                            {
                                this.props.categories.map((category, index)=>{
                                    return (
                                        <Categ key={index} index={index} categ={category} indexCat={index} date={this.props.date} monthSpent={monthSpent}/>
                                    ) 
                                })
                            }
                        </ul>
                        
                    </div>
                    <div className="main-content-item main-balance">
                        <p className='text'>Баланс:</p> <p className='number'>{monthEarned - monthSpent} &#8381;</p>
                        <p className='text'>Заработано за месяц:</p> <p className='number'>{monthEarned} &#8381;</p>
                        <p className='text'>Потрачено за месяц:</p> <p className='number'>{monthSpent} &#8381;</p>
                    </div>
                    <Incomes incomes={this.props.incomes} month={this.props.date}/>
                </div>
                <Modal />
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