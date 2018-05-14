import React, {Component, PropTypes} from 'react'; // react核心
import Dots from 'material-ui-dots';

import './index.css';
// 黑点分页封装了
export default class DotPagination extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    };
    // this.dotClick = this.dotClick.bind(this);
  };
  dotClick(index){
    // console.log(index);
    this.props.onDotClick(index);
  }
  render() {
    let {index, count} = this.props;
    return (
      <Dots
        index={index}
        count={count}
        onDotClick={(index)=>{this.dotClick(index)}}
      />
    )
  }
}
