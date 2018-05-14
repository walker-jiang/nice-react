import React, {Component, PropTypes} from 'react'; // react核心
import {Card, CardMedia, CardText, CardHeader, Paper} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import Rotation from 'react-rotation';
import '../../../../../component/materialUi/style/card.css';
import DotPagination from '../../../../../component/DotPagination';

import fullScrenn from '../../../../../util/commonFunction/fullScreen';
import './index.css';

var width = document.documentElement.clientWidth || document.body.clientWidth;
let canvasWidth = (width-250)/2;
export default class Show360 extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      picPath:[{
        img1: 'http://47.94.131.226:8080/sso/DSC_8809-2.jpg',
        img2: 'http://47.94.131.226:8080/sso/DSC_8811.jpg',
        img3: 'http://47.94.131.226:8080/sso/DSC_8813.jpg',
        img4: 'http://47.94.131.226:8080/sso/DSC_8829.jpg',
        img5: 'http://47.94.131.226:8080/sso/DSC_8841.jpg.jpg',
        img6: 'http://47.94.131.226:8080/sso/DSC_8852.jpg',
        img7: 'http://47.94.131.226:8080/sso/DSC_8860.jpg',
        img8: 'http://47.94.131.226:8080/sso/DSC_8866.jpg',
      }]
    };
  };
  componentDidMount(){
    let canvas = this.refs.canvas;
    let imgContainer = document.getElementsByClassName('rotation');
    let imgNode = document.createElement('img');
    // imgContainer.appendChild();
    let test1 = document.getElementById('test1');
    let test2 = document.getElementById('test2');
    let test3 = document.getElementById('test3');
    console.log(imgNode);
    var imgObj = imgNode;
    var imgObj2 = imgNode;
    var imgObj3 = imgNode;
    imgObj.src = 'http://47.94.131.226:8080/DSC_1280.jpg';
    imgObj2.src = 'http://47.94.131.226:8080/DSC_1280.jpg';
    imgObj3.src = 'http://47.94.131.226:8080/DSC_1280.jpg';
    imgObj.alt = '图片加载中。。';
    if(canvas.getContext){
      let context = canvas.getContext("2d"); // 绘图容器上下文
      imgObj.onload = function(){// 待图片加载完后，将其显示在canvas上
        let rate = 4/3;
        let widthImg = 420;
        let heightImg = 320;
        console.log(widthImg,heightImg);
        context.drawImage(imgObj,0,0,imgObj.width,imgObj.height,40,40,canvasWidth,canvasWidth/4*3);// 通过坐标位置上移来缝合
      };
      imgObj2.onload = function(){// 待图片加载完后，将其显示在canvas上
        let rate = 4/3;
        let widthImg = 420;
        let heightImg = 320;
        console.log(widthImg,heightImg);
        context.drawImage(imgObj2,0,0,imgObj.width,imgObj.height,40,40,canvasWidth,canvasWidth/4*3);// 通过坐标位置上移来缝合
      }
      imgObj3.onload = function(){// 待图片加载完后，将其显示在canvas上
        let rate = 4/3;
        let widthImg = 420;
        let heightImg = 320;
        console.log(widthImg,heightImg);
        context.drawImage(imgObj3,0,0,imgObj.width,imgObj.height,0,0,canvasWidth,canvasWidth/4*3);// 通过坐标位置上移来缝合
      }
    }else{
      console.log('浏览器不支持绘图');
    }
  };
  toggleFull(){
    let fullDom = document.getElementById('img1');
    fullDom.style.width = '100%';
    fullScrenn(fullDom);
  }
  render() {

    return (
      <div style={styles.container}>
      <div style={styles.card}>
      {
        // picPath.map((item, index)=>{
        //
        // })
      }
        <Card
          id="img1"
          onDoubleClick={()=>this.toggleFull()}>
          <CardMedia>
            <Rotation
              cycle={true}
              className='rotation'
            >
            <canvas ref='canvas' width={canvasWidth} height={canvasWidth/4*3}></canvas>
            <img id="test1" src={img01} style={{margin:10}}/>
            <img id="test2" src={img03} />
            <img id="test3" src={img05} />
            </Rotation>
          </CardMedia>
        </Card>
      </div>
      <div style={styles.card}>
        <Card
          id="img1"
          onDoubleClick={()=>this.toggleFull()}>
          <CardMedia>
            <Rotation
              cycle={true}
            >
            <img src={img01} />
            <img src={img03} />
            <img src={img05} />
            <img src={img07} />
            <img src={img09} />
            <img src={img11} />
            <img src={img13} />
            <img src={img15} />
            <img src={img17} />
            <img src={img19} />
            <img src={img21} />
            <img src={img23} />
            <img src={img25} />
            <img src={img27} />
            <img src={img29} />
            <img src={img31} />
            <img src={img33} />
            <img src={img34} />
            <img src={img36} />
            <img src={img38} />
            <img src={img40} />
            <img src={img42} />
            <img src={img44} />
            <img src={img46} />
            <img src={img48} />
            <img src={img50} />
            <img src={img52} />
            <img src={img54} />
            <img src={img56} />
            <img src={img58} />
            </Rotation>
          </CardMedia>
          <img src={tip} style={{marginLeft:'90%', marginBottom: '2%', width:40}}/>
        </Card>
      </div>
        <div>
        <DotPagination
          index={this.state.index}
          count={15}
          onDotClick={(index) => this.setState({ index })}
        />
        </div>
      </div>
    )
  }
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  card: {
      margin: 40,
      width: '50%',
      cursor: 'pointer'
  },
  canvasImg: {
    width: 200,
    height: 200,
    border: '2px solid red'
  }
}
