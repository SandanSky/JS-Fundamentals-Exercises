function radioCristals(arr){
    "use strict";
    let target = arr[0];
    let cut = (n)=> n/4;
    let lap =(n)=>n*0.8;
    let grind = (n)=>n-20;
    let etch = (n)=>n-2;
    let xray = (n)=>n+1;

    function executeOperation(target,size,opName,operation){
        let x =0;
        while(operation(size)>=target||size-1==target) {
          size = operation(size);
            x++;
        }
        if(x>0){
            console.log(`${opName} x${x}`);
            //console.log(size);
            size = Math.floor(size);
            console.log(`Transporting and washing`);
        }
        return size;
    }

    for (let i=1;i<arr.length;i++){
        let inputSize = arr[i];
        console.log(`Processing chunk ${inputSize} microns`);

        inputSize= executeOperation(target,inputSize,'Cut',cut);
        inputSize= executeOperation(target,inputSize,'Lap',lap);
        inputSize= executeOperation(target,inputSize,'Grind',grind);
        inputSize= executeOperation(target,inputSize,'Etch',etch);
        if(inputSize+1==target){
          inputSize = xray(inputSize);
            console.log(`X-ray x1`);
        }
        console.log(`Finished crystal ${inputSize} microns`);
    }

}

radioCristals([1375, 50000]);
//radioCristals([1000, 4000, 8100]);