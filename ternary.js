function largest_num_of_3(number1,number2,number3){
    return (number1>number2) ? ((number1>number3) ? number1 : number3) : ((number2>number3) ? number2 : number3);
}
console.log(largest_num_of_3(21,10,7));