function palindrome(string){
    let flag=0
    text=string.toLowerCase()
    for(let index=0;index<text.length/2;index++){
        if(text[index]!=text[text.length-1-index]){
            flag=1
            break
        }
    }
    if(flag==0)
        return string+" is a palindrome"
    else
        return string+" is not a palindrome"
}
console.log(palindrome("hello"))
console.log(palindrome("rotor"))
console.log(palindrome("Racecar"))
