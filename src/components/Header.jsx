import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMonth } from '../actions/index';
import arrowUp from '../images/arrow-up.png';
import arrowDown from '../images/arrow-down.png';

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
                <Link to={process.env.PUBLIC_URL + '/'} className='logo-of-app'><h2>Money Manager</h2></Link>
                <div className='input-date'>
                    <div className='date-container'>
                        <img onClick={()=>this.moveYear(1, null)} src={arrowUp} alt=""/>
                        <p>{months[new Date(this.props.date).getMonth()]}</p>
                        <img onClick={()=>this.moveYear(-1, null)} src={arrowDown} alt=""/>
                    </div>                        
                    <div className='date-container'>
                        <img onClick={()=>this.moveYear(null, 1)} src={arrowUp} alt=""/>
                        <p className='year'>{new Date(this.props.date).getFullYear()}</p>
                        <img onClick={()=>this.moveYear(null, -1)} src={arrowDown} alt=""/>
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