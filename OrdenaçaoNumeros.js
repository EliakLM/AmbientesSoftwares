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
  
  const items = [5,25,15,3,9,19,25];
  console.log(QuickSort(items));