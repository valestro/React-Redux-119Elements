import {combineReducers} from 'redux';
import TopicReducer from './reducer-topics';
import ActiveTopicReducer from './reducer-active-topic';
import ElementReducer from './reducer-elements';
import ActiveElementReducer from './reducer-active-element';
import FooReducer from './reducer-foos';
import ActiveFooReducer from './reducer-active-foo';


// Combine all reducers into a single object before updated data is dispatched (sent) to store.
// The apps state (store) is whatever gets returned from all your reducers.


const allReducers = combineReducers({
    topics: TopicReducer,
    activeTopic: ActiveTopicReducer,
    elements: ElementReducer,
    activeElement: ActiveElementReducer,
    foos: FooReducer,
    activeFoo: ActiveFooReducer
});

export default allReducers
