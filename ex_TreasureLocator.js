function treasureLocator(arr){
    "use strict";
    function pointInRectangle(input){
        "use strict";
        let [x,y,xMin,xMax,yMin,yMax]=input;

        if ((x>=xMin&&x<=xMax)&&(y>=yMin&&y<=yMax)){
            //console.log("inside");
            return true;
        } else {
            // console.log("outside");
            return false;
        }
    }

    function getIsland(x,y){
        if(pointInRectangle([x,y,0,2,6,8])){
            return "Tonga";
        } else if(pointInRectangle([x,y,4,9,7,8])){
            return "Cook";
        }else if(pointInRectangle([x,y,5,7,3,6])){
            return "Samoa";
        }else if(pointInRectangle([x,y,1,3,1,3])){
            return "Tuvalu";
        }else if(pointInRectangle([x,y,8,9,0,1])){
            return "Tokelau";
        }
    }

    for (let i=0;i<arr.length;i +=2){
        let k1 = arr[i];
        let k2 = arr[i+1];

        let location = getIsland(k1,k2);

        if(location !=null){
            console.log(location);
        } else {
            console.log("On the bottom of the ocean");
        }
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6,4]);
//treasureLocator([4,2]);
//treasureLocator([1.5,6.5]);
//treasureLocator([5,7]);
//treasureLocator([1,3]);
//treasureLocator([8.1,0.1]);