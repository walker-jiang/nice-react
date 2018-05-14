/*
此文件为全局的配置文件
*/
const config_service_url = 'http://172.20.31.69:8001/zeroCore/'; // 后台服务地址
const systemName = '3D图片旋转'; // 系统名称
const nativeData = true; // 是否启用本地数据, 获取本地数据用GET方法
const homeRefreshTime = 10000; // 首页刷新时间(毫秒)

const loadingStyle = { // 数据预加载时显示的样式
  text: '数据统计中，请稍等',
  color: '#c23531',
  textColor: '#FF9606',
  maskColor: 'rgba(255, 255, 255, 0.2)',
  zlevel: 0
}
