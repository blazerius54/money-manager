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
                                    return (
                                        <Categ key={index} index={index} categ={category} indexCat={index} month={this.props.month}/>
                                    ) 
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