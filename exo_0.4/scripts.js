//0.4 Fonctions
$=(s)=>document.getElementById(s);
window.addEventListener('load',()=>{
  $('bt').addEventListener('click',()=>{
    //debugger;
    let event =$('event').value;
    let style =$('css').value;
    let selector =$('selector').value;
    document.querySelector(selector).style.cssText=style;
    /*document.querySelector(selector).addEventListener(event,(evt)=>{
      evt.target.style.cssText=style;
    });*/
});
});
