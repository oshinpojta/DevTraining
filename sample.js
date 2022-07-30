"use strict"

this.table = 'window table'

const cleanTable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
    const innerFunction = (_soap)=>{
        console.log(`cleaning ${this.table} using ${_soap}`)
    }
    innerFunction(soap);
}

this.garage = {
    table : "garage table"
};

let myRoom = {
    table : "My Table"
}

cleanTable.call(this,"Some global soap");
cleanTable.call(this.garage,"Some garage soap");
cleanTable.call(myRoom,"Some room soap");


// Student  Class

class Student{
    static count = 0
    constructor(name, age, phoneno, boardmarks){
        this.name = name;
        this.age = age;
        this.phoneno = phoneno;
        this.boardmarks = boardmarks;
        Student.count++;
    }

    isEligible(){
        if(this.boardmarks>40){
            console.log("Eligible");
        }else{
            console.log("Not Eligible");
        }
    }

    isEligibleForPlacements(minboardmarks){
        return (minage) => {
            if(this.age>minage && this.boardmarks>minboardmarks){
                return true;
            }else{
                return false;
            }
        }
    }
}

let s = []
let s1 = new Student("Rahul", 14, 7087634835, 50);
let s2 = new Student("Sahil", 13, 7098653835, 70);
let s3 = new Student("Ramesh", 15, 9785766835, 45);
let s4 = new Student("Suraj", 16, 9898765835, 33);
let s5 = new Student("Mohit", 17, 6234562835, 39);
s.push(s1);
s.push(s2);
s.push(s3);
s.push(s4);
s.push(s5);

console.log(s1.name);
s1.isEligible();
console.log(Student.count);

///check placement Eligibility
for(let i=0;i<s.length;i++){
    let checkStudent = s[i].isEligibleForPlacements(44);
    console.log(`${s[i].name}'s Eligibility to Placement is ${checkStudent(13)}`);
}


