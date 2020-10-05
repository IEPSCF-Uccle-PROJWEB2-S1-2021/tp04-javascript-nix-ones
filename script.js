function minimum(a,b){

  if((a==b) ||(a<b)){
    return a;
  }
  else{
    return b;
  }
}


function maximum(a,b){

  if((a==b) ||(a>b)){
    return a;
  }
  else{
    return b;
  }
}
function reduce(numbers, fn){
  if(numbers.length<2){
    return null;
  }
  else{
    let score =fn((numbers[0],numbers[1]));
    if(numbers.length>2);
    for (let index = 0; index < numbers.length; index++) {
      score = fn(numbers[index],score);

    }
    return score;
  }
}

let valeur = function filter(numbers,fn){
  let tab=[] ;
  let k=0;

  for (let index = 0; index < numbers.length; index++) {
    if (fn(numbers[index]==true)) {
      tab[k]==numbers[index];
      k=k+1;
    }
  }
  return tab;
}

let myTestNumbers=[ 5, 8, 13, 21, 34, 610, 55, 3, 89, 144, 233, 377];
console.log(reduce(myTestNumbers,minimum));
console.log(reduce(myTestNumbers,maximum));

console.log(valeur(myTestNumbers,val=>{
  if(a>=30){
    return true;
      }
    }
  )
);
