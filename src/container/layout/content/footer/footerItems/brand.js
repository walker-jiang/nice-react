import React, {Component} from 'react';


var width = document.documentElement.clientWidth || document.body.clientWidth;

export default class Brand extends Component {
  render() {
    return (
      <div style={styles.container}>
          <div style={styles.row}>
            <img style={styles.img} src={Person1}/>
            <img style={styles.img} src={Person2}/>
            <img style={styles.img} src={Person3}/>
            <img style={styles.img} src={Person4}/>
          </div>
          <div style={styles.row}>
            <img style={styles.img} src={Person5}/>
            <img style={styles.img} src={Person6}/>
            <img style={styles.img} src={Person7}/>
            <img style={styles.img} src={Person8}/>
          </div>
      </div>
    );
  }
}
const styles = {
  container: {
    width: width-330,
    height: 320,
    // border: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    display: 'flex',
    width: '85%',
    // border:　'1px solid red',
    justifyContent: 'space-around'
  },
  img: {
    width: width/20,
    height: width/20,
    margin: '20px 0px'
  }
};
