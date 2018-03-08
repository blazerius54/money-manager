import React, { Component } from "react";

class Form extends Component {
  
    handleSubmit (e) {
        e.preventDefault();
        this.props.sendFormData(this.props.index);
        this.inputText.value = '';
        this.inputAmount.value = 0;
    }

    render() {
        return (
            <form className='div-form-inputs' onSubmit={(e)=>{this.handleSubmit(e)}}>
                <input
                ref={ref => {
                    this.inputText = ref;
                }}
                type="text"
                placeholder="Text"
                onChange={e => {
                    this.props.onChangeForm(this.inputText.value, this.inputAmount.value);
                }}
                />
                <input
                ref={ref => {
                    this.inputAmount = ref;
                }}
                type="text"
                placeholder="Payment"
                onChange={e => {
                    this.props.onChangeForm(this.inputText.value, this.inputAmount.value);
                }}
                />
                <input type="submit" />
            </form>
    )
  }
}

export default Form