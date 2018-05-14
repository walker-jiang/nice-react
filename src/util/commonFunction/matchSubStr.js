function subStringIndex(str, subStr){ // 返回子串匹配后最后一个字符在主串中的位置
  'use strict';
  let pos = 0;
  let j = 0; // 遍历到字串的位置
  let i = 0;// 遍历到主串的位置
  console.log(!!str, subStr);
  if(!!str&&str.length>0&&subStr.length>0){
    while(i<str.length&&j<subStr.length){
      if(str[i] == subStr[j]){
        ++i;
        ++j;
      }else{
        i=i-j+1;
        j=0;
      }
    }
    return 'http://192.168.2.183:8002/zeroBack/' + str.substring(i+1);
  }else{
    return '';
  }
};
export default subStringIndex;
