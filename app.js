function cal(num){
    var a = document.getElementById("calin")
    a.value += (num)
}
function clearResult(){
    var a = document.getElementById("calin")
    a.value = ""
}
function getResult() {
   var a = document.getElementById("calin")
    a.value = eval(a.value)
}
function square(){
    var a = document.getElementById("calin")
    a.value = Math.sqrt(a.value)
}
function sine(){
    var a = document.getElementById("calin")
    a.value = Math.sin(a.value)
}
function cose(){
    var a = document.getElementById("calin")
    a.value = Math.cos(a.value)
}
function tane(){
    var a = document.getElementById("calin")
    a.value = Math.tan(a.value)
}