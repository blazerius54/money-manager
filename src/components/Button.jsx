import React, { Component } from 'react';

class DeleteBtn extends Component {
  render() {
    return (
      <div>
      {
        this.props.handleSmth?
          <button 
            onClick={()=>this.props.handleSmth()} 
            className={this.props.text === 'save'? 'default-btn save' : 'default-btn delete '+this.props.class2}>
            <img src={this.props.img} alt=""/>
          </button>:
          <button 
          className={'default-btn disabled'}>
            <img src={this.props.img} alt=""/>
          </button>
      }
      </div>
    )
  }
}

export default DeleteBtn