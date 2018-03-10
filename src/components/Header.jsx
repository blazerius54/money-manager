import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMonth } from '../actions/index';


class Header extends Component {

    moveYear (x, y) {
        this.props.changeMonth((new Date(this.props.date).getFullYear()+y)+
            '-0'+(+new Date(this.props.date).getMonth()+1+x)
        );
    }
    
    render () {
        let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
        
        return (
            <header className='app-header'>
                <Link to='/' className='logo-of-app'><h2>Money Manager</h2></Link>
                <div className='input-date'>
                    {/* <input type="month"
                        defaultValue={new Date(this.props.date).getFullYear()+'-0'+(new Date(this.props.date).getMonth()+1)}
                        onChange={(e)=>this.foo(e)}
                    /> */}
        
                    <div className='date-container'>
                        <img onClick={()=>this.moveYear(1, null)} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-32.png" alt=""/>
                        <p>{months[new Date(this.props.date).getMonth()]}</p>
                        <img onClick={()=>this.moveYear(-1, null)} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-32.png" alt=""/>

                    </div>                        
                    <div className='date-container'>
                        {/* <p onClick={()=>this.moveYear(null, 1)}>up</p> */}
                        <img onClick={()=>this.moveYear(null, 1)} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-32.png" alt=""/>
                        <p className='year'>{new Date(this.props.date).getFullYear()}</p>
                        <img onClick={()=>this.moveYear(null, -1)} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-32.png" alt=""/>

                    </div>    
                </div>
            </header>
        )
    }
}

function mapStateToProps (state) {
    return {
        categories: state.categories,
        date: state.date
    } 
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ changeMonth }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);