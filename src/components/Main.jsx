import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categ from './Categ';
import Payment from './Payment';

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            month: 0,
            payments: []
        }
    }



    componentDidMount () {
        let arr = [];

        this.props.categories.forEach((item, index) => {
            item.payments.sort((a, b) => {
                let date1 = new Date(a.date);
                let date2 = new Date(b.date);
                return date1 - date2;
            }).forEach((payment, i) => {
                arr.push(payment);
            });
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
        let totalSpent = this.props.categories.reduce((a, b)=>{
            return a.spent + b.spent
        })
        
        let monthSpent = 0;
        let prevCat = '';

        return (
            <div>

                <h2>I`m Main</h2>
                {
                    this.props.categories.map((categ, index) => {
                        return (
                            <Categ key={index} index={index} categ={categ} {...this.props} />
                        )
                    })
                }

                <p>{totalSpent}</p>

                <div>
                    <ul className='payments-container'>
                        {
                            this.state.payments.filter((item, index) => {
                                // console.log(date.getMonth())
                                let date = item.date;
                                date = new Date(date).getMonth();
                                return date === this.state.month;
                            }).map((item, index) => {
                                monthSpent+=item.paymentAmount;
                                if(prevCat === item.categoryName) {
                                    // console.log('Старая категория')
                                    prevCat = item.categoryName
                                    return (
                                        <Payment key={index} item={item} {...this.props} />                                            
                                    )
                                } else if (prevCat!==item.categoryName){
                                    // console.log(prevCat)
                                    prevCat = item.categoryName
                                    // console.log(prevCat)
                                    return (
                                        <div key={index}>
                                        <p>{item.categoryName}</p>
                                        <Payment  item={item} {...this.props} />  </div>                                          
                                    )
                                }
                            })
                        }
                    </ul>
                    <select name="" id="" onChange={(e)=>this.changeMonth(e)}>
                        <option value="0">Январь</option>
                        <option value="1">Февраль</option>
                        <option value="2">Март</option>
                    </select>
                    <p>Потрачено за месяц: {monthSpent}</p>
                </div>

            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Main);