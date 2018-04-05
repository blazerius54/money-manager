import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
        }
    }

    componentDidMount() {
        window.addEventListener('click', (e) => {
            if (e.target === this.modalMain) {
                this.setState({
                    isModalVisible: false
                })
            }
        })
    }

    render() {
        return (
            <div>
                <span onClick={() => this.setState({ isModalVisible: true })} className='about'>?</span>

                {
                    this.state.isModalVisible ?
                        <div className='modal'
                            // onClick={()=>this.setState({isModalVisible: false})}
                            ref={ref => { this.modalMain = ref }}
                        >
                            <div className='modal-main' >
                                <div className='close' ><span onClick={() => this.setState({ isModalVisible: false })}>x</span></div>
                                <div className='modal-main-content'>
                                    {/* <div className='modal-main-content-item'> */}
                                        <div className='text-container'>
                                            <p>Приложение по контролю расходов/доходов. Заносите свои расходы в соотвутсвуюущую категорию. Указывайте описание траты и сумму. Баланс отображается на главном экране.</p>
                                        </div>
                                        <div className='img-container'>

                                            <ImageZoom
                                                image={{
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
                                    {/* </div> */}
                                </div>
                            </div>
                        </div> : ''
                }
            </div>
        )
    }
}

export default Modal