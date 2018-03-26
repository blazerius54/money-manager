import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Payment from './Payment';
import { connect } from 'react-redux';
import AnimateHeight from 'react-animate-height';

class Categ extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isVisible: false,
            containerStyleClose: {
                height: 90,
            },
            containerStyleOpen: {
                height: 'auto'
            },
            height: 50
        }
    }

    render () {
        const { name, path } = this.props.categ;
        const { isVisible, containerStyleClose, containerStyleOpen, height } = this.state;
        let spent = 0;

        this.props.filtredMonth[this.props.indexCat].map((item, i)=>{
            spent += item.paymentAmount;
        })
        
        return (
            <li className={this.props.categ.path + ' category'} 
            // style={!isVisible? containerStyleClose : containerStyleOpen}
            >
            <AnimateHeight
          duration={ 500 }
          height={ height } // see props documentation bellow
        >
                <div className='div-category-header'>
                    <Link to={path}>
                            <p>{name}: {spent}</p>
                    </Link>
                            <p onClick={()=>{
                                    this.setState({
                                        isVisible: !this.state.isVisible,
                                        height: height === 50? 'auto' : 50,
                                    })
                                }
                            }>
                                o
                            </p>
                </div>
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
                    </div>
                {/* {
                    this.state.isVisible? 
                     : ''
                } */}
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