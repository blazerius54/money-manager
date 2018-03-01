import React, { Component } from "react";

class Form extends Component {
    constructor (props) {
        super (props)
        this.state = {
            monthSpent: 0,
            paymentText: '',
            paymentAmount: 0
        }
    }
    
    handleSubmit (e) {
        e.preventDefault();
        this.props.sendFormData(this.props.index);
        this.paymentText.value = '';
        this.paymentAmount.value = 0;
    }

    render() {
    return (
        <div className="div-form" onSubmit={(e)=>{this.handleSubmit(e)}}>
        <form >
            <input
            ref={ref => {
                this.paymentText = ref;
            }}
            type="text"
            placeholder="Text"
            onChange={e => {
                this.props.onChangeForm(this.paymentText.value, this.paymentAmount.value);
            }}
            />
            <input
            ref={ref => {
                this.paymentAmount = ref;
            }}
            type="text"
            placeholder="Payment"
            onChange={e => {
                this.props.onChangeForm(this.paymentText.value, this.paymentAmount.value);
            }}
            />
            <input type="submit" />
        </form>
        </div>
    )
  }
}

export default Form