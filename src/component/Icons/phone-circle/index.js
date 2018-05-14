import React, {Component} from 'react';
import Icon from 'react-svg-loader!./phone-circle.svg';

export default class PhoneCircle extends Component {
  constructor(props){
    super(props);
  };
  render() {
    let style = this.props.style;
    return (
      <Icon width={style.width} height={style.height} style={{fill: style.fill, cursor: 'pointer', marginLeft: -5}}/>
    );
  }
}
