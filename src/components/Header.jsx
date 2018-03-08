import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMonth } from '../actions/index';


class Header extends Component {

    render () {
        return (
            <header className='app-header'>
                <Link to='/' className='header-of-app'><h2>Money Manager</h2></Link>
                <input type="month"
                    defaultValue={new Date(this.props.date).getFullYear()+'-0'+(new Date(this.props.date).getMonth()+1)}
                    onChange={(e)=>this.props.changeMonth(e.target.value)}
                />
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