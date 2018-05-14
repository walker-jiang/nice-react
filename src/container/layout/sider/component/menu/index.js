import React, {Component} from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import MemuItem from 'components/menu';
import getResource from 'commonFunc/ajaxGetResource';

export default class MenuS extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuData: null,
      activeIndex: 0
    };
    this.activeMenu = this.activeMenu.bind(this);
  };
  componentWillMount(){
    this.getMenuData();
  };
  getMenuData(){
    let self = this;
    let params = {
      'url': 'mockData/menu.json',
      'NativeUrl': 'mockData/menu.json',
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
  activeMenu(index){
    this.setState({
      activeIndex: index
    });
  };
  render() {
    let {menuData, activeIndex} = this.state;
    // let menuArr = this.getMenuArr(menuData);
    const StyledLink = styled(Link)`
      text-decoration: none;
      &:focus, &:hover, &:visited, &:link, &:active {
          text-decoration: none;
      }
    `;
    return (
      <div style={styles.container}>
          {
            (menuData == null)? '':
            menuData.map((item, index)=>{
              return(
                <StyledLink
                  to={{
                    pathname: (item.id=='7c6fa3901bf14bb780ea44cf95a5b439')?'/':'/common',
                    search: '?name=' + item.id,
                    // hash: '#the-hash',
                  }}
                  style={{textDecoration:'none !important'}}
                  key={index}
                >
                  <MemuItem activeMenu={this.activeMenu} title={item.name} className={(index==activeIndex)?'active':'inactive'} index={index}/>
                </StyledLink>
              )
            })
          }
      </div>
    );
  }
}
const styles = {
  container: {
    // border: '3px solid blue',
    marginTop: '10px',
    marginBottom: '15px',
    width: '200px',
  }
};
