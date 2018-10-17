import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFoo} from '../actions/index';


class FooList extends Component {

    renderList() {
        return this.props.foos.map((foo) => {
            return (
                <li
                    key={foo.id}
                    onClick={() => this.props.selectFoo(foo, 'foos')}
                >
                    {foo.name}
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

function mapStateToProps(state) {
    return {
        foos: state.foos
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectFoo: selectFoo}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FooList);
