import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Tooltip extends Component{

    constructor(props){
        super(props)

        this.state = {
            isVisible: false
        }

        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }

    handleMouseOver(){
        this.setState({
            isVisible: true
        })
    }
    
    handleMouseOut(){
        this.setState({
            isVisible: false
        })
    }

    handeClick(e){
        e.preventDefault()
    }

    

    render(){

        return (
            <a 
                className="tooltip" 
                onClick={this.handleClick} 
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                {this.props.children}
                
                <ReactCSSTransitionGroup
                    transitionName="tooltip"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}>
        


                    {this.state.isVisible &&
                            <span className="tooltip__text">
                                <h4 className="tooltip__title">{this.props.title}</h4>
                                <hr />
                                {this.props.text}
                            </span>
                    }
                </ReactCSSTransitionGroup>
            </a>
        )
    }

}

Tooltip.propTypes = {
    text: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
}


export default Tooltip