import React, { Component } from 'react';
import Answer from './Answer';


class AnswerList extends Component {
    
    render() {
    
        let list = this.props.answers.map((answer, index) => {
            return <Answer 
                        setAnswer={this.props.setAnswer}
                        questionIndex={this.props.questionIndex}
                        key={index}
                        index={index}
                        value={answer.value}
                        title={answer.title} />
        }); 

        return(
            <ul>
                {list}
            </ul>
        )

    }
}

export default AnswerList;