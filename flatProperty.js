let arr=[10,20,[30,40,[50,60]]]
// console.log(arr.flat(2/*depth*/))

//Recursive function
let newArray=[]
let flatten=(list)=>{
    for(let value of list)
        if(typeof value!='object') //to check if the value is a object(array)
            newArray.push(value) // if not object then push
        else
            return flatten(value) // if object, call recursion
}
flatten(arr)
console.log(newArray)