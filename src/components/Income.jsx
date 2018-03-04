import React, { Component } from "react";
import Incomes from "./Incomes";
import Form from "./Form";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addIncome } from '../actions/index';

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFiltred: false,
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
    let indexToPass = 0; 
    return <div>
        <p>Доходы:</p>
        <ul className="payments-container">
          {
            this.props.incomes.sort((a, b) => {
              let date1 = new Date(a.date);
              let date2 = new Date(b.date);
              return date1 - date2;
            }).filter((item, index) => {
              indexToPass = index;
              let date = item.date;
              date = new Date(date).getMonth();
              if (this.state.month !== null) {
                if (date === this.props.month) {
                  return item;
                }
              } else {
                return item;
              }
            }).map((item, index) => {
              return <Incomes key={index} item={item} {...this.props} sendFormData={this.sendFormData.bind(this)} onChangeForm={this.onChangeForm.bind(this)}/>;
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
export default connect (null, mapDispatchToProps)(Income);