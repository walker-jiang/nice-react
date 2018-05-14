import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Cached from 'material-ui/svg-icons/action/cached';

import LoginForm from '../../component/loginForm';
import SiteIntro from '../../component/SiteIntro';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  render() {
    return (
      <Paper style={styles.container}>
        <Paper style={styles.window}>
          <Paper style={styles.winLeft} transitionEnabled={true}>
            <SiteIntro />
          </Paper>
          <FloatingActionButton mini={true} >
            <Cached />
          </FloatingActionButton>
          <Paper style={styles.winRight}>
            <LoginForm />
          </Paper>
        </Paper>
      </Paper>
    );
  }
}
const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '-webkit-linear-gradient(left top, rgba(255,0,0,0),rgba(100,100,100,1))'
  },
  window: {
    width: '50%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  winLeft: {
    width: '50%',
    height: '100%',
  },
  winRight: {
    width: '50%',
    height: '100%',
  }
}
