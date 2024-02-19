const numbers = [45,4,9,16,25];


function myFunction(total,value,index,array){
    
    console.log(total);
    console.log(".....")
    return   total+value;
}

const newNumbers = numbers.reduce(myFunction);

console.log(newNumbers);