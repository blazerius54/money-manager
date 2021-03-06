import React, { Component } from "react";
import Income from "./Income";
import Form from "./Form";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addIncome } from '../actions/index';

class Incomes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isFiltred: false,
      month: new Date(Date.now()).getMonth(),
      text: "",
      amount: 0
    };
  };

  onChangeForm (text, amount) {
    this.setState({
        text: text,
        amount: amount
    })
}

sendFormData () {
    this.props.addIncome(this.state.text, this.state.amount);
    
    this.setState({
        text: '',
        amount: 0
    })
}
  render() {
    return <div className='main-content-item main-incomes'>
        <p className='title'>Доходы:</p>
        <p style={{fontSize: 70+'%'}}>Внесите ваши доходы</p>
        <ul className="payments-container">
          {
            this.props.incomes.sort((a, b) => {
              let date1 = new Date(a.date);
              let date2 = new Date(b.date);
              return date1 - date2;
            }).filter((item, index) => {
                let date = item.date;
                let year = new Date(date).getFullYear();
                let month = new Date(date).getMonth();
                if(month === new Date(this.props.month).getMonth() &&
                    year === new Date(this.props.month).getFullYear()
                ) {
                    return item
                } else {
                  return null
                }
            }).map((item, index) => {
              return (
                <Income 
                  key={index} 
                  item={item} 
                />
              )  
            })
          }
        </ul>
        <Form sendFormData={this.sendFormData.bind(this)} onChangeForm={this.onChangeForm.bind(this)} />
      </div>;
  }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addIncome }, dispatch)
}
export default connect (null, mapDispatchToProps)(Incomes);