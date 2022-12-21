 //the compact return value which isn't false like undefined, 0, false... in the array 
 function compact(arr){
    return arr;
  }

//the without return value that except you don't want from a array
//this basic function works for only basic array that includes only number,string 
function without(inp_arr, ...args){
    return inp_arr.filter(e=>!args.includes(e));
}

//the concat return an array that it is wanted to concatenate the arrays or values
function concat(){

}

//the copyArray return an array that the copy of the source write to array
function copyArray(source,array){
    var i = -1;
    length = source.length;

    array || (array = Array(length));//if there is no array as parameter, we create empty array
    while(++i < length){
        array[i] = source[i];
    }
    return array;
}


module.exports = {
    compact:compact,
    without:without,
    copyArray:copyArray,

}
