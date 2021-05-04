//0.8 Fonctions
// Partie Métier (ECMAScript)
var colors=[
'#000000', // noir
'#FFFFFF', // blanc
'#CC3333', // rouge
'#ff9600', // orange
'#fff000', // jaune
'#0005c2' // bleu
];
//['jaune', 'bleu', 'violet', 'orange', 'blanc', 'noir']
var combinaison=[];//=['0123', '4501','1234','5012','2345']
var reponses=[];//=['', '', '', '', '', '', '', '', '', '', '', '']
// Choisis un chiffre et fais le correspondre à une couleur. Utilise random : if random 1 alors couleur est bleu... if random 2 alors rouge...
const GOOD_PLACE_COLOR ='GOOD_PLACE_COLOR';
const GOOD_COLOR='GOOD_COLOR';

var combiSize = 4;
var turnCount = 12;
var nbColors = 6;

// Tests

// Test combinaison aléatoire
/*let test=(selector)=>{return document.querySelector(selector);
};
window.addEventListener('load',()=>{
  test('#button').addEventListener('click',()=>{
    generateCombi();
    test('p').innerHTML=combinaison;
  });
});*/

// Test saisie utilisateur (à retoucher)
window.addEventListener('load',()=>{
  document.getElementById('jaune').addEventListener('click',()=>{
    inputCombi();
  });
});


function startNew(){ // nouvelle partie
  this.generateCombi();
  this.clearCombis();
}
function generateCombi(){ // génère une combinaison
  for(i =0; i<=combiSize-1; i++){
    combinaison[i]=parseInt(Math.random()*nbColors);
  }
}




function inputCombi(){ // interface de saisie ex : [['1','2','3','4']['5','0','4','2']]
  alert('jaune');
}
function displayCombi(combi){ //=> affiche une combinaison saisie par l’utilisateur sur le plateau de jeu

}

function compare(combi){ // comparaison de la combinaison de départ et celle du joueur
  let combinaisonResponse=[];
  let i=0;
  let k=0;
  for(j=0; j<=combiSize-1;j++){
    if(combi[j]===combinaison[j]){
      combinaisonResponse[i]=GOOD_PLACE_COLOR;
      i++;
    }
    for(j=0; j<=combiSize-1;j++){
      
    }
  }
}
//function get activeCombi():combinaison // retourne la combinaison active

function addCombi(combi){ // ajoute la combinaison dans la liste

}
function displayCombiResponse(combi){ //=> affiche la combinaison réponse de l’IA

}
function hasWin(){ // détermine si le joueur a gagné

}
function isTerminated(){ //  => détermine si la partie est terminée

}
function displayResponse(type,message){ // affiche perdu ou victoire

}


function clearCombis(){ // vide le tableau des combinaisons
  reponses=[];
}

function newGame(){ //=> initialise une nouvelle partie

}
