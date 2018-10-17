import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFoo} from '../actions/index';
import {selectElement} from '../actions/index';


class TopicList extends Component {

    constructor(){
        super();
        this.state = {
            popover:true
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    hide (){
        this.setState({
            popover: false
        });
    }

    show (){
        this.setState({
            popover: true
        });
    }

    // Check which html to render
    renderList(){
        return this.props.topics.map((topic) => {
            switch (topic.name) {
                case 'elements':
                    return (
                        <li
                            key={topic.id}
                            onClick={() => this.props.selectElement(this.props.elements, topic.name)}
                        >
                            {topic.name}
                        </li>
                    );
                    break;
                case 'foos':
                    return (
                        <li
                            key={topic.id}
                            onClick={() => this.props.selectFoo(this.props.foos, topic.name)}
                        >
                            {topic.name}
                        </li>
                    );
                    break;
            }
        });
    }

    renderNone(){
        return(
            <div className="center elListParent popover">
                <ul className="center elList" id="topicList" onClick={this.show}>
                    <li>
                        <div id="showButtonParent">
                            <button id="showButton" className="circle" onClick={this.show}>
                                &#x2630;
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        if(this.state.popover){
            return (
                <div className="center">
                    <div className="center elListParent popover">
                        <ul className="center elList" id="topicList" onClick={this.hide}>
                            <li id="hideButton">
                                <button className="hide circle" onClick={this.hide}>X</button>
                            </li>
                            {this.renderList()}
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="center">
                    {this.renderNone()}
                </div>
            );
        }
    }

}

function mapStateToProps(state) {
    return {
        topics: state.topics,
        elements: state.elements,
        foos: state.foos
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({ selectElement: selectElement,
                                selectFoo: selectFoo
                               }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TopicList);
