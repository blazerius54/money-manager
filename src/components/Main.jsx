import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageZoom from 'react-medium-image-zoom';
import Categ from './Categ';
import Incomes from './Incomes';
import example from '../images/ex-payment.jpg'
import example2 from '../images/ex-payment-2.jpg'
import example3 from '../images/ex-income.jpg'

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isModalVisible: false,
            imgHeight: 200
        }
    }

    render () {
        let monthEarned = 0;
        let monthSpent = 0;

        const filterForDate = (item)=> {
            let date = item.date;
            let year = new Date(date).getFullYear();
            let month = new Date(date).getMonth();
            if(month === new Date(this.props.date).getMonth() &&
                year === new Date(this.props.date).getFullYear()
            ) {
                return item
            }
        }

        this.props.filtredMonth.forEach((item)=>{
            item.map(item=>{
                return monthSpent += item.paymentAmount;
            })
        })
    
        this.props.incomes.filter(filterForDate).forEach(item=>
            monthEarned += item.amount
            
        );

        return (
            <div className='app-wrapper'>
                {/* <Header /> */}
                <div className='main-content'>
                    <div className='main-content-item main-payments'>
                    <p className='title'>Расходы:</p>
                        <ul className='payments-container make-scroll'>
                            {
                                this.props.categories.map((category, index)=>{
                                    return (
                                        <Categ key={index} index={index} categ={category} indexCat={index} date={this.props.date} monthSpent={monthSpent}/>
                                    ) 
                                })
                            }
                        </ul>
                        
                    </div>
                    <div className="main-content-item main-balance">
                        <p className='text'>Баланс:</p> <p className='number'>{monthEarned - monthSpent} &#8381;</p>
                        <p className='text'>Заработано за месяц:</p> <p className='number'>{monthEarned} &#8381;</p>
                        <p className='text'>Потрачено за месяц:</p> <p className='number'>{monthSpent} &#8381;</p>
                    </div>
                    <Incomes incomes={this.props.incomes} month={this.props.date}/>
                </div>
                <span onClick={()=>this.setState({isModalVisible: true})} className='about'>?</span>
                {
                    this.state.isModalVisible? 
                    <div className='modal' 
                    // onClick={()=>this.setState({isModalVisible: false})}
                    >
                        <div className='modal-main'>
                            <div className='close' ><span onClick={()=>this.setState({isModalVisible: false})}>x</span></div>
                            <div className='modal-main-content'>
                                {/* <div className='modal-main-content-item'>
                                    <div className='text-container'>
                                        <p>Приложение по контролю расходов/доходов</p>
                                    </div>
                                    <div className='img-container'>
                                        <img src={example} alt=""/>
                                    </div>
                                </div>
                                <div className='modal-main-content-item'>
                                    <div className='text-container'>
                                        <p>Приложение по контролю расходов/доходов</p>
                                    </div>
                                    <div className='img-container'>
                                        <img src={example2} alt=""/>
                                    </div>
                                </div>
                                <div className='modal-main-content-item'>
                                    <div className='text-container'>
                                        <p>Приложение по контролю расходов/доходов</p>
                                    </div>
                                    <div className='img-container'>
                                        <img src={example3} alt=""/>
                                    </div>
                                </div> */}
                                <div className='modal-main-content-item'>
                                    <div className='text-container'>
                                        <p>Приложение по контролю расходов/доходов</p>
                                    </div>
                                    <div className='img-container'>
                                        {/* <img src={example3} alt=""/> */}
                                    
                                        <ImageZoom
                                            image={{
                                            // src: '../images/ex-income-small.jpg',
                                            src: 'small-app.jpg',
                                            alt: 'Golden Gate Bridge',
                                            className: 'img',
                                            style: { width: '50em' }
                                            }}
                                            zoomImage={{
                                            src: 'big-app.jpg',
                                            alt: 'Golden Gate Bridge'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : ''
                }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        incomes: state.incomes,
        categories: state.categories,
        date: state.date,
        filtredMonth: state.filtredMonth
        
    }
}

export default connect(mapStateToProps)(Main);