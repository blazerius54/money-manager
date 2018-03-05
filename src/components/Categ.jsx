import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Payment from './Payment';

class Categ extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }
    render () {
        const { name, path } = this.props.categ;
        let spent = 0;
        this.props.categ.payments.filter(item=>{
            let date = item.date;
            let year = new Date(date).getFullYear();
            let month = new Date(date).getMonth();

            if(month === new Date(this.props.date).getMonth() &&
                year === new Date(this.props.date).getFullYear()
            ){
                spent+=item.paymentAmount
            }
        }).forEach(item=>{
            spent+=item.paymentAmount
        });
        return (
            <li className={this.props.categ.path}>
                <div className='div-category-header'>
                    <Link to={path}>
                            <p>{name}: {spent}</p>
                    </Link>
                            <p onClick={()=>this.setState({isVisible: !this.state.isVisible})}>
                             x</p>
                </div>
                {
                    this.state.isVisible? 
                    <div className='content'>
                    {
                        this.props.categ.payments.filter((item, index)=>{
                            let date = item.date;
                            let year = new Date(date).getFullYear();
                            let month = new Date(date).getMonth();
                            if(month === new Date(this.props.date).getMonth() &&
                                year === new Date(this.props.date).getFullYear()
                            ){
                                return item
                            }
                        }).sort((a, b) => {
                            let date1 = new Date(a.date);
                            let date2 = new Date(b.date);
                            return date1 - date2;
                        }).map((item, i)=>{
                            return <Payment  item={item} key={i} categ={this.props.indexCat}/>
                        })
                    } 
                    </div> : ''
                }
            </li>
        )
    }
}

export default Categ;