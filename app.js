var a="";
function get_input(value){
    a+=value;
    document.getElementById("res").innerHTML= a;
}
function submit(){
    var expr =a;
    var out=eval(expr);
    document.getElementById("res").innerHTML = out;
    a = out;
}
function clr(){
    a="0";
    document.getElementById("res").innerHTML = a;
    a= "";

}
function backSpace(){
 var l=a.length
 var e=l-1;
 var slice= a.slice(0, e);
 a=slice;
 document.getElementById("res").innerHTML=a;
}