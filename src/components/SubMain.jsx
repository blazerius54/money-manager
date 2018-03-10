import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payment from './Payment';
import Form from './Form';
import { bindActionCreators } from 'redux';
import { addPayment, changeMonth } from '../actions/index';
// import moment from 'moment';

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
        // console.log(this.state)
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
        const categ = this.props.categories[index]
        let monthSpent = 0;
        console.log(index)
        return (
            <div>
                <header className='app-header'>
                    <Link to='/' className='header-of-app'><h2>Money Manager</h2></Link>
                    <input type="month"
                        defaultValue={new Date(this.props.date).getFullYear()+'-0'+(new Date(this.props.date).getMonth()+1)}
                        onChange={(e)=>this.props.changeMonth(e.target.value)}
                    />
                </header>
                <div className='sub-main'>
                    <div>
                        <p>
                            {categ.name} 
                        </p>
                    </div>
                    <ul className='payments-container'>
                        {
                            categ.payments.sort((a, b) => {
                                let date1 = new Date(a.date);
                                let date2 = new Date(b.date);
                                return date1 - date2;
                            }).filter(item=>{
                                let date = item.date;
                                let year = new Date(date).getFullYear();
                                let month = new Date(date).getMonth();
                                if(month === new Date(this.props.date).getMonth() &&
                                    year === new Date(this.props.date).getFullYear()
                                ) {
                                    return item
                                }
                            }).map((item, i)=>{
                                monthSpent += item.paymentAmount 
                                return (
                                    <Payment key={i} item={item} index={index} i={i} categ={index}/>
                                )
                            })
                        }
                    </ul>
                    <p>Потрачено за месяц: { monthSpent}</p>
                    <Form sendFormData={this.sendFormData.bind(this)} onChangeForm={this.onChangeForm.bind(this)} index={index}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        categories: state.categories,
        date: state.date
    } 
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addPayment, changeMonth }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SubMain);