//A sparse array is one in which the elements do not have contiguous indexes starting at 0

a = new Array(5);   
a = [];             
a[1000] = 40;
console.log(a)

//2 List  different keywords in javascript 
/*
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
enum
export
extends
false
finally
for
function
if
implements
import
in
instanceof
interface
let
new
null
package
private
protected
public
return
super
switch
static
this
throw
try
True
typeof
var
void
while
with
yield
*/

// 3 List and understand importance of different operators in JS 

/*Arithmetic Operators:
– (Subtraction) * (Multiplication)  / (Division)  % (Modulus) */
Y = 125+(50 - 39+(25 * 5)/5)%10
console.log(Y);

/*
+ + (Increment) – – (Decrement)
*/
var x = 6;
var y = 7;
var z;
z = x++ * y-- ;
console.log(z);

/*Assignment Operators:
= (Assignment Operator)  += (Add and Assignment Operator)  – = (Subtract and Assignment Operator) */
var Y = 16;
Y += 8
console.log(Y);
Y -= 4
console.log(Y);
Y *=  4 
console.log(Y);
Y /= 8 
console.log(Y);
Y %= 2 
console.log(Y);
/*
Comparison Operators

!= (Not Equal) 
  > (Greater than)
   < (Less than) >
    = (Greater than or Equal to) 
*/



X = 10;
X != 11;
console.log(X);

/*
Logical Operators:
&& (Logical AND)
|| (Logical OR)
! (Logical NOT)
*/
Y = 5;
 X = 6;
 Y && X
 console.log(Y && X);

Y = 5;
X = 0;
console.log(Y || X );


Y = 5;
X = 0;
console.log(!(Y || X)); 


/*Ternary Operator
: ? Operator*/
Y = (6>5) ? 6 : 5
Y = 6;
console.log(Y);
//3.1 Difference between == and === operators in javascript , illustrate with example 
X = 10;
console.log(X === "10"); //false

X = 10;
console.log(X == "10");//true


//5 With a suitable example explain for loop in javascript 
x =["tanu","patil"]
    for(var i in x)
    {
        console.log("stud"+i+":"+x[i]);
    }

//6. With suitable example explain date methods in javascript 

var d = new Date();
console.log(d);


console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getMilliseconds());
console.log(d.getDay());

// getUTCDate()
// getUTCDay()


//7 With example understand different types of sfunctions in JS 
//console.log(factorial(5)); /NO ERROR
function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }

console.log(factorial(5));

        /* anonymous function */
       // console.log(output(40,6));//ERROR /* hoisting scope */
var output=function(x,y)
{
    return x-y;
}
console.log(output(40,6));
//join()
var x = [1, 2, "Mon", "sat", true, false]
x.join("*");
console.log(x);
//pop()

var x=[1,2,3,"Mon","sat",true,false,null,function(){return false;}];

for(var i in x)
{
    console.log(x[i]);
}
console.log(x.pop());

//delete()
x=[1, 2, 3, "Mon", "sat", true, false]
console.log(delete(x[2]));


//push()
x=[1, 2, 3, "Mon", "sat", true, false]
x.push(16);
console.log(x);

//shift()- Remove the first item of an array
x=[1, 2, 3, "Mon", "sat", true, false]
console.log(x.shift());

//unshift()- Add new items to the beginning of an array:
x=[1, 2, 3, "Mon", "sat", true, false]
x.unshift("Hello ","Tanuja")
console.log(x);

//toString() Convert an array to a string:
x=[1, 2, 3, "Mon", "sat", true, false]
console.log(x.toString());

//splice() Add items to the array:
x=[1, 2, 3, "Mon", "sat", true, false]
x.splice(0,2,"CDAC MUMBAI")
console.log(x);

// slice() Select elements from an array:
x=[1, 2, 3, "Mon", "sat", true, false]
console.log(x.slice(3,5));

//reverse();
x=[1, 2, 3, "Mon", "sat", true, false]
console.log(x.reverse());

/*10 Write a suitable example to illustrate jquery. 

<!DOCTYPE html>
<html lang="en">
<head>
    <title>jQuery selector</title>
    <link rel="stylesheet" href="/jquery/jQStyle4.css">
    <script src="/jquery/jQuery.js"></script>
<style>
    body{font-family:arial}
    #box{
        padding : 10px;
        border: 1px solid #000;
    }
</style>

</head>
<body>
    <h1>yahoo baba : jQuery selector</h1>
    <div id = "box" class = "test">
        <h2 style= background-color:blue > text box 2  </style> </h2>
    </div>

    <ul id ="list">
        <li><b>Orange</b></li>
        <li class = "test">Banana</li>
        <li><Strong>Graphes</Strong></li>
        <li class = "test">Apple</li>
        <li><Strong>Mango</Strong></li>
        
    </ul>
    <script>
        $(document).ready(function(){
             $("#list").css("color","blue");
             //$(".test").css("border","2px solid black");
           // $("*").css("border","2px solid black");
        // $("li:first").css("border","2px solid orange");
        });
    </script>
</body>

</body>
</html>

*/


