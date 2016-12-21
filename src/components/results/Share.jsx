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
        return document.location.origin + '/#/share/' + encodeURIComponent(JSON.stringify(answers))
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
            

        } catch (err) {
            console.log('Oops, unable to copy');
        }




    }

    render() {

        const { answers } = this.props
        const url = this.toUrl(answers)


        return (
            <div>
                {answers.length > 0 &&


                    

                    <div  className="category">
                        <h3 className="category__title">Copy</h3>
                        <p>Copy and send your results to someone else</p>
                        <p>
                            <a href="#" className="btn" onClick={this.copy}>Copy</a>
                        </p>

                        {this.state.isCopied &&
                            <div>Looks like this was copied</div>
                        }

                        
                        <textarea ref="urlInput" defaultValue={url}></textarea>

                        
                    </div>
                }
            </div>
        )
    }

}

export default Share
