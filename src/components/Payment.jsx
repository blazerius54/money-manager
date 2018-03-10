import React, { Component } from 'react';
import moment from 'moment';
import { changePayment, deletePayment } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Payment extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isEditing: false,
            text: '',
            amount: 0,
            date: new Date(Date.now()),
            // newPayment
        }
    }

    handleEditDate () {
        this.setState({
            text: '',
            // amount: 0,
            // date: null,
            isEditing: false,
        });

    }

    render () {
        //форматируем дату для инпута 
        let dafaultDate = new Date(this.props.item.date).getFullYear()+ '-' +("0" + (new Date(this.props.item.date).getMonth() + 1)).slice(-2) +'-'+("0" + (new Date(this.props.item.date).getDate())).slice(-2)
        return (
            <div className="payment-container">
              
                
                    {
                        this.state.isEditing === true?
                        <div>
                            <input 
                            type='text' 
                            placeholder="text"
                            defaultValue={this.props.item.paymentText}
                            onChange={(e)=>this.setState({text: e.target.value})}
                            ref={(ref=> {this.textInput = ref})}
                            />
                            <input 
                            type='text' 
                            placeholder="amount"
                            defaultValue={this.props.item.paymentAmount}
                            onChange={(e)=>this.setState({amount: Number(e.target.value)})}
                            ref={(ref=> {this.amountInput = ref})}
                            />
                        </div>
                        :
                        <div>
                            <p>{this.props.item.paymentText}: {this.props.item.paymentAmount}</p>
                            <button onClick={()=>this.props.deletePayment(this.props.item.id, this.props.categ)}>Delete</button>
                        </div>                         
                    }
                
              <div>
                {
                    this.state.isEditing === true ? 
                    <div>
                        <input 
                        type='date' 
                        placeholder="date"
                        id='datePicker'
                        defaultValue={dafaultDate}
                        onChange={(e)=>this.setState({date: e.target.value})}
                        ref={(ref=> {this.dateInput = ref})}
                        />
                        <button
                        onClick={() => this.handleEditDate()} 
                        >save</button>
                    </div>
                    : 
                    <p
                        onClick={() => this.setState({ 
                            isEditing: true,
                        })}
                    >
                        {moment(new Date(this.props.item.date)).format(
                        "Do MMM YYYY"
                        )}
                    </p>
                }
              </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ changePayment, deletePayment }, dispatch)
}
export default connect(null, mapDispatchToProps)(Payment);