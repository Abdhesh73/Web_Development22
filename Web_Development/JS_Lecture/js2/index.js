
// // variable in javaScript 


// /* multiline comment */

// var number1 = 23;
// var number2 = 56;
// //console.log(number1+number2);

// // data Type in java Script  

// var str = "this is a srting ";
// var str1 = 'This is also a string ';

// var num = 56;

// // objects daya type ;

// var marks = {

//     ravi: 56,
//     abdh: 98,
//     adfg: 945.56
// }

// //  Boolean daya type in js

// var a = true;
// var b = false;


// // undefined or null dataType :

// var und = undefined;
// var und1;
// var und2 = null;

// // console.log(und);
// // console.log(und1);
// // console.log(und2);

// /* At a very high level , There are mainly two types of daya type in javascript 
//     1. Primitive DataType ;
//     Reference dataType */



// // Array in javaScript :


// var arr = [3, 5, 6, 4, 6, "Abdhesh", "kushwaha"];
// //console.log(arr);


// // Operaters in javaScript ;

// var x = 35;
// var y = 67;
// // arithmatic operater :

// // console.log("the value of x+y=  " ,(x+y));
// // console.log("the value of x-y=  ", (x - y));
// // console.log("the value of x*y=  ", (x * y));


// //    comparision operater 

// //  console.log(x==y);
// //  console.log(x<=y);
// //  console.log(x>=y);


// //   javaScript function

// //    DRY Princple  : do not repeat Yourself 


// function avg(a, b) {

//     return (a + b) / 2;
// }

// c1 = avg(10, 20);
// c2 = avg(12, 36);
// // console.log(c1,c2);
// //  document.write(c1,c2);

// // conditional Statement in javaScript ;
// // if sTatement :
// var age = 56;
// if (age > 14) {
//     //                  console.log("you are not a kid");
// }
// if (age > 19) {

//     //       console.log("you can drink ");
// }

// //  if- else Statement : 
// if (age < 10) {

//     //     console.log("you are a kid ");
// }

// else {

//     //console.log("you are not a kid ! ");

// }




// // Loops in javaScript :

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
// //    for(value in arr){
// //      console.log(value);

// //    }
// //                    OR 

// /*      for(var i= 0; i<=arr.length;i++){

//           console.log(arr[i]);
//       }

//                                OR 
//         */
// for (value of arr) {

//     console.log(value);
// }

// let j = 0;
// //  const a= 0;
// //     a++;
// //     console.log(a);

// while (j < arr.length) {

//     console.log(arr[j]);
 
//  }
//  //let i = 0;

// //    do{

// //     console.log(arr[i]);
// //     i++
// //    }
// //    while(i>arr.length);

    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for(var k= 0; k<= array.length;k++){
         
          if(k%2==0){
        //        console.log(k);

                }
          k++;
        } 

        // aRRay Methods :

        let myArray= ["Abdhesh ", "Kushwaha", 56, null, true];
         {
      //  console.log(myArray.length);
    //      myArray.pop();  remove last Element 

       //    myArray.push('Anand');  Add one Element in last 


  //     myArray.shift();   Remove first Element ;

 //   myArray.unshift("Ak");  // add one Element in the Strting 




  // console.log(myArray);
        }

       // String methods in javaScript :
         let Str = "Abdhesh kushwaha is a good boy ";

//          console.log(Str.length);

//          console.log(Str.indexOf("Abdhesh"));
// console.log(Str.lastIndexOf("Abdhesh"));

    // d= Str.replace("Abdhesh ", "Ashish ");
    //   console.log(d, Str);


    //  JavaScript Date : 

       let date= new Date();
        console.log(date);
console.log(date.getTime);
console.log(date.getFullYear);
console.log(date.getMilliseconds);

