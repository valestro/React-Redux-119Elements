import React, {Component} from 'react';
import {connect} from 'react-redux';


class ElementDetail extends Component {

    render() {
        if (this.props.element.length === 119) {
            return (
                <div className="center">
                    <p>Select 1 of the 119 known elements.</p>
                    <iframe className="padR10" width="260" height="150" src="https://www.youtube.com/embed/6ZBwluyR2Tc" frameBorder="0" allowFullScreen>ytVid</iframe>
                </div>
            );
        }

        return (
            <div className="center" id="elDetailContainer">
                <iframe className="padR10" width="260" height="150" src={this.props.element.video} frameBorder="0" allowFullScreen>ytVid</iframe>

                <div className="elDetailParent">
                    <p>{this.props.element.summary}</p>
                    <div className="elDetail">
                        <h2 className="padR10">{this.props.element.name}
                        <br/>
                        <span className="padR10 elAppearanceText">{this.props.element.appearance}</span>
                        </h2>
                        <table className="padR10 center">
                          <tr>
                            <th>Atomic Mass |</th>
                            <th>Symbol |</th>
                            <th>Number</th>
                          </tr>
                          <tr>
                            <td>{this.props.element.atomic_mass}</td>
                            <td>{this.props.element.symbol}</td>
                            <td>{this.props.element.number}</td>
                          </tr>
                        </table>
                        <table className="center padR10">
                          <tr>
                            <th>Boil |  </th>
                            <th>Density |</th>
                            <th>Melt</th>
                          </tr>
                          <tr>
                            <td>{this.props.element.boil}</td>
                            <td>{this.props.element.density}</td>
                            <td>{this.props.element.melt}</td>
                          </tr>
                        </table>
                        <table className="center padR10">
                          <tr>
                            <th>Category |  </th>
                            <th>Phase |</th>
                            <th>Shells</th>
                          </tr>
                          <tr>
                            <td>{this.props.element.category}</td>
                            <td>{this.props.element.phase}</td>
                            <td>{this.props.element.shells}</td>
                          </tr>
                        </table>
                        <a href={this.props.element.source} target="_blank">Wiki Source</a>
                        <img className="padR10" src={this.props.element.spectral_img_src} />
                    </div>
                </div>
            </div>
        );
    }
}

// "state.activeElement" in reducers/index.js
function mapStateToProps(state) {
    return {
        element: state.activeElement
    };
}

export default connect(mapStateToProps)(ElementDetail);





