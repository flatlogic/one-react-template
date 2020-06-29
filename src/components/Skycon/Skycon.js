import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Skycons = require('skycons')(window || {});

class Skycon extends React.Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool,
    icon: PropTypes.oneOf([  // eslint-disable-line
      'CLEAR_DAY',
      'CLEAR_NIGHT',
      'PARTLY_CLOUDY_DAY',
      'PARTLY_CLOUDY_NIGHT',
      'CLOUDY',
      'RAIN',
      'SLEET',
      'SNOW',
      'WIND',
      'FOG',
    ]),
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  };

  static defaultProps = {
    color: null,
    autoPlay: true,
    width: '100%',
    height: '100%',
  };

  constructor(props) {
    super(props);

    this.state = {
      skycons: new Skycons({ color: this.props.color }),
    };
  }

  componentDidMount() {
    const { skycons } = this.state;
    skycons.add(ReactDOM.findDOMNode(this), Skycons[this.props.icon]); // eslint-disable-line

    if (this.props.autoPlay) {
      skycons.play();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state.skycons.set(ReactDOM.findDOMNode(this), Skycons[nextProps.icon]); // eslint-disable-line
  }

  play() {
    this.state.skycons.play();
  }

  pause() {
    this.state.skycons.pause();
  }

  render() {
    const {
      ...restPops
    } = this.props;

    return (
      <canvas width={this.props.width} height={this.props.height} {...restPops} />
    );
  }
}

export default Skycon;
