import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categ from './Categ';
import Payment from './Payment';
import Income from './Income';
import { bindActionCreators } from 'redux';
import { changeMonth } from '../actions/index';

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            month: new Date(Date.now()).getMonth(),
        }
    }

    componentDidMount () {
        let arr = [];

        arr = this.props.categories.map((item, index) => {
           return item.payments.sort((a, b) => {
                let date1 = new Date(a.date);
                let date2 = new Date(b.date);
                return date1 - date2;
            })
        });

        this.setState({
            payments: arr
        })
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
                // return item2
                return item}
            }).forEach(item=>monthEarned += item.amount);

        return (
            <div>

                <h2>I`m Main</h2>
                <header>
                    <ul className='categ-container'>
                    {
                        this.props.categories.map((categ, index) => {
                            return (
                                <Categ key={index} index={index} categ={categ} {...this.props} month={this.props.month} />
                            )
                        })
                    }
                    </ul>
                    {/* <p>{totalSpent}</p> */}

                </header>  
                <div className='main-content'>
                    <div>
                        <ul className='payments-container'>
                            {
    
                                this.props.categories.map((item2, index)=>{
                                    let prevCat = '';
                                    return item2.payments.filter(item=>{
                                        let date = item.date;
                                        date = new Date(date).getMonth();
                                        if(date === this.props.month){
                                            // return item2
                                            return item
                                        }
                                    }).map((item, i)=>{
                                        monthSpent+=item.paymentAmount;
                                        if(prevCat !== item2.name) {
                                            prevCat = item2.name;
                                            return (
                                                <div key={i}>
                                                    <p>{item2.name}</p>
                                                    <Payment  item={item} index={index} i={i} {...this.props}/>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <Payment key={i} item={item} index={index} i={i} {...this.props}/>
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
                        </select>
                        <p>Потрачено за месяц: {monthSpent}</p>
                        <p>Заработано за месяц: {monthEarned}</p>
                    </div>
                    <Income incomes={this.props.incomes} month={this.props.month}/>

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