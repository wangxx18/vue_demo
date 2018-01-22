const express = require('express');
const app = express();
const path = require('path');
//静态资源加载
app.use(express.static(path.join(__dirname, './dist')));

//监听端口
app.listen(3000, (err) => {
  if (err) throw err;
  console.log('3000端口已经启动');
});
