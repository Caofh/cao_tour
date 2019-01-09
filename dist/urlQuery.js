
/*
  将url的传参参数形式的字符串转化为json对象格式

  let param = 'school=gongda&hobby=skating&number=3'

  let jsonObj = queryToObj(param)

  console.log(jsonObj)

  输出：{
          school: 'gongda',
          hobby: 'skaing',
          number: '3'
        }
*/
function queryToObj(str) {
  var theRequest = {};
  if (str) {
    var strs = str.indexOf('&') ? str.split("&") : str;
    for(let i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
  }
  return theRequest;
}


/*
* 将obj转换成url参数形式
* toQueryString({a:1,b:2})  =>   a=1&b=2
*
* */
function toQueryPair(key, value) {
  if (typeof value == 'undefined'){
    return key;
  }
  return key + '=' + encodeURIComponent(value === null ? '' : String(value));
}
function toQueryString(obj) {
  var ret = [];
  for(var key in obj){
    key = encodeURIComponent(key);
    var values = obj[key];
    if(values && values.constructor == Array){//数组
      var queryValues = [];
      for (var i = 0, len = values.length, value; i < len; i++) {
        value = values[i];
        queryValues.push(toQueryPair(key, value));
      }
      ret = ret.concat(queryValues);
    }else{ //字符串
      ret.push(toQueryPair(key, values));
    }
  }
  return ret.join('&');
}


export {
  queryToObj,
  toQueryString
}