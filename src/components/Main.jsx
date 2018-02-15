import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CategItem from './CategItem';

class Main extends Component {
    render () {
        let totalSpent = this.props.categories.reduce((a, b)=>{
            return a.spent + b.spent
        })

        return (
            <div>
                
                <h2>I`m Main</h2>
                {/* <Link to='/sub-main'><p>Go to sub</p></Link> */}
                {this.props.categories.map((categ, index)=>{
                    return (
                        // <div key={index} className='info'>
                        //     <p>{categ.name}: </p>
                        //     <p>{categ.spent}</p>
                        // </div>
                        <CategItem key={index} index={index} categ={categ} {...this.props}/>
                    )
                })}
                <p>{totalSpent}</p>


            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Main);