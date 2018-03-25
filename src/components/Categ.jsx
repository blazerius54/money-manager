import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Payment from './Payment';
import { connect } from 'react-redux';


class Categ extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isVisible: false,
            containerStyle: {
                height: 90
            }
        }
    }

    render () {
        const { name, path } = this.props.categ;
        let spent = 0;
        // this.props.categ.payments.filter(item=>{
        //     let date = item.date;
        //     let year = new Date(date).getFullYear();
        //     let month = new Date(date).getMonth();

        //     if(month === new Date(this.props.date).getMonth() &&
        //         year === new Date(this.props.date).getFullYear()
        //     ){
        //         spent+=item.paymentAmount
        //     }
        // })

        this.props.filtredMonth[this.props.indexCat].map((item, i)=>{
            spent += item.paymentAmount;
        })

        
        return (
            <li className={this.props.categ.path + ' category'} 
            style={this.state.containerStyle}
            ref={input=>{this.myLi = input}}
            >
                <div className='div-category-header'>
                    <Link to={path}>
                            <p>{name}: {spent}</p>
                    </Link>
                            <p onClick={()=>{
                                this.setState({
                                    containerStyle: {
                                        height: 300
                                    },
                                    isVisible: !this.state.isVisible})}
                            }>
                                o
                            </p>
                </div>
                {
                    this.state.isVisible? 
                    <div className='category-container-content'>

                    {
                        this.props.filtredMonth[this.props.indexCat].sort((a, b) => {
                            let date1 = new Date(a.date);
                            let date2 = new Date(b.date);
                            return date1 - date2;
                        }).map((item, i)=>{
                            // monthSpent += item.paymentAmount 
                            return (
                                <Payment  item={item} key={i} categ={this.props.indexCat}/>
                                
                            )
                        })
                    }
                    </div> : ''
                }
            </li>
        )
    }
}

function mapStateToProps (state) {
    return {
        filtredMonth: state.filtredMonth
    } 
}



export default connect(mapStateToProps)(Categ);