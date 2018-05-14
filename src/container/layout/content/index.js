import React, {Component, PropTypes} from 'react'; // react核心
import {  Switch, Route } from 'react-router-dom';

import Header from './header';
import MainContent from './mainContent';
import Footer from './footer';

var width = document.documentElement.clientWidth || document.body.clientWidth;
var height = document.documentElement.clientHeight || document.body.clientHeight;

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  render() {
    return (
      <div style={styles.container}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}
const styles = {
  container: {
    position: 'absolute',
    left: 250,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // border: '3px solid red'
  }
};
