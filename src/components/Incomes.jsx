import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { addIncome } from '../actions/index';
import { bindActionCreators } from 'redux';


class Incomes extends Component {
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
        console.log(this.props)
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
                            defaultValue={this.props.item.incomeText}
                            onChange={(e)=>this.setState({text: e.target.value})}
                            ref={(ref=> {this.textInput = ref})}
                            />
                            <input 
                            type='text' 
                            placeholder="amount"
                            defaultValue={this.props.item.incomeAmount}
                            onChange={(e)=>this.setState({amount: Number(e.target.value)})}
                            ref={(ref=> {this.amountInput = ref})}
                            />
                        </div>
                        :
                        <div>
                            <p>{this.props.item.incomeText}: {this.props.item.incomeAmount}</p>
                            {/* <button onClick={()=>this.props.deletePayment(this.props.item.id, this.props.index)}>Delete</button> */}
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
              {/* {(new Date(item.date).toString())} */}
              {/* {item.date.getMonth().toString()} */}
            </li>
          </div>;
    }
}



function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addIncome }, dispatch)
}
export default connect(null, mapDispatchToProps)(Incomes);
// export default Incomes;