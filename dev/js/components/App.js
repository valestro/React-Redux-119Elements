import React from 'react';
import TopicList from '../containers/topic-list';
import TopicDetails from '../containers/topic-detail';

const App = () => (
    <div>
        <div>
            <TopicList />
        </div>
        <TopicDetails />
    </div>
);

export default App;