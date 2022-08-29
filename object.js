function person(name,age,place){
    this.name=name;
    this.age=age;
    this.place=place;
    this.data=()=>{
        return ("Hello, I'm "+this.name+" ("+this.age+") from "+this.place+".");
    }
}
let person1=new person("Abc",20,"Udupi");
let person2=new person("Xyz",40,"Manipal");
console.log(person1.data());
console.log(person2.data());