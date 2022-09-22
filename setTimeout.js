let place=(Name,callback)=>{
    setTimeout(()=>
    {
        let data={longitude:0,latitude:0}
        console.log(Name)
        callback(data)
    },2000)
}
place("North Pole",(details)=>{
    console.log(details)
}) 