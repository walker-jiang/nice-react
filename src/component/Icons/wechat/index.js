import React, {Component} from 'react';
import Icon from 'react-svg-loader!./wechat.svg';

export default class Wechat extends Component {
  constructor(props){
    super(props);
  };
  render() {
    let style = this.props.style;
    return (
      <Icon width={style.width} height={style.height} style={{fill: style.fill, cursor: 'pointer', margin:2}}/>
    );
  }
}
