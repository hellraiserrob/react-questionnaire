import React from 'react'
import { shallow } from 'enzyme'
import Answer from '../Answer'
//import Test from '../Test'

describe('<Answer />', () => {

    it('should contain a button', () => {

        let title = 'a title'
        let questionIndex = 0
        let answerIndex = 0

        
        // const test = shallow(<Test />)
        // expect(test.contains('test')).toEqual(true)

        const wrapper = shallow(<Answer title={title} questionIndex={questionIndex} answerIndex={answerIndex} />);
        expect(wrapper.contains(title)).toEqual(true)
        expect(wrapper.find('button').text()).toEqual(title)
        //expect(wrapper.contains('button')).to.equal(true);

    })

})