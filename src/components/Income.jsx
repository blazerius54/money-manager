import React, { Component } from 'react';
import moment from 'moment';
import { editIncome, deleteIncome } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from './Button';
import pen from '../images/pen.png'
import trashBin from '../images/trash.png'


class Income extends Component {
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

    handleEditIncome () {
        this.props.editIncome(this.textInput.value, this.amountInput.value, this.dateInput.value, this.props.item.id)
        this.setState({
            isEditing: false
        })
    }

    handleDeleteIncome () {
        this.props.deleteIncome(this.props.item.id)
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
                                defaultValue={this.props.item.text}
                                ref={(ref=> {this.textInput = ref})}
                                />
                                <input 
                                type='text' 
                                placeholder="amount"
                                defaultValue={this.props.item.amount}
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
                                <Button handleSmth={this.handleEditIncome.bind(this)} text={'save'} img={pen}/>
                                <Button  text={'delete'} img={trashBin}/>
                            </div>
                        </div>
                        :
                        <div className='info-wrapper'>
                            <div className='info-container'>
                                <p className='text-container'>{this.props.item.text}: {this.props.item.amount} &#8381;</p>
                                <p
                                className='date-container'
                                onClick={() => this.setState({ 
                                    isEditing: true,
                                })}
                                >
                                    {moment(new Date(this.props.item.date)).format(
                                    "Do MMM YYYY"
                                    )}
                                </p>
                            </div>
                            <div className='btn-container'>
                                <Button handleSmth={this.handleSaving.bind(this)} text={'save'} img={pen}/>
                                <Button handleSmth={this.handleDeleteIncome.bind(this)} text={'delete'} img={trashBin}/>
                            </div>
                        </div>                         
                    }
              </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ editIncome, deleteIncome }, dispatch)
}

export default connect(null, mapDispatchToProps)(Income)