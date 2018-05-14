import React, {Component} from 'react';

import './index.css';
export default class MenuItem extends Component {
  constructor(props){
    super(props);
    this.activeMenu = this.activeMenu.bind(this);
  };
  activeMenu(){
    this.props.activeMenu(this.props.index);
  };
  render() {
    let {title, className} = this.props;
    return (
      <div style={styles.container} className={className} onClick={this.activeMenu}>
      {title}
      </div>
    );
  }
}
const styles = {
  container: {
    padding: 5,
    paddingLeft: 40,
    fontSize: 18,
    // textAlign: 'center',
  }
}
