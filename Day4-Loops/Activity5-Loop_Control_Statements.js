// Task8----------
// WAP to print numbers from 1 to 10 , but skip the number 5 using the 'continue' statement 
let num =10;
console.log("print number from 1 to 10, skip - 5 :")
for(let i=1;i<=10;i++){
    console.log(i);
    continue;
}



// Task9-------
// WAP to print numbers from 1 to 10 , but stop the loop when the number is 7 using the 'break' statement 
let number =10;
let i=1;
console.log("Print no. from 1 to 10 ,stop from 7:")
while(i<=10){
    console.log(i);
    i++;
    break;
}
//...............
let ch = 6;
console.log("Number Printing")
switch(ch){
    case 1:
        console.log("1");
    case 2:
        console.log("2");
    case 3:
        console.log("3");
    case 4:
        console.log("4");
        break;
    case 5:
        console.log("5");
    default:
        console.log("6");

}