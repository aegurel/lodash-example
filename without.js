function without(inp_arr, ...args){
    return inp_arr.filter(e=>!args.includes(e));
}
function test1(){
    arr = [1,2,3,4];
    excepted = [1,2];
    let data = without(arr,...excepted);
    console.log(data);
}
test1();
