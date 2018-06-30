/// <reference path="./ractive.d.ts"/>
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
    localStorage.saveKey = r.get('text');
    r.set('re', r.get('text'));
}
r.on({
    enter: function (e) {
        if (e.event.keyCode == 13) {
            exec();
        }
    },
    health: function () {
        exec();
    }
});
