var fs = require("fs")
var template = require('art-template');

module.exports = function(src, out){
    template.defaults["root"]= src
    console.log("编译源文件目录为：", src)

    //编译模板为html文件
    return function(inFileName, outFileName){
        var html = template(inFileName, {});
        fs.writeFileSync(out + "/" + outFileName, html)
    }
}
