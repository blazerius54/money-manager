import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Categ from './Categ';
import Payment from './Payment';
import Incomes from './Incomes';
import { bindActionCreators } from 'redux';
import { changeMonth } from '../actions/index';

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            month: new Date(Date.now()).getMonth(),
            isVisible: true
        }
    }

    render () {

        let monthEarned = 0;
        let monthSpent = 0;

        this.props.categories.forEach((item)=>{
            item.payments.filter(item=>{
                let date = item.date;
                let year = new Date(date).getFullYear();
                let month = new Date(date).getMonth();
                if(month === new Date(this.props.month).getMonth() &&
                    year === new Date(this.props.month).getFullYear()
                ) {
                    return item
                }
            }).map(item=>{
                return monthSpent += item.paymentAmount;
            })
        })
    
        this.props.incomes.filter(item=>{
            let date = item.date;
            let year = new Date(date).getFullYear();
            let month = new Date(date).getMonth();
            if(month === new Date(this.props.month).getMonth() &&
                year === new Date(this.props.month).getFullYear()
            ) {
                return item
            }
            }).forEach(item=>monthEarned += item.amount);
        return (
            <div>
                <header>
                </header>  
                <div className='main-content'>
                    <div className='main-content-item'>
                        <ul className='payments-container'>
                            {
                                this.props.categories.map((category, index)=>{
                                    return (
                                        <Categ key={index} index={index} categ={category} indexCat={index} date={this.props.month}/>
                                    ) 
                                })
                            }
                        </ul>
                        
                    </div>
                    <div className="main-content-item">
                        <input type="month"
                            defaultValue={new Date(this.props.month).getFullYear()+'-0'+(new Date(this.props.month).getMonth()+1)}
                            onChange={(e)=>this.props.changeMonth(e.target.value)}
                            />
                        <p>Заработано за месяц: {monthEarned}</p>
                        <p>Потрачено за месяц: {monthSpent}</p>
                        <p>Баланс: {monthEarned - monthSpent}</p>
                    </div>
                        <div className='main-content-item'>
                            <Incomes incomes={this.props.incomes} month={this.props.month}/>
                        </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        incomes: state.incomes,
        categories: state.categories,
        month: state.date,
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ changeMonth }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);