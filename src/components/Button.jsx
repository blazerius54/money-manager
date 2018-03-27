import React, { Component } from 'react';

class DeleteBtn extends Component {
  render() {
    return (
      <button 
      onClick={()=>this.props.handleSmth()} 
      className={this.props.text === 'save'? 'default-btn save' : 'default-btn delete'}>
        <img src={this.props.img} alt=""/>
      </button>
    )
  }
}

export default DeleteBtn