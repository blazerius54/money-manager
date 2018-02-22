import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categ from './Categ';
import Payment from './Payment';

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            month: 0,
            categories: []
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

        // console.log(arr)

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

                            this.props.categories.map((item2, index)=>{
                                let prevCat = '';
                                return item2.payments.filter(item=>{
                                    // console.log(item2)
                                    let date = item.date;
                                    date = new Date(date).getMonth();
                                    if(date === this.state.month){
                                        return item2
                                    }
                                }).map((item, i)=>{
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
                            // this.state.payments.filter((item, i) => {
                            //     // console.log(date.getMonth())
                            //     let date = item.date;
                            //     date = new Date(date).getMonth();
                            //     return date === this.state.month;
                            // }).map((item, index) => {
                            //     monthSpent+=item.paymentAmount;
                            //     if(prevCat === item.categoryName) {
                            //         // console.log('Старая категория')
                            //         prevCat = item.categoryName
                            //         return (
                                        
                                        // <Payment key={index} item={item}  {...this.props} />                                            
                            //         )
                            //     } else if (prevCat!==item.categoryName){
                            //         // console.log(prevCat)
                            //         prevCat = item.categoryName
                            //         // console.log(prevCat)
                            //         return (
                            //             <div key={index}>
                            //             <p>{item.categoryName}</p>
                            //             <Payment  item={item} {...this.props} />  </div>                                          
                            //         )
                            //     }
                            // })

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