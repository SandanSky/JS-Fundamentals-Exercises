function insideVol(arr) {
    "use strict";
    let minX = 10;
    let maxX = 50;
    let minY = 20;
    let maxY = 80;
    let minZ = 15;
    let maxZ = 50;

    for (let i=0;i<arr.length;i +=3){
        let x= arr[i];
        let y= arr[i+1];
        let z= arr[i+2];
        if ((x >= minX && x <= maxX)&&(y >= minY && y <= maxY)&&(z >= minZ && z <= maxZ)){
            console.log('inside');
        } else {
            console.log('outside');
        }
    }
}


insideVol([8, 20, 22]);
insideVol([13.1, 50, 31.5,50, 80, 50, -5, 18, 43]);