//Call Apply And Bind

var obj = {val : 5}

var multiply = function(n,m){

 return this.val*n*m;

}



console.log(multiply.call(obj,6,2));



var arr = [6,2];



console.log(multiply.apply(obj,arr));



var binded = multiply.bind(obj);

console.log(binded(6,2));



var student = {age:20}

var printAge = function(){

 console.log("Student's Age is :- "+this.age);

}



var bindStudent = printAge.bind(student);

bindStudent();



//Function Currying

var multiply = function(x,y){

 console.log(x*y);

}



let multiplyByTwo = multiply.bind(this, 2);

multiplyByTwo(5);



var sum = function(x){

 return function(y){

  console.log(x+y);

 }

}



let sumByTwo = sum(2);



sumByTwo(9);