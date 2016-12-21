import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import QuestionContainer from './containers/QuestionContainer';

import StartContainer from './containers/StartContainer.jsx';
import ResultsContainer from './containers/ResultsContainer.jsx'
import ShareContainer from './containers/ShareContainer.jsx'
import NoMatch from './components/other/NoMatch'


export default (
    <Route path="/" component={App}>
        <IndexRoute component={StartContainer}/>
        <Route path="start" component={StartContainer} />
        <Route path="questions" component={QuestionContainer} />
        <Route path="results" component={ResultsContainer} />
        <Route path="share/:answers" component={ShareContainer} />
        <Route path="*" component={NoMatch}/>
    </Route>
)