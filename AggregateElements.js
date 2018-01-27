function agregElements(arr){
    let resSum=0;
    let resInverse=0.0;
    let resConcat=""
    for (let i=0;i<arr.length;i++){
        resSum +=arr[i];
        resInverse +=1/arr[i];
        resConcat +=arr[i];
    }

    console.log(resSum);
    console.log(resInverse);
    console.log(resConcat);

}

agregElements([1,2,3]);
agregElements([2,4,8,16]);