function Sum_of_fibonacci(number){
    if(number==1)
        return [0,0];
    else if(number==2)
        return [[0,1],1];
    else{
        let fib_series=[0,1];
        for(let index=2;index<number;index++){
            fib_series.push(fib_series[index-2]+fib_series[index-1]);
        }
        return [fib_series,fib_series.reduce((sum,item)=>sum=sum+item)];
    }
}
let input=5   //(+prompt('Please enter an integer value:'));
if(Number.isInteger(input)){
    let [series,total]=Sum_of_fibonacci(input);
    console.log('Fibonassi series:',series,'\n'+"sum:",total);
}
else
    console.log("Invalid input (MUST BE A NUMBER)");
