import React, {Component} from 'react';
import {connect} from 'react-redux';


class FooDetail extends Component {
    render() {
        if (!this.props.foo) {
            return (<div>Select a foo...</div>);
        }
        return (
            <div className="center">
                <h2>{this.props.foo.name}</h2>
            </div>
        );
    }
}

// "state.activeFoo" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        foo: state.activeFoo
    };
}

export default connect(mapStateToProps)(FooDetail);
