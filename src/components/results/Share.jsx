import React, { Component } from 'react'
import ReactDom from 'react-dom'
//import { Link } from 'react-router'

class Share extends Component {

    constructor(props) {

        super(props)

        this.state = {
            isCopied: false
        }

        this.copy = this.copy.bind(this)

    }

    toUrl(answers) {
        return document.location.origin + document.location.pathname + '/#/share/' + encodeURIComponent(JSON.stringify(answers))
    }

    copy(e) {

        e.preventDefault()

        // const { answers } = this.props
        // const url = this.toUrl(answers)

        // console.log(`copy this: ${url}`)

        ReactDom.findDOMNode(this.refs.urlInput).select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);

            this.setState({
                isCopied: true
            })

            this.hideTooltip()
            

        } catch (err) {
            console.log('Oops, unable to copy');
        }




    }

    hideTooltip(){
        setTimeout(()=>{
            this.setState({
                isCopied: false
            })
        },1000)
    }

    render() {

        const { answers } = this.props
        const url = this.toUrl(answers)


        return (
            <div className="relative inline-block">
                
                <a href="#" className="btn btn--submit" onClick={this.copy}>share</a>
                {this.state.isCopied &&
                    <div className="tooltip">Copied.</div>
                }        
                <textarea ref="urlInput" defaultValue={url}></textarea>
                
            </div>
        )
    }

}

export default Share
