/// <reference path="./ractive.d.ts"/>

class memo {
    text : string ;

    constructor(text:string){
        this.text = text ;
    } 
}


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