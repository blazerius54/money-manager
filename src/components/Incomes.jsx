import React, { Component } from 'react';
import moment from 'moment';
import { editIncome, deleteIncome } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Incomes extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isEditing: false,
        }
    }


    handleEditIncome () {
        console.log(this.props.item.id)
        this.props.editIncome(this.textInput.value, this.amountInput.value, this.dateInput.value, this.props.item.id)
        this.setState({
            isEditing: false
        })
    }

    renderDate () {
        if(this.state.isEditing === true){
            return (
                <input
                type="datetime-local" 
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


    render () {
        //форматируем дату для инпута 
        let dafaultDate = new Date(this.props.item.date).getFullYear()+ '-' +("0" + (new Date(this.props.item.date).getMonth() + 1)).slice(-2) +'-'+("0" + (new Date(this.props.item.date).getDate())).slice(-2)
        return <div>
            <li className="payment-container">
              <div>
                
                    {
                        this.state.isEditing === true?
                        <div>
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
                        </div>
                        :
                        <div>
                            <p>{this.props.item.text}: {this.props.item.amount}</p>
                            <button onClick={()=>this.props.deleteIncome(this.props.item.id)}>Delete</button>
                            
                        </div>                         
                    }
                
              </div>
              <div>
                {
                    this.state.isEditing === true ? 
                    <div>
                        <input 
                        type='date' 
                        placeholder="date"
                        id='datePicker'
                        defaultValue={dafaultDate}
                        ref={(ref=> {this.dateInput = ref})}
                        />
                        <button
                        onClick={() => this.handleEditIncome()} 
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
            </li>
          </div>;
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ editIncome, deleteIncome }, dispatch)
}

export default connect(null, mapDispatchToProps)(Incomes)