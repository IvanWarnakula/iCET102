var stdName = 67;

//control variable

switch (stdName) {
    case 78:
        console.log("Hi Yasindu");
        break;
    case "Kavindu":
        console.log("Hi Kavindu");
        break;
    case "Pasindu":
        console.log("Hi Pasindu");
        break;
    default:
        console.log("Not Matched !");
}

//get user's input month ----> January, February
//alert sinhala name of this month 

//loops ----> for-loop, while-lopp, do-while-loop, foreach

console.log("Hi Yasindu");
console.log("Hi Yasindu");
console.log("Hi Yasindu");
console.log("Hi Yasindu");
console.log("Hi Yasindu");
console.log("Hi Yasindu");
console.log("Hi Yasindu");
console.log("Hi Yasindu");
console.log("Hi Yasindu");
console.log("Hi Yasindu");
console.log("Hi Yasindu");
console.log("Hi Yasindu");


for (var i = 0; i < 10; i++) {
    console.log("Hello Kavindu");
}

////////////////////////////////

//get a number from user
//mutliply that number using 1,2,3,4,5 then re assign it

var inputValu = 3

//inputValu*=1;

//check final value is odd or even
//if even alert user win.. if not alert user failed

//////////////////////////////////////////

//true,false, a statement that genarates true or false

var myNum = 90;

var isMarried = true

var count = 3;

// while (isMarried) {
//     console.log("Hiiiiiii");
//     count--;
//     if (count == 0) {
//         isMarried = false;
//     }
// }

//get row count from user
//get column count from user

//create a multiplication table useing rows and columns

//do-while loop

var num34 = 45;

// do{

// }while(num34>30);

//arrays

var cars = ["Toyota", "BMW", "MAZDA", "AUDI", "JEEP", 89, 56];

console.log(cars[0]);

console.log(cars);

var stdName = "Kavindu";
stdName = 90;


//of, in 
for (var val in cars) {
    console.log(val);
}

///////////////////////

var rainData = [34, 65.7, 65.3, 23.5, 78.9, 90.78];

//avg rain data value

//get user input -----> user's name [Yasindu]
//display charactors of the name like [Y,A,S,I,N,D,U]

//get user input
//convert all letters to capital
//get charators
//display

//////////////////////////////////////

//data types

var stdName = "Yasindu" //----> string
var stdAge = 24 //-----> number
var stdMark = 90.67 //-----> number
var isMarried = true //-----> boolean

//js object
var myCar = { brand: "Toyota", model: "Corolla", engNo: "AE12344", color: "black" } //----> object

//JSON Objects

// {
//     "name":"Yasindu",
//     "address":"panadura",
//     "age":26
// }

/////////////////////////////////////////

//variable types
//var, let, const


var val1 = 10;
val1 = 89;

let var2 = 90;
var2 = 67;

// const var3 = 56;
// var3=78;

//////////////////////////

var val3 = 45;
var val3 = 34;

// let val4 = 78;
// let val4 = 57;

// const val5 = 89;
// const val5 = 34;

/////////////////////////


//var is globle scope
var val6 = 23;

{
    console.log(val6);
    var val7 = 34;
}

console.log(val7);


let val8 = 23;

{
    console.log(val8);
    let val9 = 34;
}

console.log(val9);


const val10 = 23;

{
    console.log(val10);
    const val11 = 34;
}

console.log(val11);

//////////////////////////////

function saveData() {

}

saveData();

const saveData = function () {

}

saveData();

//arrow functions
const deleteData = () => {

}

deleteData();

///////////////////////////

function printData(name,age){
    console.log(name+" "+age);
    return name;