//import {  } from '../constants/questionTypes';

// const initialState = {
//     questions: [{
//         id: 1,
//         title: 'Question 1',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
//         answers: [{
//             id: 1,
//             title: 'A',
//             value: 1
//         },{
//             id: 2,
//             title: 'B',
//             value: 2
//         }]
//     }, {
//         id: 2,
//         title: 'Question 2',
//         description: 'Ipsum dolor sit amet, consectetur adipisicing elit',
//         answers: [{
//             id: 1,
//             title: 'A',
//             value: 1
//         },{
//             id: 2,
//             title: 'B',
//             value: 2
//         },{
//             id: 3,
//             title: 'C',
//             value: 3
//         }]
//     }]
// };



// const initialState = {
//     categories: [{
//         id: 1,
//         name: 'Category 1',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore totam ad laboriosam, omnis dolores provident accusamus quod. Reiciendis hic quia, quasi odio corporis, amet ea corrupti asperiores dignissimos, illum a!',
//         questions: [{
//             id: 1,
//             title: 'Question 1',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
//             answers: [{
//                 id: 1,
//                 title: 'What are you talking about',
//                 value: 1
//             },{
//                 id: 2,
//                 title: 'Another option',
//                 value: 2
//             }]
//         },{
//             id: 2,
//             title: 'Question 2',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
//             answers: [{
//                 id: 1,
//                 title: 'What are you talking about',
//                 value: 1
//             },{
//                 id: 2,
//                 title: 'Another option',
//                 value: 2
//             }]
//         }]
//     },{
//         id: 2,
//         name: 'Category 2',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore totam ad laboriosam, omnis dolores provident accusamus quod. Reiciendis hic quia, quasi odio corporis, amet ea corrupti asperiores dignissimos, illum a!',
//         questions: [{
//             id: 1,
//             title: 'Question 1',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
//             answers: [{
//                 id: 1,
//                 title: 'What are you talking about',
//                 value: 1
//             },{
//                 id: 2,
//                 title: 'Another option',
//                 value: 2
//             }]
//         }]
//     }]
// }



import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS, RECEIVE_QUESTIONS_ERROR } from '../constants/questionTypes';

const initialState = {
    categories: [],
    isFetching: false,
    isError: false
}

function questionReducer(state = initialState, action) {


    switch (action.type) {

        case REQUEST_QUESTIONS: {

            return Object.assign({}, state, {
                isFetching: true
            })
        }

        case RECEIVE_QUESTIONS: {
            return Object.assign({}, state, {
                isFetching: false,
                categories: action.payload.categories,
                lastUpdated: action.receivedAt
            })
        }
        
        case RECEIVE_QUESTIONS_ERROR: {
            return Object.assign({}, state, {
                isFetching: false,
                categories: [],
                isError: true
            })
        }

        default: {
            return state;
        }
    }



}

export default questionReducer;