//0.1 Fonctions
window.addEventListener('load',()=>{
  document.querySelector('#bt-somme').addEventListener('click',()=>{
    let a= parseInt(window.prompt('a ?',0));
    let b= parseInt(window.prompt('b ?',0));
    alert(`La somme de ${a} et de ${b} c'est `+somme(a,b));
  });
  
  document.querySelector('#bt-somme-x').addEventListener('click',()=>{
    let a= parseInt(window.prompt('a ?',0));
    let b= parseInt(window.prompt('b ?',0));
    let c= parseInt(window.prompt('c ?',0));
    alert(`La somme de ${a}, de ${b} et de ${c} c'est `+sommeX(a,b,c));
  });

  document.querySelector('#bt-max-x').addEventListener('click',()=>{
    let a= parseInt(window.prompt('a ?',0));
    let b= parseInt(window.prompt('b ?',0));
    let c= parseInt(window.prompt('c ?',0));
    alert(`La max de ${a}, de ${b} et de ${c} c'est `+maxX(a,b,c));
  });
});

function somme(a,b){
  return a+b;
}

function sommeX(){
  let result=0;
  for(let i=0; i<arguments.length;i++){
    result+=arguments[i];
  }
  return result;
}

function max(a,b){
  /*if (a<b)
    return b;
  else return a;*/
  // ou version condensée :
  return (a<b)?b:a;
}

function maxX() {
  let result=arguments[0] || 0;
  for(let i=1;i<arguments.length;i++){
    if (arguments[i]>result){
      result=arguments[i];
    }
  }
  return result;
}

//alert(somme(1,2));
//alert(max(5,7));
//alert(max(9,6));
