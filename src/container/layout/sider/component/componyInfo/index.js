import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import PhoneCircle from 'components/Icons/phone-circle';
import Mail from 'components/Icons/mail';
import Weibo from 'components/Icons/weibo';
import getResource from 'commonFunc/ajaxGetResource';
import matchSubStr from 'commonFunc/matchSubStr';

export default class ComponyInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      title: '', // 弹框的标题
      content: '', // 弹框内容
      componyInfo: null,
    };
    this.handleClose = this.handleClose.bind(this);
  };
  componentWillMount(){
    this.getComponyInfo();
  };
  getComponyInfo(){
    let self = this;
    let params = {
      'url': 'homePage/getCompanyInfo',
      'NativeUrl': 'mockData/componyInfo.json',
      'data': {},
    };
    function success(response){
      if(response.result == 0){
        self.setState({
          componyInfo: response.data
        });
      }else{
        console.log('公司信息查询失败',response);
      }
    };
    function error(response){
      console.log("公司信息查询失败（网络异常）",response);
    };
    getResource(params,success,error);
  };
  handleOpen(type){
    let componyInfo = this.state.componyInfo;
    let title = '';
    let content = '';
    switch(type){
      case 'phone':
        title = '联系电话：';
        content = componyInfo.phone;
      break;
      case 'mail':
        title = '邮箱';
        content = componyInfo.email;
      break;
      case 'weibo':
        title = '微博';
        content = componyInfo.weibo;
      break;
    };
    this.setState({
      open: true,
      title: title,
      content: content,
    });
  };
  handleClose(){
    this.setState({open: false});
  };
  render() {
    let {open, title, content, componyInfo} = this.state;
    console.log(componyInfo);
    const actions = [
      <FlatButton
        label="取消"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return (
      <div style={styles.container}>
        <div style={styles.contact}>
          <div onClick={()=>this.handleOpen('phone')}><PhoneCircle style={{width: 25, height:25, fill: 'gray'}}/></div>
          <div onClick={()=>this.handleOpen('mail')}><Mail style={{width: 23, height:23, fill: 'gray'}}/></div>
          <div onClick={()=>this.handleOpen('weibo')}><Weibo style={{width: 25, height:25, fill: 'gray'}}/></div>
        </div>
      <p><img style={styles.weixin} src={matchSubStr(componyInfo.wechat_qrcode, 'webapp')} /></p>
        <p>公司名称: {componyInfo.name}</p>
        <p>地址：{componyInfo.address}</p>
        <Dialog
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={this.handleClose}
        >
        <p>{title}</p>
        <p>{content}</p>
        </Dialog>
      </div>
    );
  }
}
const styles = {
  container: {
    // border: '3px solid black',
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
    color: '#908a8a'
  },
  contact: {
    paddingLeft: 47,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  weixin: {
    width: 95,
    height: 95,
    marginLeft: 40,
    marginTop: 15
  }
};
