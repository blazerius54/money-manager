import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Categ from './Categ';
import Payment from './Payment';
import { bindActionCreators } from 'redux';
import { increment, addPayment } from '../actions/index';
// import moment from 'moment';

class SubMain extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isFiltred: false,
            month: new Date(Date.now()).getMonth(),
            monthSpent: 0,
            paymentText: '',
            paymentAmount: 0
        }
    }
    

    handleSubmit (e, index, categ) {
        // this.sendPaymentAmount(index,  this.state.paymentAmount)
        e.preventDefault();
        this.props.addPayment(this.state.paymentText, this.state.paymentAmount, index);

        this.setState({
            paymentText: '',
            paymentAmount: 0
        })
        
        this.paymentText.value = '';
        this.paymentAmount.value = 0;
    } 
    
    sendPaymentAmount(index, paymentAmount) {
        this.props.increment(index, paymentAmount)
    }

    render () {
        const path = this.props.match.params.name;
        const index = this.props.categories.findIndex(item=>{
            return item.path === path
        })
        const categ = this.props.categories[index]
        let monthSpent = 0;
        // console.log(categ)
        return (
            
            <div>
                <h2>I`m sub-main</h2>
                {/* <Link to='/main'><p>Money Manager</p></Link> */}
                <p>
                    {categ.name} 
                    
                        
                </p>
                <ul className='payments-container'>
                    {
                        categ.payments.sort((a, b) => {
                            let date1 = new Date(a.date);
                            let date2 = new Date(b.date);
                            return date1 - date2;
                        }).filter(item=>{
                            // console.log(item2)
                            let date = item.date;
                            date = new Date(date).getMonth();
                            if(this.state.month !==null) {
                                if(date === this.state.month) {
                                    return item
                                }
                            } else {
                                return item
                            }
                        }).map((item, i)=>{
                            monthSpent += item.paymentAmount 
                            return (
                                <Payment key={i} item={item} index={index} i={i} categ={categ} {...this.props}/>
                            )
                        })
                    }
                </ul>
                <p>Потрачено за месяц: { monthSpent}</p>
                {/* <CategItem index={index} categ={categ} {...this.props}/> */}
                <div className="div-form">
                    <form onSubmit={(e)=>this.handleSubmit(e, index, categ)}>
                        <input 
                        ref={(ref=>{this.paymentText = ref})}
                        type="text"
                        placeholder='Text'
                        onChange={(e)=>{this.setState({paymentText: e.target.value})}}
                        />
                        <input 
                        ref={(ref=>{this.paymentAmount = ref})}
                        type="text"
                        placeholder='Payment'
                        onChange={(e)=>{this.setState({paymentAmount: Number(e.target.value)})}}
                        />
                        <input type="submit" />

                    </form>
                </div>
                <div>
                    <p onClick={()=>this.setState({month: null})}>За весь год</p>
                    <p onClick={()=>this.setState({month:0})}>Январь</p>
                    <p onClick={()=>this.setState({month:1})}>Февраль</p>
                    <p onClick={()=>this.setState({month:2})}>Март</p>
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

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ increment, addPayment }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SubMain);