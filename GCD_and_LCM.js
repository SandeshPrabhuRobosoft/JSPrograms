let gcd=(number1,number2)=>{
    return (number2==0)? number1: gcd(number2,number1%number2)
}
let input1=4
let input2=10
if(isNaN(input1) || input1%1!=0 || input1<1 || isNaN(input2) || input2%1!=0 || input2<1)
    console.log("Enter proper input")
else{
    let GCD_value=gcd(input1,input2)
    let LCM_value=input1*input2/GCD_value
    console.log("GCD:",GCD_value,"\n"+"LCM:",LCM_value)
}