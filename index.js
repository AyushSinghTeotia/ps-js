// //DOM Manipulation
// let element=document.getElementById("click");
// console.log(element);

// let elemClass =document.getElementsByClassName("container");
// console.log(elemClass[0]);
// //elemClass[0].style.background="pink";
// elemClass[0].classList.add("bg-primary");
// elemClass[1].classList.add("text-success");

// tn=document.getElementsByTagName('button');
// console.log(tn);
// tn1=document.getElementsByTagName("div");
// console.log(tn1);
// createElement1=document.createElement("p");
// console.log(createElement1);
// createElement1.innerText=("this in inner text");
// elemClass[1].appendChild(createElement1);

// //Ps 1 and Problem no 1
// let age=prompt("Enter age");
// if(age>=10 && age<=20){
//     document.write("true");

// }
// else {
//     document.write("false");
// }
// //PS 2 and Problem no 2
// let swap=prompt("how many percent swap from ether");
// console.log("swap type",typeof(swap));
// swap=Number.parseInt(swap);
// console.log("swap type",typeof(swap));
// console.log("swap",swap);
// switch(swap){
//     case 10:{
//         console.log("10% swap of eth");
//         break;
//     }
//     case 20:{
//         console.log("20% swap of eth");
//         break;
//     }
//     case 30:
//     {
//         console.log("30% swap of eth");
//     }
//     default:
//     {
//         console.log("5% swap of eth ");
//     }
// }
//problem 5
// let a=swap>10?"you can swap":"you can not swap";
// console.log(a);

// let arr=[1,2,3];
// console.log("arr preassigned value",arr);
//     function remove()  {
//         //require(_index < arr.length, "index out of bound");
//         //here i for index 
//         for (let i = 0; i < arr.length-1; i++) {     //i for index =1  length=3-1=2
            
//             arr[i] = arr[i + 1]//2;//arr[i] me assigned ho rha hai 2 and 2 index par jo value hai vo pop ho rhi hai 
//             arr[0] = arr[0+1]=arr[1]=2
//             arr[1] = arr[1+1]=arr[2]=3
//             arr[2] = 3
//         console.log("arr initlize value",arr[i]);
//         }
//         console.log("before pop",arr);
//         arr.pop();
//         console.log("after pop",arr);
//         console.log("arr pop value in 0 index",arr[0]);
//         console.log("arr pop value in 1 index",arr[1]);
//     }   
 
//     remove();

    // i=0, 0<2 T
    // current value 
    // arr[0]=1;
    // arr[0]=arr[1]
    // arr[0]=2;
    // i=1, 1<2 T
    // current value
    // arr[1]=2;
    // arr[1]=arr[2];
    // arr[1]=3
    // i=2 2<2 F
    // current value
    // arr[2]=3

   
    // let marks = {
    //     1: 90,
    //     2: 9,
    //     "ayush": 100
      
    //   }
    //   console.log(marks["ayush"]);
    //   console.log(marks);

//     function name(_name){
//         let name=_name;
//         console.log("my name is "+name);
//     }
//     name("silky");
  
// const lastnaem = (_lastname)=>{
//     let lastname=_lastname;
//     console.log("My last name is "+lastname);
// }
// lastnaem("singh");
// let arr=[13,14,51,6];
// arr.forEach(function(value,index){
//      console.log(`${index} : ${value}`);
// });

// map 

// let arr=[25,26,1,27,28,7,9];
// let a=arr.map(function(value){
//     console.log(value);
//     return value+1;
// })
// console.log(a);

// //filter
// let c=arr.filter(function(value){
//     console.log(value);
//     return value<10;
// })
// console.log(c);

// let arr3=[34,78,90,11];
// let b=parseInt(prompt("Enter a number"));
// arr3.push(b);
// console.log(arr3);

// let arr4=[1,2,3];
// do{
// var a=Number.parseInt(prompt("Enter a number"));
// console.log(typeof(a));
// arr4.push(a);
// }while(a!=0)
// console.log(arr4);

// let arr=[];

// do {
//     var a=Number.parseInt(prompt("Enter a number"));
//     console.log(typeof(a));
//     arr.push(a);

// }while(a!=0);
// console.log(arr);

//Random number program
// let x = Math.floor((Math.random() * 10) + 1);
// console.log(x);
// let input;
// do{
// input =Number.parseInt(prompt("Gusse  a number"));

// if(input<x){ 
//     console.log(`worng number Gussse number is garter than from input`);
// }
// else if(input>x){
//     console.log(`worng number Gussse number is less than from input`);
// }
// else if (input==x){
//     console.log(`your gusse is correct ${x} == ${input}`);
// }
// }while(input!=x);

// let a=confirm("do you want to confirm");
// if(a){
//     document.write("transaction successful");
// }
// else{
//     document.write("tranaction failed");
// }
// let input =Number.parseInt(prompt("enter age"));

// const canDrive =(input)=>{
//    return input>=18?true:false; 
     
// }

// if(canDrive(input)){
//     alert("you Can Drive");
// }
// else{
//     alert("you can not drive");
// }

// let name = prompt("Enter your name");
// let con = confirm("do you want to see promt again");
// if(con){
//     let name = prompt("Enter your name");
//     console.log(name);
// }

//  let rep=true;
//  let name;
//  while(rep){
//     name = prompt("Enter your name");
//     rep=confirm("do you want to see promt again ");

//  }
//  document.write(name);

// let myarr=[1,2,3,4,5];
// myarr.forEach(read=(value)=>{
//     console.log(value+100);
// })

// let language=["java","python","c++"];
// language.forEach(function(value,index){
//     console.log(value ,"--",index );
// })

// let mynewArr=[100,200,300,400,500];
// mynewArr.forEach(function(value,index,arr){
//     console.log(arr[index]+100);
// })

//callback function by technical thapa 
// const personOne=(frined,personTwo)=>{
//     console.log(`i am busy write now ,I am taking to ${frined} I will call you later`);
//     personTwo();//call back function
// }
// const personTwo=()=>{
//     console.log("Hi did you had call me ");
// }
// personOne("Ayush",personTwo);// call back function 

//callbackfunction

// const UnlockCar=(_carname,Startcar)=>{
//     console.log(`car is unlock ${_carname}`);
//     Startcar();
// }
// const Startcar=()=>{
//     console.log('you car is unlock now you can start it');
// }

// UnlockCar("swift",Startcar);

//Arrow function

//es5 
// let sum = function(){
//     let a=10;
//     let b=20;
//     return a+b;
// }
// console.log(sum());

// //es6
// let sum2 =()=>{
//    let a=10;
//    let b=20;
//    return a+b;
// }
// console.log(sum2());

// //another way of arrow function
// var a=90;
// var b=10;
// let sum3 =()=> a+b;
// console.log(sum3());


//map()
// const studentdata=[
//     {id:1,name:"ayush",age:23},
//     {id:2,name:"kartik",age:24},
//     {id:3,name:"jay",age:38}
// ]
// const newstudent=studentdata.map(cvalue=>{
//     return `my name ${cvalue.name} age${cvalue.age}`
// })

// console.log(newstudent);

// let data={
//     list:"friends",
//     names:["ayush","kartik","aman","jay"],
//     getfriends:function(){
//         console.log(this.names)
//     }
// }
// data.getfriends();

// let data1={
//     list:"friends",
//     names:["ayush","kartik","aman","jay"],
//     getfriends1:function(){
//         this.names.map((item)=>{
//              console.log(this.list,item);
//         });
//     }
// }
// data1.getfriends1();


//promise in javascript

// let input= prompt("enter a number");
// input
// let prom=new Promise(function(resolve,reject){
//   if(input==1){
//     resolve("Here is Success");
//   }
//   else {
//     reject("Here is failure");
//   }  
// });

// let onFulfiment=(resolve)=>{
//     console.log(resolve);
// }
// let OnRejection=(reject)=>{
//     console.log(reject);
// }
// prom.then(onFulfiment);
// prom.catch(OnRejection);

//On Another way

// let input2 =Number.parseInt (prompt("enter a number"));
                                                                                                          
// let prom2=new Promise(function(reslove,reject){

//     if(input2==1){
//         reslove("Here is Success");
//     }
//     else{
//         reject("here is failure");
//     }
// });
// prom2.then((result)=>{
//     console.log(result);
// })
// prom2.catch((error)=>{
//     console.log(error);
// })

// let input3=Number.parseInt(prompt("Enter a number"));
// console.log(typeof(input3));

// let prom3=new Promise(function(reslove,reject){
//  if(input3==1){
//     reslove("car unlock");
//  }
//  else{
//     reject("car Locked");
//  }
// });
// prom3.then((result)=>{
//  console.log(result);
// })
// prom3.catch((reject)=>{
//     console.log(reject);
// })

// let name=prompt("enter name");
// let prom5=new Promise((resolve,reject)=>{
//  if(name=="ayush"){
//     resolve("you enter currect name");
//  }
//  else{
//     reject("you entered worng name");
//  }
// });
// let onFulfiment=(resut)=>{
//     console.log(resut);
// }
// let OnRejection=(err)=>{
//     console.log(err);
// }
// prom5.then(onFulfiment);
// prom5.catch(OnRejection);

// let sirname=prompt("enter sit name");
// let prom5=new Promise(function (resolve,reject){
//     if(sirname=="singh"){
//         resolve("you entered right sirname");
//     }
//     else
//     {
//         reject("you enterd wrong sirname");
//     }
// })
// let onFulfiment=(result)=>{
//     console.log(result);

// }
// let OnRejection=(reject)=>{
//     console.log(reject);
// }
// prom5.then(onFulfiment);
// prom5.catch(onrejectionhandled);

// function prom(complete){
//     return new Promise(function(resolve,reject){
//         console.log("fetch data");
//         setTimeout(()=>{
//             if(complete){
//                 resolve("successful");
//             }
//             else{
//                 reject("failed");
//             }
    

//         },3000);
      
//     })

// }
// let onFulfiment=(result)=>{
//    console.log(result);
// }
// let OnRejection=(error)=>{
//     console.log(error);
// }
// prom(false).then(onFulfiment);
// prom(false).catch(OnRejection);

// let confirm1;
// let Prom=new Promise((resolve,reject)=>{
//     console.log("Asking to gf");// pending
//     confirm1=prompt("AA rhe ho milne ?");
//     setTimeout(()=>{ 
//         if(confirm1=="yes"){
//             resolve("Oyo chlte hai"); // fulfiled ,hone  pr then chlta hai jo call back function hai
//         }
//         else{
//             reject("kam aa gya or khabi chlte hai");// Reject,hone pr catch chlta hai ye bhi call back function hai
//         }
//     },3000);
   
// })
// let onFulfiment=(result)=>{
//     console.log(result);
// }
// let OnRejection=(err)=>{
//     console.log(err);
// }

// Prom.then(onFulfiment).catch(OnRejection);

//or
// Prom.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err);
// })

//event in js
// let name;
// function hello(){
//     name=prompt("enter your name");
//     document.write(`hello ${name}`);
// }

//async in js
// let confirm1=prompt("AA rhe ho milne");
// return async function meet(){
//     if(confirm1=='yes'){
//        console.log("chlo chlte hai");
//     }
//     else {
//         console.log("aaj nhi ho payega");
//     }
// }
// console.log
// const input1=Number.parseInt(prompt("num"));
// async function test(){
//    if(input1==1)
//    return "hello";
//    else{
//     return "bye";
//    }
// }
// test().then((result)=>{
//    console.log(result);
// })
// test().catch((err)=>{
//     console.log(err);
// })

// const j=0;
// const run=async()=>{
//     if(j==1){
//         return "100 speed";
//     }
//     else{
//         return "no speed";
//     }
// }
// run().then((result)=>{
//      console.log(result);
// })
// run.catch((result)=>{
//     console.log(result);
// })

// console.log("tutorial 43");
// async function harry(){
//      console.log("inside Harry function");
//      const response=await fetch("https://api.github.com/users");
//      console.log("before response");
//      const data= await response.json();
//      console.log("data got");
//      return data;
//    // return "harry";
// }
// console.log("before calling harry");
// const a=harry();
// console.log("after calling harry");
// console.log(a);
// a.then((result)=>{
// console.log(result);
// })
// console.log("Last line of this js file ");


console.log("tutorial 43");
const harry=async()=>{
    console.log("inside harry function");
    const response=await fetch("https://api.github.com/users");
    console.log("before response");
    const user= await response.json();
    console.log("data got second");
    return user;
}
console.log("before calling harry");
const b=harry();
console.log("after calling harry function");
console.log(b)
;b.then((result)=>{
    console.log(result);
})
console.log("Last line of js file");