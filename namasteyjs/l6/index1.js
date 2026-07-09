const arr = [1,2,3,4,5];

const output =  arr.reduce(function (acc, curr){
    acc = acc+curr;
    return acc;

},2)
console.log(output)