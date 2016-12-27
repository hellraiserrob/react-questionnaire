import React, { Component } from 'react'
import { Link } from 'react-router'


class Flasher extends Component {

    constructor(props){

        super(props)

        this.state = {
            style: {
                opacity: 0
            }
        }

        let isOn = true

        this.on = this.on.bind(this)
        this.off = this.off.bind(this)
        this.tick = this.tick.bind(this)



        window.setTimeout(()=>{
            this.tick()
        }, this.props.delay)


    }

    tick(){
        window.setTimeout(()=>{
            if(this.isOn){
                this.off()
            }
            else {
                this.on()
            }
            this.tick()
        }, this.props.duration)
    }

    on(){
        this.setState({
            style: {
                opacity:1
            }
        })
        this.isOn = true
    }
    
    off(){
        this.setState({
            style: {
                opacity:0
            }
        })
        this.isOn = false
    }

    render() {

        const { children } = this.props

        return (
            <div className="flasher" style={this.state.style}>
                {children}
            </div>
        )
    }
}

export default Flasher
