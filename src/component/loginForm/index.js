import React, {Component} from 'react';
import { createForm, formShape } from 'rc-form';
import { history } from "react-router-dom";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  onSubmit = () => {
    let self = this;
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      let { history } = self.props;
      console.log(history);
    });
  }
  reset = (e) => {
    this.props.form.resetFields();
  };
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <Paper style={styles.container}>
        <TextField
          {...getFieldProps('username',{
            initialValue: '',
            rules: [
              {required: true}
            ]
          })}
          hintText="登录名"
          errorText={getFieldError('username')?'登陆名不能为空':null}
        />
        <br />
        <TextField
          {...getFieldProps('password',{
            initialValue: '',
            rules: [
              {required: true}
            ]
          })}
          hintText="登录密码"
          type="password"
          errorText={getFieldError('password')?'密码不能为空':null}
        />
        <br />
        <RaisedButton
          label="登录"
          onClick={this.onSubmit}
          style={styles.button}
          primary={true}
        />
        <br />
        <div style={styles.bottom}>
          <span style={styles.reg}>注册</span>
          <span style={styles.reg}>?忘记密码</span>
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
  bottom: {
    color: '#00838F',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  reg: {
    cursor: 'pointer'
  }
}

export default createForm()(LoginForm);
