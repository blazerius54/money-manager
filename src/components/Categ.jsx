import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Categ extends Component {
    render () {
        const { name, spent, path } = this.props.categ;
        return (
            <Link to={path}>
                <div className='info'>
                    <p>{name}: </p>
                    <p>{spent}</p>
                </div>
            </Link>
        )
    }
}

export default Categ;