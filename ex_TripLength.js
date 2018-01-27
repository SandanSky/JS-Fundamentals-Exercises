function tripLength(arr){
    "use strict";
    let x1 = parseFloat(arr[0]);
    let y1 = parseFloat(arr[1]);
    let x2 = parseFloat(arr[2]);
    let y2 = parseFloat(arr[3]);
    let x3 = parseFloat(arr[4]);
    let y3 = parseFloat(arr[5]);

    function distance(p1,p2){
        let d1 = Math.abs(p2[0]-p1[0]);
        let d2 = Math.abs(p2[1]-p1[1]);
        return Math.sqrt(Math.pow(d1,2)+Math.pow(d2,2));
    }
function minRoot(d1,d2,d3){

        let d12 = d1+d2;
        let d31 = d1+d3;
        let d23 = d2+d3;

        if(d12<=d31&&d12<=d23){
            console.log(`1->2->3: ${d12}`);
        } else if(d23<d12&&d23<d31){
            console.log(`1->3->2: ${d23}`);
        }else if(d31<d12&&d31<d23){
            console.log(`2->1->3: ${d31}`);
        }

}

let d12=distance([x1,y1],[x2,y2]);
let d23 =distance([x2,y2],[x3,y3]);
let d13 = distance([x1,y1],[x3,y3]);

let min = minRoot(d12,d23,d13);
}

/*console.log("d123= "+(d12+d23));
console.log("d213= "+(d12+d13));
console.log("d132= "+(d13+d23));*/

//tripLength([0, 0, 2, 0, 4, 0]);
//tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);
tripLength([0, 0, 0, 0, 0, 0]);
tripLength([0, 3, 1, 0, -1, 0]);

//Най-кратък път от 1 до 3
//1 -> 2 -> 3 =4
//Най-кратък път от 2 до 3
//2 -> 1 -> 3
//Най-кратък път от 1 до 2
//1 -> 3 -> 2
