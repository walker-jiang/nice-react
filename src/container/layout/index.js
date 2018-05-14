import React, {Component} from 'react';

import Sider from './sider';
// import Content from './content';
import BackToTop from 'react-back-top';

export default class Layout extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.top}>
          <Sider />
          {
            // <Content />
            // <BackToTop shape="round" color='gray' hover={{boxShadow:'rgba(0, 0, 0, 0.42) 1px 2px 4px'}} background='white' icon="material-icons md-18 ^" position={{ bottom: '30%', right: '5%' }}>
            // </BackToTop>
          }
        </div>
      </div>
    );
  }
}
const styles = {
  container: {
    width: '100%',
  },
  top: {
    display: 'flex',
    flexDirection: 'row'
  }
}
