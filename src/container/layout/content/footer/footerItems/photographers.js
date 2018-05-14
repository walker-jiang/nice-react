import React, {Component} from 'react';

import getResource from 'commonFunc/ajaxGetResource';
import matchSubStr from 'commonFunc/matchSubStr';

var width = document.documentElement.clientWidth || document.body.clientWidth;

export default class Photographers extends Component {
  constructor(props){
    super(props);
    this.state = {
      peopleData: [],
    };
  };
  componentWillMount(){
    this.getPeopleData();
  };
  getPeopleData(){
    let self = this;
    let params = {
      'url': 'homePage/getPersonInfo',
      'data': {},
    };
    function success(response){
      if(response.state == 0){
        self.setState({
          peopleData: response.data
        });
      }else{
        console.log('人员查询失败',response);
      }
    };
    function error(response){
      console.log('人员查询失败（网络异常）',response);
    };
    getResource(params,success,error);
  };
  render() {
    let peopleData = this.state.peopleData;
    console.log(matchSubStr(peopleData.image, 'webapp'));
    return (
      <div style={styles.container}>
        <div style={styles.left}>
          <div>
            <img style={styles.img} src={matchSubStr(peopleData[0].image, 'webapp')}/>
          </div>
          <div style={styles.bottom}>主要作品： {peopleData[0].produce}</div>
        </div>

        <div style={styles.right}>
          <div >
            <img style={styles.img} src={matchSubStr(peopleData[1].image, 'webapp')}/>
          </div>
          <div style={styles.bottom}>主要作品： {peopleData[1].produce}</div>
        </div>
      </div>
    );
  }
}
const styles = {
  container: {
    width: width-330,
    // height: 320,
    // border: '1px solid red',
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    width: '10%',
  },
  left: {
    width: '45%',
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    width: '45%',
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: (width-250)/4,
    height: (width-250)/4/4*3,
  },
  bottom: {
    margin: 5,
    // border: '1px solid red',
    color: '#c1bebe',
    textAlign: 'center',
    fontSize: width/90,
  }
};
