function chunk(inp_arr,size){
    let arr = [];
    for(index=0;index<size;index++){
        arr[index]=inp_arr[0];
        inp_arr.splice(0,1);
    }
    let newArray = [arr,inp_arr];
    console.log(newArray);
}
function test(){
    input = [1,2,3,4];
    const result = chunk(input,2);
}
test();