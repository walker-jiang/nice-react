import React, {Component, PropTypes} from 'react'; // react核心
import { Link, Switch, Route } from 'react-router-dom';
// import Carousel from 'antd/lib/carousel';
import '../../../../component/antd/carousel.css';
import getResource from 'commonFunc/ajaxGetResource';

import { Carousel } from 'antd';

var width = document.documentElement.clientWidth || document.body.clientWidth;
console.log(width-250);
const styles = {
  container: {
    width: '100%',
    marginTop: 10,
    // border: '2px solid yellow',
  },
  img: {
    height: (width-250)/16*9/2,
    width: width-250,
    // border: '4px solid blue'
  }
};
export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  componentWillMount(){
    this.getBannerData();
  };
  getBannerData(){
    let self = this;
    let params = {
      'url': 'homePage/getLeftMenu',
      'data': {},
    };
    function success(response){
      if(response.state == 0){
        self.setState({
          menuData: response.data
        });
      }else{
        console.log('菜单查询失败',response);
      }
    };
    function error(response){
      console.log('菜单查询失败（网络异常）',response);
    };
    getResource(params,success,error);
  };
  render() {
    return (
      <div style={styles.container}>
        <Carousel autoplay>
          <div><img src={img1} style={styles.img}/></div>
          <div><img src={img2} style={styles.img}/></div>
          <div><img src={img3} style={styles.img}/></div>
          <div><img src={img4} style={styles.img}/></div>
          <div><img src={img5} style={styles.img}/></div>
        </Carousel>
      </div>
    )
  }
}
