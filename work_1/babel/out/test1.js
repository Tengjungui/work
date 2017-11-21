'use strict';

/*filter过滤，能被3整除的留下*/
var arr = [78, 45, 66, 24];
var res = arr.filter(function (a) {
  return a % 3 == 0;
});
console.log(res);

/*字符串连接*/
var name = 'ai';
var job = 'IT';
var html = '';
html = '\n      <div>\n        <h3>' + name + '</h3>\n        <p>' + job + '</p>\n      </div>\n    ';
