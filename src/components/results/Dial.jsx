import React, { Component } from 'react';
import { arc } from "d3-shape";
import { scaleLinear } from "d3-scale";





class Dial extends Component {


    getPercent(total, possible){
        return Math.round(total / possible * 100)
    }

    render() {

        const {title, total, possible} = this.props
        const percent = this.getPercent(total, possible)
        const startAngle = -1 * Math.PI / 1; // - 60deg
        const endAngle = Math.PI / 1; // 60deg

        //Create an arc path for dial
        const dial = arc()
            .startAngle(startAngle)
            .endAngle(endAngle)
            .innerRadius(130)
            .outerRadius(150);

        //Create a scale for using with arc
        const scale = scaleLinear()
            .domain([0, 100]) // Adjust the values according to your data
            .range([startAngle, endAngle]);

        const width = 300;
        const height = 300;
        
        const transform = `translate(${width * 0.5},${0.5 * height})`;
        const current = (x) => dial.endAngle(scale(x))(); // get arc path for given value

        

        return (
            
            <div className="dial">

                <svg viewBox={`0 0 ${width} ${height}`}>
                    <path className="possible" d={dial()} transform={transform} />
                    <path className="total" d={current(percent)} transform={transform} />
                    <text className="percent" x={width / 2} y={height / 2 + 20}>{this.getPercent(total, possible)}%</text>
                    <text className="summary" x={width / 2} y={height / 2 + 60}>{title}</text>
                </svg>
            </div>
        
        );
    }
}

export default Dial;