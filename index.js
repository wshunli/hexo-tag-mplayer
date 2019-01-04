var fs = require('fs'),
path = require('path'),
_ = require('underscore');

var filePath = path.join(__dirname, 'mplayer-template.html');

function createmplayer(args, content) {
var template = fs.readFileSync(filePath).toString(),
    options = {};

if (content.length) {
    var options = content;
}

return _.template(template)({
    id: 'mplayer' + ((Math.random() * 9999) | 0),
    options: options,
});
}

hexo.extend.tag.register('mplayer', createmplayer, {
    async: true,
    ends: true
});