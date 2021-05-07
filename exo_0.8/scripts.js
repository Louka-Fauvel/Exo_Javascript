// MASTERMIND

// Partie Métier (ECMAScript)

// Variables et Constantes

var colors=[
'#000000', // noir
'#FFFFFF', // blanc
'#CC3333', // rouge
'#ff9600', // orange
'#fff000', // jaune
'#0005c2' // bleu
];

var combinaison=[]; // Combinaison code à trouver
var reponses=[]; // Toutes les réponses du joueur
var combiActive=[1,2,3,4]; // Combinaison forcée pour les tests
var combiActive2=[5,1,3,2]; // Deuxième combinaison pour le test addCombi

const GOOD_PLACE_COLOR ='GOOD_PLACE_COLOR'; // Couleur bien placée
const GOOD_COLOR='GOOD_COLOR'; // Bonne Couleur

var combiSize = 4; // Taille du code
var turnCount = 12; // Nombre de tours maximum
var nbColors = 6; // Nombre de couleurs du jeu

var turn=1; // Tour courant

// Tests

// Test de la création du plateau
window.addEventListener('load',()=>{
  gameZone();
  inputCombi();
});

// Fonctions

// Fonction pour une nouvelle partie

function startNew(){
  generateCombi();
  clearCombis();
  turn=1;
}


// Fonction pour génèrer une combinaison

function generateCombi(){
  for(i =0; i<=combiSize-1; i++){
    combinaison[i]=parseInt(Math.random()*nbColors);
  }
  //console.log(combinaison); //affiche combinaison dans la console
}


// Fontion pour créer la zone de jeux

function gameZone(){
  zone = document.getElementById('plateau');
  zone.innerHTML ='';
  for(i=turnCount;i>0;i--){
    ligne = document.createElement('tr');
    ligne.id = 'tour-'+i;

    colonne = document.createElement('td');
    colonne.innerHTML = i;
    colonne.style.width = '32px';
    ligne.appendChild(colonne);

    for(j=1; j<=combiSize;j++){
      colonne = document.createElement('td');
      colonne.innerHTML ='';
      colonne.style.width = '32px';
      colonne.id = 'tour-'+i+'-'+j;
      ligne.appendChild(colonne);
    }

    colonne = document.createElement('td');
    colonne.style.width = '32px';
    colonne.id = 'Vide';
    colonne.className = 'Vide';
    ligne.appendChild(colonne);

    for(j=1; j<=combiSize;j++){
    colonne = document.createElement('td');
    colonne.innerHTML ='';
    colonne.style.width = '16px';
    colonne.id = 'resultat-'+i+'-'+j;
    ligne.appendChild(colonne);
    }
    zone.appendChild(ligne);
  }
}


function inputCombi(){ // interface de saisie ex : [['1','2','3','4']['5','0','4','2']]
  zoneColors = document.getElementById('selectionCouleur');
  zoneColors.innerHTML ='';
  ligneColors = document.createElement('tr');
  for(i=1;i<=nbColors;i++){
    colonneColors = document.createElement('td');
    colonneColors.innerHTML ='';
    colonneColors.style.width = '32px';
    ligneColors.appendChild(colonneColors);

    pion = document.createElement('div');
    pion.className = 'pion';
    pion.style.background = colors[i-1];
    colonneColors.appendChild(pion);
  }
  zoneColors.appendChild(ligneColors);
}

// Fonction qui vide les combinaisons

function clearCombis(){
  reponses=[];
}


//Fonction qui ajoute la combinaison dans la liste

function addCombi(combi){
  reponses[turn-1]=combi;
}


// Fonction qui compare la combinaison à trouver et une combi vecteur réponse avec des GOOD_PLACE_COLOR et GOOD_COLOR

function compare(combi){
  let combinaisonReponse=[];
  let i=0;
  let code = combinaison;
  let combiJ = combi;
  for(j=0; j<=combiSize-1; j++){ // Recherche des couleurs bien placées
    if(combiJ[j]===code[j]){
      combinaisonReponse[i]=GOOD_PLACE_COLOR;
      code[j]=9; // valeur qui ne correspond à aucune couleur
      combiJ[j]=9; // évite d'avoir un GOOD_COLOR en doublon avec un GOOD_PLACE_COLOR
      i++;
    };
  };
  for(j=0; j<=combiSize-1; j++){ // Recherche des autres bonnes couleurs
    if (code[j] === 9) {
    }else{
      let firstsamecolor = combiJ.indexOf(code[j]);
      if (firstsamecolor === -1) {
      }else{
        combinaisonReponse[i]=GOOD_COLOR;
        code[j]=9; // valeur qui ne correspond à aucune couleur
        combiJ[firstsamecolor]=9; // évite d'avoir un GOOD_COLOR en doublon
        i++;
      };
    };
  };
  return combinaisonReponse;
}


// Fonction qui détermine si le joueur a gagné

function hasWin(reponseIA){
  let win=0;
  for (i=0;i<combiSize;i++){
    if (reponseIA[i]==GOOD_PLACE_COLOR){
    win++;
    };
  };

  if (win==4){
    return true;
  }else{
    return false;
  };
}


// Fonction qui détermine si la partie est terminée

function isTerminated(){
  if (turn<=turnCount){
    return false;
  }else{
    return true;
  }

}

function displayCombi(combi){ //=> affiche une combinaison saisie par l’utilisateur sur le plateau de jeu

}

//function get activeCombi():combinaison // retourne la combinaison active


function displayCombiResponse(combi){ //=> affiche la combinaison réponse de l’IA

}




function displayResponse(type,message){ // affiche perdu ou victoire

}




function newGame(){ //=> initialise une nouvelle partie

}
