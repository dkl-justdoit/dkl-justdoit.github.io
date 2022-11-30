var spawn = require('child_process').spawn;
// Hexo 3
hexo.on('new', function(data){
  spawn('D:/Program Files/Typora/Typora.exe', [data.path]);
});