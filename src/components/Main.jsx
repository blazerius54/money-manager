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
        }
    }

    render () {

        // let totalSpent = 0;
        // this.props.categories.forEach((item)=>{
        //     totalSpent+=item.spent;
        // })
    
        let monthSpent = 0;
        let monthEarned = 0;
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
                    <div>
                        <ul className='payments-container'>
                            {
                                this.props.categories.map((category, index)=>{
                                    let prevCat = '';
                                    let categoryMonthSpent = 0; 
                                    return category.payments.filter(item=>{
                                        let date = item.date;
                                        date = new Date(date).getMonth();
                                        if(date === this.props.month){
                                            return item
                                        }
                                    }).sort((a, b) => {
                                        let date1 = new Date(a.date);
                                        let date2 = new Date(b.date);
                                        return date1 - date2;
                                    }).map((item, i)=>{
                                        monthSpent+=item.paymentAmount;
                                        categoryMonthSpent+=item.paymentAmount;
                                        if(prevCat !== category.name) {
                                            prevCat = category.name;
                                            return (
                                                <div key={i}>
                                                    <p>{category.name}</p>
                                                    <Payment  item={item} index={index} i={i} category={category} {...this.props}/>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <Payment key={i} item={item} index={index} i={i} category={category} {...this.props}/>
                                            )
                                        }
                                    })
                                })
                            }
                        </ul>
                        
                    </div>
                    <div className="month-spent">
                        {/* <select name="" id="" 
                            onChange={(e)=>this.setState({month: Number(e.target.value)})}
                            defaultValue={this.state.month}>
                            <option value="0">Январь</option>
                            <option value="1">Февраль</option>
                            <option value="2">Март</option>
                        </select> */}
                        <select name="" id="" 
                            onChange={(e)=>this.props.changeMonth(Number(e.target.value))}
                            defaultValue={this.props.month}>
                            <option value="0">Январь</option>
                            <option value="1">Февраль</option>
                            <option value="2">Март</option>
                            <option value="3">Апрель</option>
                        </select>
                        <p>Заработано за месяц: {monthEarned}</p>
                        <p>Потрачено за месяц: {monthSpent}</p>
                        <p>Баланс: {monthEarned - monthSpent}</p>
                    </div>
                    <Incomes incomes={this.props.incomes} month={this.props.month}/>

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