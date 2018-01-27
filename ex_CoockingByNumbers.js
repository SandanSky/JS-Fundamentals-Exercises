function cookingByNumbers(arr){
    "use strict";
  let num = Number(arr[0]);

  for (let i = 1; i<arr.length;i++){

      switch(arr[i]){
          case "chop":num /=2;break;
          case "dice": num = Math.sqrt(num);break;
          case "spice":num +=1;break;
          case "bake":num *=3;break;
          case "fillet":num *=0.8 ;break;
          default: break;
      }
      console.log(num);
  }

}

//cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);