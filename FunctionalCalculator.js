
function calc(n1,n2,o){
    let x=parseFloat(n1);
    let y=parseFloat(n2);
    switch(o){
        case "+":console.log(x+y);break;
        case "-":console.log(x-y);break;
        case "*":console.log(x*y);break;
        case "/":(y!=0)?console.log(x/y):console.log("");break;
        default:break;
    }

}

calc(2, 4, '+');
calc(3, 3, '/');
calc(18, -1, '*');
calc(1.5,2,'*');