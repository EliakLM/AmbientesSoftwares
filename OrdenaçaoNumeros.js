function QuickSort(Arr){
    if(Arr.length <= 1){
      return Arr;
    }
  
    const pivot = Arr[Arr.length - 1];
    const esquerdaArr = [];
    const direitaArr = [];
  
    for(let i=0; i < Arr.length-1;i++){
      Arr[i] < pivot ? esquerdaArr.push(Arr[i]) :  direitaArr.push(Arr[i])
    }
  
    return [...QuickSort(esquerdaArr) ,pivot,...QuickSort(direitaArr)];
  
  }
  
  const items = [10,65,99,84,74,20,65,44,88];
  console.log(QuickSort(items));