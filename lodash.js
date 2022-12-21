 //the compact return value which isn't false like undefined, 0, false... in the array 
 function compact(arr){
    return arr;
  }

//the without return value that except you don't want from a array
//this basic function works for only basic array that includes only number,string 
function without(inp_arr, ...args){
    return inp_arr.filter(e=>!args.includes(e));
}



module.exports = {
    compact:compact,
    without:without,
}
