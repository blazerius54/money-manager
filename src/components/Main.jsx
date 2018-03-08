import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Categ from './Categ';
import Payment from './Payment';
import Incomes from './Incomes';
import Header from './Header';
import { bindActionCreators } from 'redux';
import { changeMonth } from '../actions/index';


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

        this.props.categories.forEach((item)=>{
            item.payments.filter(filterForDate).map(item=>{
                return monthSpent += item.paymentAmount;
            })
        })
    
        this.props.incomes.filter(filterForDate).forEach(item=>
            monthEarned += item.amount
        );
        return (
            <div>
                {/* <header>
                    <Link to='/' className='header-of-app'><h2>Money Manager</h2></Link>
                    
                </header>   */}
                <Header />
                <div className='main-content'>
                    <div className='main-content-item'>
                        <ul className='payments-container'>
                            {
                                this.props.categories.map((category, index)=>{
                                    return (
                                        <Categ key={index} index={index} categ={category} indexCat={index} date={this.props.date}/>
                                    ) 
                                })
                            }
                        </ul>
                        
                    </div>
                    <div className="main-content-item">
                        {/* <input type="month"
                            defaultValue={new Date(this.props.date).getFullYear()+'-0'+(new Date(this.props.date).getMonth()+1)}
                            onChange={(e)=>this.props.changeMonth(e.target.value)}
                            /> */}
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
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ changeMonth }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);