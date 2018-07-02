

function getValue(){

  var result = document.getElementById("jsmemo").value;

  if(result == "") {
    localStorage.clear();
    return;
}   


  var length = localStorage.length;
  var key = 'key' + length;
  localStorage.setItem(key, result );

  document.getElementById("jsmemo").value = "";
}

function putValue(){
    var length = localStorage.length;
    var value = "";
    for (var i = 0; i < length; i++){
        var k = 'key' + i
        value += '<div id=' + k + '>' + localStorage.getItem(k) + '</div><br>';
        }
    document.getElementById("output").innerHTML = value;
}

function enter(){
    if(window.event.keyCode==13){
        getValue();
        putValue();
    }
}

