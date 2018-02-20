import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { changeDate } from '../actions/index';
import { bindActionCreators } from 'redux';

class Payment extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isEditing: false,
            text: this.props.item.paymentText,
            amount: this.props.item.paymentAmount,
            date: this.props.item.date,
            // newPayment
        }
    }

    renderDate () {
        if(this.state.isEditing === true){
            return (
                <input
                type="datetime-local" 
                type="text" 
                placeholder='date' 
                onClick={()=>this.setState({isEditing: !this.state.isEditing})}/>
            ) 
       } else {
            return (
                <p 
                onClick={()=>this.setState({isEditing: true})}>
                    {moment(new Date(this.props.item.date)).format("Do MMM YYYY")}
                </p>
            )
        }                      
    }

    handleEditDate () {
        this.props.changeDate(this.state.text, this.state.amount, this.state.date, this.props.index, this.props.i)
        // console.log(this.props.index)
        this.setState({
            text: '',
            amount: 0,
            date: null,
            isEditing: false
        });
        this.textInput.value = '';
        this.amountInput.value = '';
        this.dateInput.value = '';
    }

    render () {
        return <div>
            <li className="payment-container">
              <div>
                
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
                        <p>{this.props.item.paymentText}: {this.props.item.paymentAmount}</p>
                        
                    }
                
              </div>
              <div>
                {/* {this.renderDate()} */}
                {
                    this.state.isEditing === true ? 
                    <div>
                        <input 
                        type='date' 
                        placeholder="date"
                        defaultValue={new Date(this.props.item.date)}
                        onChange={(e)=>this.setState({date: e.target.value})}
                        ref={(ref=> {this.dateInput = ref})}
                        />
                        <button
                        onClick={() => this.handleEditDate()} 
                        >save</button>
                    </div>
                    : 
                    <p
                        onClick={() => this.setState({ isEditing: true })}
                    >
                        {moment(new Date(this.props.item.date)).format(
                        "Do MMM YYYY"
                        )}
                    </p>
                }
              </div>
              {/* {(new Date(item.date).toString())} */}
              {/* {item.date.getMonth().toString()} */}
            </li>
          </div>;
    }
}

// function mapStateToProps (state) {
//     return {
//         categories: state.categories
//     }
// }

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ changeDate }, dispatch)
}
export default connect(null, mapDispatchToProps)(Payment);
// export default Payment;