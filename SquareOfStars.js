function squareOfStars(n){
    let  num = parseInt(n);

    function printLine(m){
        console.log('* '.repeat(m));
    }
    for(let i=1;i<=num;i++){
        printLine(num);
    }
}
squareOfStars(5);