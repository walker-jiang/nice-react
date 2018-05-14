import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import Top from '../Icons/top';
export default class BackTop extends Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  };
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  };
  handleScroll = () => {
    console.log(1);
    // const scrollY = currentYPosition();
    // const show = scrollY > this.props.topDistance;
    // const { opacity } = this.state.style;
    // if (opacity === 0 && show) {
    //   this.setState({
    //     ...this.state,
    //     style: {
    //       ...this.state.style,
    //       opacity: 1,
    //       zIndex: 1000,
    //     },
    //   });
    // } else if (opacity === 1 && !show) {
    //   this.setState({
    //     ...this.state,
    //     style: {
    //       ...this.state.style,
    //       opacity: 0,
    //       zIndex: -1,
    //     },
    //   });
    // }
  }
  render() {
    return (
      <Paper style={styles.container} circle={true} zDepth={3}>
        <Top style={{width: 30, height:30, fill: 'rgb(193, 188, 188)'}}/>
      </Paper>
    );
  }
}
const styles = {
  container: {
    width: 40,
    height: 40,
    position: 'fixed',
    right: 20,
    bottom: 40,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
