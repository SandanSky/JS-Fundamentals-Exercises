function modifyAverage(str){
    "use strict";
    let param = String(str);
    let avg =0;
    while(avg<=5){
        let l=  param.length;
        let sum=0;
        for (let i=0;i<l;i++){
            sum +=parseInt(param.charAt(i));
        }
        avg = sum/l
        if (avg<=5){
            param +='9';
        } else {
            console.log(param);
            break;
        }
    }
}

modifyAverage(101);
modifyAverage(5835);