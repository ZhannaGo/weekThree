var red = function red(){
    return 3.141;
}
const blue = function blue(f){
    let y = f();
    return y;
}
var x = blue(red);
