import React, { Component } from 'react';
import moment from 'moment';
import { editIncome } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Incomes extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isEditing: false,
            text: '',
            amount: 0,
            date: new Date(Date.now()),
        }
    }


    handleEditIncome () {
        this.props.editIncome(this.textInput.value, this.amountInput.amount, this.state.date, this.props.index, this.props.item.id)
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
                            onChange={(e)=>this.setState({text: e.target.value})}
                            ref={(ref=> {this.textInput = ref})}
                            />
                            <input 
                            type='text' 
                            placeholder="amount"
                            defaultValue={this.props.item.amount}
                            onChange={(e)=>this.setState({amount: Number(e.target.value)})}
                            ref={(ref=> {this.amountInput = ref})}
                            />
                        </div>
                        :
                        <div>
                            <p>{this.props.item.text}: {this.props.item.amount}</p>
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
                        onChange={(e)=>this.setState({date: e.target.value})}
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

// export default Incomes
function mapDispatchToProps (dispatch) {
    return bindActionCreators({ editIncome }, dispatch)
}

export default connect(null, mapDispatchToProps)(Incomes)