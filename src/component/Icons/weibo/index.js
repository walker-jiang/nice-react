import React, {Component} from 'react';
import Icon from 'react-svg-loader!./weibo.svg';

export default class Weibo extends Component {
  constructor(props){
    super(props);
  };
  render() {
    let style = this.props.style;
    return (
      <Icon width={style.width} height={style.height} style={{fill: style.fill, cursor: 'pointer', marginLeft:10}}/>
    );
  }
}
