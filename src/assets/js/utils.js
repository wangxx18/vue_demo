export default function lastTime(val) {
  var date = new Date(val);
  var t = Date.now() - date;
  var d = Math.floor(t / 1000 / 60 / 60 / 24),
    h = Math.floor(t / 1000 / 60 / 60 % 24),
    m = Math.floor(t / 1000 / 60 % 60),
    s = Math.floor(t / 1000 % 60);
  if (d > 0) {
    return d + '天前'
  } else if (h > 0) {
    return h + '小时前'
  } else if (m > 0) {
    return m + '分钟前'
  } else if (s > 0) {
    return s + '秒前'
  }

}
export function type(val){
    if(val == 'share') {
      return '分享';
    }
    if(val == 'good') {
      return '精华'
    }
    if(val == 'ask') {
      return '问答'
    }
    if(val == 'job') {
      return '招聘'
    }
}
