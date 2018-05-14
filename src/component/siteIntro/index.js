import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Logo from './logo.png';

export default class SiteIntro extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  render() {
    return (
      <Paper style={styles.container}>
        <img src={Logo}  style={styles.logo}/>
        <div>河北省社保卡监测系统</div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          河北省公共资源交易公共服务平台由河北省公共
          资源交易监督办公室建设，对接互联我省各级公共资源
          电子交易平台、综合监督平台和国家公共资源交易服务
          平台，实现全省公共资源交易平台的开放交互、动态聚
          合、信息共享、一体融合，为市场主体提供注册登记和
          交易服务，为行政监督部门提供监督数据通道和信息分
          析服务。
        </p>
      </Paper>
    );
  }
}
const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '-webkit-linear-gradient(right bottom, rgba(255,0,0,0),rgba(100,100,100,1))'
  },
  logo: {
    width: 100
  }
}
