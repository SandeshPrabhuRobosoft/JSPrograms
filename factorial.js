const readline=require('readline')
let r1 = readline.createInterface(
    {
        input:process.stdin,output:process.stdout
    }
)
let input = 0;
r1.question('Fuck you nigga',word=>{input = word;r1.close()})

function factorial(number){
    return number==1 ? 1: number*factorial(number-1)
}
// let input=5
if(isNaN(input) || input%1!=0 || input<1)
    console.log("Enter proper value")
else
    console.log(factorial(input))