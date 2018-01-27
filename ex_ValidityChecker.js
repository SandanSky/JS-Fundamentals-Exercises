function validityChecker(arr){
    "use strict";
    let x1=arr[0];
    let y1=arr[1];
    let x2=arr[2];
    let y2=arr[3];

    function isValid(p1,p2){
        let d1 = Math.abs(p2[0]-p1[0]);
        let d2 = Math.abs(p2[1]-p1[1]);
        let res = Math.sqrt(Math.pow(d1,2)+Math.pow(d2,2));
        let valid ="";
        if((res % 1 === 0)){
            valid = "valid";
        } else {
            valid = "invalid";
        }
        console.log(`{${p1[0]}, ${p1[1]}} to {${p2[0]}, ${p2[1]}} is ${valid}`);
    }
    isValid([x1,y1],[0,0]);
    isValid([x2,y2],[0,0]);
    isValid([x1,y1],[x2,y2]);
}

validityChecker([3, 0, 0, 4])
validityChecker([2, 1, 1, 1])