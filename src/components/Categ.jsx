import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AnimateHeight from 'react-animate-height';
import Payment from './Payment';
import catArrow from '../images/cat-arrow.png';
import notePad from '../images/new.png';

class Categ extends Component {
    constructor (props) {
        super(props);
        this.state = {
            height: 50
        }
    }

    render () {
        const { name, path } = this.props.categ;
        const { height } = this.state;
        let spent = 0;

        this.props.filtredMonth[this.props.indexCat].forEach((item, i)=>{
            spent += item.paymentAmount;
        })
        
        return (
            <li className={this.props.categ.path + ' category'}>
                <AnimateHeight
                duration={ 500 }
                height={ height }
                >
                    <div className='div-category-header'
                        onClick={()=>{
                                    this.setState({
                                        height: height === 50? 'auto' : 50,
                                    })
                                }
                            }
                    >
                        <Link className='categ-title' to={process.env.PUBLIC_URL + path}>
                                {/* <img src={notePad} alt="add new"/> */}
                                <p>{name}: {spent} &#8381;</p>
                        </Link>
                        <img src={catArrow} alt='o' className='arrow-img' style={height!==50? {transform:'rotate(180deg)'} : {}  } />
                    </div>
                    <div className='category-container-content'>
                        {
                            this.props.filtredMonth[this.props.indexCat].sort((a, b) => {
                                let date1 = new Date(a.date);
                                let date2 = new Date(b.date);
                                return date1 - date2;
                            }).map((item, i)=>{
                                return (
                                    <Payment  item={item} key={i} categ={this.props.indexCat}/>
                                )
                            })
                        }
                        </div>
                </AnimateHeight>
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