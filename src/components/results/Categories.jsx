import React, {Component} from 'react';
import Scores from './Scores'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Categories extends Component {
    render() {

        const { categories, answers } = this.props

        return (
            <div>
                {categories.map((category)=>{

                    return <div key={category.id}>

                        <div className="category">
                        
                            <h3 className="category__title">{category.name}</h3>
                            <p className="category__copy">{category.description}</p>
                            <hr />

                        </div>
                        
                        <ReactCSSTransitionGroup
                            transitionName="fade"
                            transitionAppear={true}
                            transitionAppearTimeout={300}
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>

                            <Scores 
                                key={category.id}
                                categoryId={category.id}
                                questions={category.questions}
                                answers={answers}
                            />

                        </ReactCSSTransitionGroup>
                         
                    </div>

                })}
            </div>
        );
    }
}

export default Categories;