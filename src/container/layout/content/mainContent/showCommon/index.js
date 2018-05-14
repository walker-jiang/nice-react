import React, {Component, PropTypes} from 'react'; // react核心
import {Card, CardMedia, Paper} from 'material-ui/Card';
import getResource from '../../../../../util/commonFunction/ajaxGetResource';
import fullScrenn from '../../../../../util/commonFunction/fullScreen';
import DotPagination from '../../../../../component/DotPagination';
import '../../../../../component/materialUi/style/card.css';

export default class ShowCommon extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    };
  };
  toggleFull(){
    // console.log(2);
    let fullDom = document.getElementById('img1');
    // fullDom.style.display = 'block';
    fullScrenn(fullDom);
  }
  render() {
    console.log(this.props.location.search);
    return (
      <div style={styles.container}>
        <div style={styles.row}>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={'http://47.94.131.226:8080/DSC_1280.jpg'} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={'http://47.94.131.226:8080/DSC_1280.jpg'} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
        </div>
        <div style={styles.row}>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
        </div>
        <div style={styles.row}>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
        </div>
        <div style={styles.row}>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
          <Card style={styles.card} id='img1' onDoubleClick={()=>this.toggleFull()}>
            <CardMedia>
              <img src={img1} style={styles.img} alt="" />
            </CardMedia>
          </Card>
        </div>
        <DotPagination
          index={this.state.index}
          count={15}
          onDotClick={(index) => this.setState({ index })}
        />
      </div>
    )
  }
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
      margin: 20,
      width: '100%',
      cursor: 'pointer'
  },
  img: {
    width: '100%'
  }
}
