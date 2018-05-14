import React, {Component, PropTypes} from 'react'; // react核心
import {  Switch, Route } from 'react-router-dom';

import ShowCommon from './showCommon';
import Show360 from './show360';

export default class MainContent extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  render() {
    return (
      <div>
      {
        <Switch>
          <Route path='/' component={Show360} exact></Route>
          <Route path='/common' component={ShowCommon} exact></Route>
        </Switch>
      }
      </div>
    )
  }
}
