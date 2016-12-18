import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Modal extends Component{

    constructor(props){
        super(props)

        this.state = {
            isVisible: false
        }

        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
        this.handleKeyup = this.handleKeyup.bind(this)
    }

    

    addListenter(){
        window.addEventListener("keyup", this.handleKeyup);
    }

    removeListener(){
        window.removeEventListener("keyup", this.handleKeyup);
    }

    handleKeyup(e){
        if(e.keyCode === 27){
            this.hide()
        }
    }

    toggleState(state){
        this.setState({
            isVisible: state
        })
    }

    show(e){
        e.preventDefault()
        this.addListenter()
        this.toggleState(true)
    }
    
    hide(e){
        if(typeof e !== 'undefined'){
            e.preventDefault()
        }
        this.removeListener();
        this.toggleState(false)
    }

    

    render(){

        return (
            <div>
                <a href="#" onClick={this.show}>{this.props.children}</a>
                    
                <ReactCSSTransitionGroup
                    transitionName="modal"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
        
                    {this.state.isVisible &&
                        <div className="modal">
                            <h2 className="modal__title">{this.props.title}</h2>
                            <hr />
                            <p>
                                {this.props.text}
                            </p>
                            <a href="#" onClick={this.hide}>Close</a>
                        </div>
                    }
                </ReactCSSTransitionGroup>
            </div>
            
        )
    }

}

Modal.propTypes = {
    text: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
}


export default Modal