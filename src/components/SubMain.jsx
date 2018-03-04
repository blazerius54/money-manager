import React, { Component } from 'react';
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
        // console.log(categ)
        return (
            
            <div>
                <h2>I`m sub-main</h2>
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
                                if(date === this.props.month) {
                                    return item
                                }
                            } else {
                                return item
                            }
                        }).map((item, i)=>{
                            monthSpent += item.paymentAmount 
                            return (
                                <Payment key={i} item={item} index={index} i={i} categ={categ}/>
                            )
                        })
                    }
                </ul>
                <p>Потрачено за месяц: { monthSpent}</p>

                <Form sendFormData={this.sendFormData.bind(this)} onChangeForm={this.onChangeForm.bind(this)} index={index}/>
                
                <div>
                    <select name="" id="" 
                        onChange={(e)=>this.props.changeMonth(Number(e.target.value))}
                        defaultValue={this.props.month}>
                        <option value="0">Январь</option>
                        <option value="1">Февраль</option>
                        <option value="2">Март</option>
                    </select>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        categories: state.categories,
        month: state.month
    } 
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addPayment, changeMonth }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SubMain);