let sum_of_square_of_even_numbers_in_array = (array) => array.filter((item)=>item<30).map((item)=>item**2).reduce((sum,item)=>sum+item);
// console.log(sum_of_square_of_even_numbers_in_array([1,2,3,4,5,6,7,8,9,10]));
let arr=[10,20,30,40,50]
console.log(sum_of_square_of_even_numbers_in_array(arr))