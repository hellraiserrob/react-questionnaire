import React, {Component} from 'react';
import Scores from './Scores'
import Numbers from './Numbers'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Categories extends Component {
    render() {

        const { categories, answers } = this.props

        return (
            <div>
                {categories.map((category)=>{

                    return <div className="box" key={category.id}>

                        <div className="">
                        
                            <h4 className="mb0">{category.name}</h4>
                            {/*<p className="">{category.description}</p>
                            <hr />*/}

                        </div>
                        
                        <ReactCSSTransitionGroup
                            transitionName="fade"
                            transitionAppear={true}
                            transitionAppearTimeout={300}
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>

                            {/*<Scores 
                                key={category.id}
                                categoryId={category.id}
                                questions={category.questions}
                                answers={answers}
                            />*/}

                            

                            <Numbers 
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