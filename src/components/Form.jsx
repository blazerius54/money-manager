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
        <div className="div-form" onSubmit={(e)=>{this.handleSubmit(e)}}>
            <form >
                <div className='div-form-inputs'>
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
                </div>
                <input type="submit" />
            </form>
        </div>
    )
  }
}

export default Form