import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categ extends Component {
    render () {
        const { name, path } = this.props.categ;
        let spent = 0;
        this.props.categ.payments.filter(item=>{
            let date = item.date;
            date = new Date(date).getMonth();
            if(date === this.props.month){
                // return item2
                return item
            }
        }).forEach(item=>{
            spent+=item.paymentAmount
        });
        this.props.categ.spent = spent;
        return (
            <Link to={path}>
                <li className='info'>
                    <p>{name}: </p>
                    <p>{spent}</p>
                </li>
            </Link>
        )
    }
}

export default Categ;