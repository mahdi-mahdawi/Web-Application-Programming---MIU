
 // for example the array is : const arr = [10,20,30,40];
 // and we call the function: sum(arr);
function sum(arr){
    
    const result = arr.filter(function(elem, i , array){
        return elem>20;
        }).reduce(function(accumulator, currentValue, currentIndex, array){
        return currentValue +accumulator;
        });
    return result;
    // the result will be 70
}

// for example the array is : const arr = ["Domingos","Mahdi", "Mahdawi", "Mj"];
// and we call the function: getNewArray(arr);
const getArray = function getNewArray(arr){
    
    const result = arr.filter(function(elem, i , array){
        return elem.length>=5;
    }).filter(function(elem){
        return elem.includes('a');
    });
    console.log(result); // the result will be: ["Mahdi", "Mahdawi"]

}