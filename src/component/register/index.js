import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  render() {
    return (
      <Paper style={styles.container}>
        <TextField
          hintText="登录名"
        />
        <br />
        <TextField
          hintText="登录密码"
          type="password"
        />
        <br />
        <RaisedButton
          label="注册"
          style={styles.button}
          primary={true}
        />
        <br />
        <div style={styles.forgetPass}>
          <span>注册</span>
          <span>?忘记密码</span>
        </div>
      </Paper>
    );
  }
}
const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '-webkit-linear-gradient(left bottom, rgba(255,0,0,0),rgba(100,100,100,1))'
  },
  button: {
    width: '35%'
  },
  forgetPass: {
    color: '#00838F',
    width: '100%',
    display: 'flex',
    // alignItems: 'flex-end',
    justifyContent: 'space-around'
  }
}
