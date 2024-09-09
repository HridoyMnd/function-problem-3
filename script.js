

//function problem 3

function deleteInvalids(arr){
    let nmbrArray = [];
    for(let nmbr of arr){
        if(typeof nmbr === "number" && isNaN(nmbr) === false){
            nmbrArray.push(nmbr);
        }
       
    }
    return nmbrArray;
}


let number =[NaN, 1, 12, 0, -1, undefined];
let result = deleteInvalids(number);
console.log(result);