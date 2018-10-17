import React, {Component} from 'react';
import {connect} from 'react-redux';
import FooList from '../containers/foo-list';
import FooDetails from '../containers/foo-detail';
import ElementList from '../containers/element-list';
import ElementDetails from '../containers/element-detail';


class TopicDetail extends Component {

    render() {
        if (!this.props.topic) {
            return (<div></div>);
        }

        switch (this.props.topic['topicName']) {
            case 'elements':
                return (
                    <div>
                        <ElementList />
                        <hr />
                        <ElementDetails />
                    </div>
                );
                break;
            case 'foos':
                return (
                    <div>
                        <FooList />
                        <hr />
                        <FooDetails />
                    </div>
                );
                break;
        }
    }

}

function mapStateToProps(state) {
    return {
        topic: state.activeTopic,
        element: state.elements
    };
}

export default connect(mapStateToProps)(TopicDetail);
