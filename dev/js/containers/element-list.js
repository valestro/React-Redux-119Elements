import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectElement} from '../actions/index';


class ElementList extends Component {

    renderList() {
        return this.props.elements.map((element) => {
            return (
                <li
                    key={element.number}
                    onClick={() => this.props.selectElement(element, 'elements')}
                >
                    {element.name}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="center elListParent">
                <ul className="center elList">
                    {this.renderList()}
                </ul>
            </div>
        );
    }

}

// Get state and pass it as props to ElementList
// Whenever state changes, ElementList will automatically re-render
function mapStateToProps(state) {
    return {
        elements: state.elements
    };
}

// Get actions and pass them as props to ElementList
// ElementList now has this.props.selectElement
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectElement: selectElement}, dispatch);
}

// Returning the smart Container
// ElementList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(ElementList);
