import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

import GR from './util/commonFunction';

const styles = {
  customWidth: {
    width: 150,
  },
};

export default class MyAwesomeReactComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      year: 2015,
      way: 'dayColletion'
    };
    this.sumary = this.sumary.bind(this);
    this.setWay = this.setWay.bind(this);
    this.setYear = this.setYear.bind(this);
  };
  setWay(event, index, way){
    this.setState({way});
  }
  setYear(event, index, year){
    this.setState({year});
  }
  sumary(){
    let {year, way} = this.state;
    console.log(year, way);
    for(let i=1; i<13; i++){
      let param = {
        year: year,
        month: i
      };
      let promise = GR.POST(way, param);
      promise.then(function(data) {
        console.log('成功', data)
      })
      promise.catch(function(error) {
        console.log('request failed', error)
      })
    }
  };
  render() {
    let {year, way} = this.state;
    // console.log(config_service_url);
    return (
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <SelectField
          floatingLabelText="汇总方式"
          value={way}
          onChange={this.setWay}
          autoWidth={true}
        >
          <MenuItem value={'dayColletion'} primaryText="日汇总" />
          <MenuItem value={'monthColletion'} primaryText="月汇总" />
          <MenuItem value={'activeColletion'} primaryText="活卡率" />
        </SelectField>

        <br/>

        <SelectField
          floatingLabelText="年份"
          value={year}
          onChange={this.setYear}
          autoWidth={true}
        >
          <MenuItem value={2015} primaryText="2015" />
          <MenuItem value={2016} primaryText="2016" />
          <MenuItem value={2017} primaryText="2017" />
          <MenuItem value={2018} primaryText="2018" />
          <MenuItem value={2019} primaryText="2019" />
        </SelectField>

        <br/>

        <RaisedButton label="开始汇总" secondary={true} onClick={this.sumary}/>
      </div>
    );
  }
}
