import React, {Component} from 'react';

import SystemProps from './component/systemProps';
import MenuS from './component/menu';
import ComponyInfo from './component/componyInfo';

export default class Sider extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  render() {
    return (
      <div style={styles.container}>
          <div>
            {
              // <SystemProps />
            }
            {
              // <MenuS />
            }
          </div>
          <div style={styles.bottom}>
            <ComponyInfo />
          </div>
      </div>
    );
  }
}
const styles = {
  container: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "250px",
    height: '100%',
  },
  bottom: {
    display: 'flex',
    flex: 1,
    // border: '1px solid red',
    flexDirection: 'column',
    justifyContent: 'center',
  }
};
