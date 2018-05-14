import React, {Component} from 'react';
import Icon from 'react-svg-loader!./top.svg';

export default class Top extends Component {
  constructor(props){
    super(props);
  };
  render() {
    let style = this.props.style;
    return (
      <Icon width={style.width} height={style.height} style={{fill: style.fill}}/>
    );
  }
}
