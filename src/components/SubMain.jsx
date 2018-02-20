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
            paymentText: '',
            paymentAmount: 0
        }
    }
    

    handleSubmit (e, index, categ) {
        this.sendPaymentAmount(index,  this.state.paymentAmount)
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
        
        // console.log(categ)
        return (
            
            <div>
                <h2>I`m sub-main</h2>
                {/* <Link to='/main'><p>Money Manager</p></Link> */}
                <p>
                    {categ.name} {categ.spent}
                </p>
                <ul className='payments-container'>
                    {
                        categ.payments.map((item, i)=>{
                            return (
                                <Payment key={i} item={item} index={index} i={i} categ={categ} {...this.props}/>
                                // <li key={index} className='payment-container'>
                                //         <div>
                                //             <p>{item.paymentText}: {item.paymentAmount}</p>
                                //         </div>
                                //         <div>
                                //             <p>{moment(new Date(item.date)).format("Do MMM YYYY")}</p>
                                //         </div>
                                //         {/* {(new Date(item.date).toString())} */}
                                //         {/* {item.date.getMonth().toString()} */}
                                // </li>
                            )
                        })
                    }
                </ul>
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