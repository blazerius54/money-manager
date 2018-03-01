import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categ from './Categ';
import Payment from './Payment';
import Incomes from './Incomes';

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            month: new Date(Date.now()).getMonth(),
            // categories: []
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


    
    changeMonth (e) {
        this.setState({
            month: Number(e.target.value),
        })
    }

    render () {

        let totalSpent = 0;
        this.props.categories.forEach((item)=>{
            totalSpent+=item.spent;
        })
    
        let monthSpent = 0;

        return (
            <div>

                <h2>I`m Main</h2>
                <div>
                    <ul className='categ-container'>
                    {
                        this.props.categories.map((categ, index) => {
                            return (
                                <Categ key={index} index={index} categ={categ} {...this.props} />
                            )
                        })
                    }
                    </ul>
                    <p>{totalSpent}</p>

                </div>  
                <div>
                    <ul className='payments-container'>
                        {

                            this.props.categories.map((item2, index)=>{
                                let prevCat = '';
                                return item2.payments.filter(item=>{
                                    let date = item.date;
                                    date = new Date(date).getMonth();
                                    if(date === this.state.month){
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
                    <select name="" id="" onChange={(e)=>this.changeMonth(e)} defaultValue={this.state.month}>
                        <option value="0">Январь</option>
                        <option value="1">Февраль</option>
                        <option value="2">Март</option>
                    </select>
                    <p>Потрачено за месяц: {monthSpent}</p>
                </div>
                <div>
                    <ul className='payments-container'>
                        {
                            this.props.incomes.map((item, index)=>{
                                return (
                                    <Incomes key={index} item={item} {...this.props}/>
                                    // <li className='payment-container' key={index}>
                                        
                                    //     <div>
                                    //         <p>{item.paymentText}: {item.paymentAmount}</p>
                                    //     </div>
                                    // </li>  
                                    
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    console.log(state)
    return {
        incomes: state.incomes,
        categories: state.categories,
    }
}

export default connect(mapStateToProps)(Main);