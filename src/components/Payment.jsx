import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { changePayment, deletePayment } from '../actions/index';
import { bindActionCreators } from 'redux';


class Payment extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isEditing: false,
            text: '',
            amount: '',
            date: new Date(Date.now()),
            // newPayment
        }
    }

    // componentDidMount () {
    //     this.setState({
    //         text: this.props.item.paymentText,
    //         amount: this.props.item.paymentAmount,
    //         date: this.props.item.date
    //     })

    //     console.log(this.state)
    // }

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
        this.props.changePayment(this.textInput.value, this.amountInput.value, this.dateInput.value, this.props.index, this.props.i, this.props.item.id)
        this.setState({
            // text: '',
            // amount: 0,
            // date: null,
            isEditing: false,
            // xx: '2018-02-03'
        });
        // console.log(this.props.index)
        // this.textInput.value = '';
        // this.amountInput.value = '';
        // this.dateInput.value = '';
    }

    render () {
        //форматируем дату для инпута 
        let dafaultDate = new Date(this.props.item.date).getFullYear()+ '-' +("0" + (new Date(this.props.item.date).getMonth() + 1)).slice(-2) +'-'+("0" + (new Date(this.props.item.date).getDate())).slice(-2)
        // console.log(this.props.item.date)
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
                        <div>
                            <p>{this.props.item.paymentText}: {this.props.item.paymentAmount}</p>
                            <button onClick={()=>this.props.deletePayment(this.props.item.id, this.props.index)}>Delete</button>
                        </div>                         
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
                            // text: this.textInput.value,
                            // amount: this.amountInput.value,
                            // date: this.dateInput.value,
                        })}
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
    return bindActionCreators({ changePayment, deletePayment }, dispatch)
}
export default connect(null, mapDispatchToProps)(Payment);
// export default Payment;