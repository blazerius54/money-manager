import React, { Component } from 'react';
import moment from 'moment';
import { changePayment, deletePayment } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from './Button';
import pen from '../images/pen.png'
import trashBin from '../images/trash.png'

class Payment extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isEditing: false,
        }
    }

    handleSaving () {
        this.setState({ 
            isEditing: true,
        })
    }

    handleEdit () {
        this.setState({
            isEditing: false,
        });

        this.props.changePayment(
            {
                paymentText: this.textInput.value,
                paymentAmount: Number(this.amountInput.value),
                date: this.dateInput.value,
                id: this.props.item.id    
            },
            this.props.categ
        )
    }

    handleDelete () {
        this.props.deletePayment(this.props.item.id, this.props.categ)
    }

    render () {
        //форматируем дату для инпута 
        let dafaultDate = new Date(this.props.item.date).getFullYear()+ '-' +("0" + (new Date(this.props.item.date).getMonth() + 1)).slice(-2) +'-'+("0" + (new Date(this.props.item.date).getDate())).slice(-2)
        return (
            <div className="payment-container">
                    {
                        this.state.isEditing === true?
                        <div className='edit-inputs'>
                            <div className='inputs-container'>
                                <input 
                                type='text' 
                                placeholder="text"
                                defaultValue={this.props.item.paymentText}
                                ref={(ref=> {this.textInput = ref})}
                                />
                                <input 
                                type='text' 
                                placeholder="amount"
                                defaultValue={this.props.item.paymentAmount}
                                ref={(ref=> {this.amountInput = ref})}
                                />
                                <input 
                                type='date' 
                                placeholder="date"
                                id='datePicker'
                                defaultValue={dafaultDate}
                                ref={(ref=> {this.dateInput = ref})}
                                />
                            </div>
                            <div className='btn-container'>
                                <Button handleSmth={this.handleEdit.bind(this)} text={'save'} img={pen}/>
                                <Button  text={'delete'} img={trashBin}/>
                            </div>
                        </div>
                        :
                        <div className='info-wrapper'>
                            <div className='info-container'>
                                <p
                                className='text-container'
                                >{this.props.item.paymentText}: {this.props.item.paymentAmount} &#8381;</p>
                                <p
                                className='date-container'
                                
                                >
                                    {moment(new Date(this.props.item.date)).format(
                                    "Do MMM YYYY"
                                    )}
                                </p>
                            </div>
                            <div className='btn-container'>
                                <Button handleSmth={this.handleSaving.bind(this)} text={'save'} img={pen}/>
                                <Button handleSmth={this.handleDelete.bind(this)} text={'delete'} img={trashBin}/>
                            </div>
                        </div>                         
                    }
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ changePayment, deletePayment }, dispatch)
}
export default connect(null, mapDispatchToProps)(Payment);