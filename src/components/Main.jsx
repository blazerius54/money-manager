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
                // let date = item.date;
                // // let date2 = new Date(date).getFullYear() + ' ' + new Date(date).getMonth()
                // // console.log(date2)
                // let year = new Date(date).getFullYear();
                // let month = new Date(date).getMonth();

                // // console.log(new Date(this.props.month).getMonth())
                // console.log(month)
                // if(month === new Date(this.props.month).getMonth()){
                //     return item
                // }
            }).map(item=>{
                return monthSpent += item.paymentAmount;
            })
        })
    
        this.props.incomes.filter(item=>{
            let date = item.date;
            date = new Date(date).getMonth();
                if(date === this.props.month){
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
                                        <Categ key={index} index={index} categ={category} indexCat={index} date={this.props.date}/>
                                    ) 
                                })
                            }
                        </ul>
                        
                    </div>
                    <div className="main-content-item">
                        {/* <select name="" id="" 
                            onChange={(e)=>this.setState({month: Number(e.target.value)})}
                            defaultValue={this.state.month}>
                            <option value="0">Январь</option>
                            <option value="1">Февраль</option>
                            <option value="2">Март</option>
                        </select> */}
                        <select name="" id="" 
                            onChange={(e)=>this.props.changeMonth(Number(e.target.value))}
                            defaultValue={new Date(this.props.month).getMonth()}>
                            <option value="0">Январь</option>
                            <option value="1">Февраль</option>
                            <option value="2">Март</option>
                            <option value="3">Апрель</option>
                        </select>
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
        month: state.month,
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ changeMonth }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);