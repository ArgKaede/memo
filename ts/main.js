/// <reference path="./ractive.d.ts"/>
// tsMemo
var tsMemo = /** @class */ (function () {
    function tsMemo() {
    }
    tsMemo.prototype.getValue = function () {
        var re = document.getElementById('tsMemo').value;
        if (re == "") {
            localStorage.clear();
            return;
        }
        var length = localStorage.length;
        var key = 'key' + length;
        localStorage.setItem(key, re);
    };
    tsMemo.prototype.enter = function () {
        if (window.event.keyCode == 13) {
            getValue();
        }
    };
    return tsMemo;
}());
var tm = new tsMemo();
tm.enter();
// ractive
var memo = /** @class */ (function () {
    function memo(text) {
        this.text = text;
    }
    return memo;
}());
var r = new Ractive({
    // el...どこに(cssにおける#id)
    el: '#containar',
    // template...何を(cssにおける#id)
    template: '#template',
    // 初期値を指定
    data: {
        text: null
    }
});
function exec() {
    if (r.get('text') == 'd') {
        localStorage.clear();
        r.set('re', null);
        r.set('text', null);
        return;
    }
    var length = localStorage.length;
    var key = 'key' + length;
    localStorage.setItem(key, r.get('text'));
    var value = "";
    for (var i = 0; i < length + 1; i++) {
        value += '<p>' + localStorage.getItem('key' + i) + '</p>';
    }
    r.set('re', value);
    r.set('text', null);
}
r.on({
    enter: function (e) {
        if (e.event.keyCode == 13) {
            exec();
        }
    }
});
