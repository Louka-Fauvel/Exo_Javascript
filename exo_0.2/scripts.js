//0.2 Fonctions
window.addEventListener('load',()=>{
  document.querySelector('#bt-run').addEventListener('click',()=>{
    let elm=document.getElementById('selector').value;
    let css=document.getElementById('style').value;
    document.querySelector(elm).style.cssText=css;
  });
});
