import React, {Component} from 'react';
import Scores from './Scores'


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
                        
                        <Scores 
                            key={category.id}
                            categoryId={category.id}
                            questions={category.questions}
                            answers={answers}
                         />
                         
                    </div>

                })}
            </div>
        );
    }
}

export default Categories;