import React, {Component} from 'react';

var height = document.documentElement.clientHeight || document.body.clientHeight;
import Logo from './logo.png';

export default class SystemProps extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  render() {
    return (
      <div style={styles.container}>
        <img src={Logo} />
      </div>
    );
  }
}
const styles = {
  container: {
    marginTop: height/15,
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
