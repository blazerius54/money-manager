import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import CategItem from './CategItem';
import { bindActionCreators } from 'redux';
import { increment, addPayment } from '../actions/index';

class SubMain extends Component {
    constructor (props) {
        super(props);
        this.state = {
            paymentText: '',
            paymentAmount: 0
        }
    }

    handleSubmit (e, index) {
        e.preventDefault();
        this.props.addPayment(this.state.paymentText, this.state.paymentAmount, index)

        this.setState({
            paymentText: '',
            paymentAmount: 0
        })
        
        this.paymentText.value = '',
        this.paymentAmount.value = 0
    } 
    
    foo(categ, index) {
        console.log(categ)
        this.props.increment(categ, index)
    }
    render () {
        const path = this.props.match.params.name;
        const index =  this.props.categories.findIndex(item=>{
            return item.path === path
        })
        const categ =  this.props.categories[index]
        // console.log(categ)
        return (
            <div>
                <h2>I`m sub-main</h2>
                {/* <Link to='/main'><p>Money Manager</p></Link> */}
                <p>
                    {categ.name} {categ.spent}
                </p>
                <p>{categ.text}</p>
                {categ.payments.map((item, index)=>{
                    return (
                        <div key={index}>
                            <p>{item.paymentText}: {item.paymentAmount}</p>
                        </div>
                    )
                })}
                {/* <CategItem index={index} categ={categ} {...this.props}/> */}
                <div className="div-form">
                    <form onSubmit={(e)=>this.handleSubmit(e, index)}>
                        <input 
                        ref={(ref=>{this.paymentText = ref})}
                        type="text"
                        placeholder='Text'
                        onChange={(e)=>{this.setState({paymentText: e.target.value})}}
                        />
                        <input 
                        ref={(ref=>{this.paymentAmount = ref})}
                        type="text"
                        placeholder='Payment'
                        onChange={(e)=>{this.setState({paymentAmount: Number(e.target.value)})}}
                        />
                        <input type="submit" />

                    </form>
                </div>
                <button
                onClick={()=>this.foo(categ, index)}
                >click</button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        categories: state.categories
    } 
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ increment, addPayment }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SubMain);