//0.3 Fonctions
let qs=(selector)=>{return document.querySelector(selector);
};

window.addEventListener('load',()=>{
  let nb = 0;
  qs('#nbclick').addEventListener('click',()=>{
    nb++;
    qs('span').innerHTML=nb;
    //qs('input').value=nb;
  });
});
