import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Payment from './Payment';

class Categ extends Component {
    render () {
        const { name, path } = this.props.categ;
        let spent = 0;
        this.props.categ.payments.filter(item=>{
            let date = item.date;
            date = new Date(date).getMonth();
            if(date === this.props.month){
                return item
            }
        }).forEach(item=>{
            spent+=item.paymentAmount
        });
        this.props.categ.spent = spent;
        console.log(this.props.categ)
        return (
            <div>
                <Link to={path}>
                    <li className='info'>
                        <p>{name}: </p>
                        <p>{spent}</p>
                    </li>
                </Link>
                {/* <Payment item={item} category={index}/> */}
                {
                    this.props.categ.payments.filter((item, index)=>{
                        let date = item.date;
                        date = new Date(date).getMonth();
                        if(date === this.props.month){
                            return item
                        }
                    }).sort((a, b) => {
                        let date1 = new Date(a.date);
                        let date2 = new Date(b.date);
                        return date1 - date2;
                    }).map((item, i)=>{
                        return <Payment key={i} item={item} category={this.props.categ.payments}/>
                    })
                }
            </div>
        )
    }
}

export default Categ;