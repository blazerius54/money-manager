import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payment from './Payment';
import Form from './Form';
import { bindActionCreators } from 'redux';
import { addPayment } from '../actions/index';

class SubMain extends Component {
    constructor (props) {
        super(props);
        this.state = {
            paymentText: '',
            paymentAmount: 0
        }
    }
    
    onChangeForm (text, amount) {
        this.setState({
            paymentText: text,
            paymentAmount: amount
        })
    }

    sendFormData (index) {
        this.props.addPayment(this.state.paymentText, this.state.paymentAmount, index);
        
        this.setState({
            paymentText: '',
            paymentAmount: 0
        })
    }


    render () {
        const path = this.props.match.params.name;
        const index = this.props.categories.findIndex(item=>{
            return item.path === path
        })
        const categ = this.props.categories[index];
        let monthSpent = 0;
        return (
            <div className='sub-main'>
                <div>
                    <p className='sub-main-info'>
                        {categ.name} 
                    </p>
                </div>
                {
                this.props.filtredMonth[index].length > 0?
                    <ul className='payments-container'>
                        {
                            this.props.filtredMonth[index].sort((a, b) => {
                                let date1 = new Date(a.date);
                                let date2 = new Date(b.date);
                                return date1 - date2;
                            }).map((item, i)=>{
                                monthSpent += item.paymentAmount 
                                return (
                                    <Payment key={i} item={item} index={index} i={i} categ={index}/>
                                )
                            })
                        }
                    <p className='sub-main-info'>Потрачено за месяц: { monthSpent} &#8381;</p> 
                    </ul>
                : 
                <div className='alternative-div'>
                    {/* <img src={shoppingCart} alt="shopping-cart" className='shopping-cart'/> */}
                    <p style={{fontSize: 70+'%'}}>Внесите ваши траты</p>
                </div>
                }
                <Form sendFormData={this.sendFormData.bind(this)} onChangeForm={this.onChangeForm.bind(this)} index={index} addNew={true}/>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        categories: state.categories,
        date: state.date,
        filtredMonth: state.filtredMonth
    } 
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addPayment }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubMain);