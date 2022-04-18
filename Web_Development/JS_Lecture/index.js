// // console.log('helllo Abdhesh Kushwaha Aston ');
// // console.table({Abdhesh : 'Kumar', Kushwaha :'Aston ' });

// // console.warn('this is warning !?')

// // console.timeEnd("your code took the time ");

// //  console.assert( )

// // console.error('This is an error ; ')
// // console.clear();



//     //  Variable Part : - variable is the mane of The monery Location where we store our data ;
    

//     various keyWord to decleare Variable in javaScript :
  //         (a)  var 
  //         (b)  let
  //         (c)  const 

    var name = 'Abdhesh ';
    var channel;
    var marks = 50;
    channel= 'School of Abdhesh ';
    console.log(name);
console.log(marks);

  let city = 'Bhopal ';

/**
 *   variable can't start with any Numeric value 
 * 
 * 
 */
 
const Myname = 'Hariram ';
console.log(Myname);
// Myname= 'Abdhesh ';
//   console.log(Myname);  **   if we declared any variable with const  the we can't change it's value ;

{
    let city = 'Tikamgarh  ';  // let is a Block level variable it's scope is limited ;

    console.log(city);
}
console.log(city);

const arry1= [1,2,3,4,5,6,7,8,9,10];
arry1.push(11);
console.log(arry1);

//  some important case in programming :
  /**
   * camelCase
   * kabab-case
   * PascalCase
   */

  /**
   *                 * DATA TYPE IN JAVAsCRIPT *
   * 
   *               1. Primitive DataType 
   *                          a. Number 
   *                           b. String 
   *                           c. Boolean 
   * 
   *               2. Reference DataType 
   *                             a. Array 
   *                             b. Function 
   *                             c. Object Literal 
   * 
   *   
   */

                  //  Primitive Data type : 
                  let  name2= 'String_Abdhesh '

                    console.log(name2);
                    console.log("data type is " +(typeof name2));
               let num= 12345;

console.log("data type is " + (typeof num));
let abdhesh= true;

console.log("data type is " + (typeof abdhesh));
let fl= 356.56;

console.log("data type is " + (typeof fl));

let StMarks= {
    Abdhesh :90,
    sonu:60,
    Narendra:89, 
    pabendra:50
}
console.log(StMarks);

console.log("data type is " + (typeof StMarks));




//                         Type conversion & Type cersion 



let a;
a= 50;
console.log(a+" " +(typeof a));

a= String(50);
console.log(a + " " + (typeof a));

let i= 4;
console.log(i + " " + (typeof i));
  console.log(i.toString());

  //           ************** String DataType ***********


               //         var String = "this "

               var name = 'Abdhesh';
               var string = 'Kushwaha ';
                 var message = "i want to learn coding ";
                 var tep = `${name} is a nice and good Boy `;
                 console.log(string + name + message );

       var len= name.length;
                 console.log(`length of name is ${len}`)
        
                