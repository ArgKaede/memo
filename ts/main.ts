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

var text = r.get('text');

function exec() {
    var length = localStorage.length;
    var key = 'key' + length;
    localStorage.setItem(key, r.get('text') );
    r.set('re', r.get('text'));
}

r.on({
    enter: function (e) {
        if (e.event.keyCode == 13) {
            if(text == 'd'){
                localStorage.clear();
            }else{
                exec();
            } 
        }
    }
});