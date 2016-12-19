function symbolealeatoire()
{

  var symboles ="0123456789ABCDEF";
  var idx=(Math.floor(Math.random() * symboles.length));
  return symboles.charAt(idx);
}

  function couleurrandom(){
    var col="#";
    for (var i=0; i<6; i++ ){
    col += symbolealeatoire()
    }
    return col;
  }

console.log(couleurrandom());

  var tableau = document.getElementById('tableau');
  var cells = tableau.getElementsByTagName('td');
  for (var j=0; j<600; j++){
    cells[j].style.backgroundColor = couleurrandom();
  }

///////////////////////////////////////////////////////////////////////////
////////////ACtion du bouton recommencer/////////////////////////////////
///////////////////////////////////////////////////////////////////////

   function reset() { 
     for (var j=0; j<600; j++){
       cells[j].style.backgroundColor = couleurrandom();
     }
  }
  /////////////////////////////////////////////////////////////
///////////////////ACTION DU BOUTON VALIDER/////////////////
////////////////////////////////////////////////////////////////

function actionmot() {
  var mot = document.getElementById("mot").value;

  var motspl = mot.split("")
  for (var i=0; i<mot.length; i++){
    cells[i].innerHTML=motspl[i]
  }
}

////////// Touche clavier ENTRéE///////////
document.onkeypress = function(e){
console.log(e.keyCode);
if(e.keyCode=="13"){
    actionmot()
}

}

//////////////////////////////////////////////////////
///////////////CASE BLANCHE//////////////////////////
/////////////////////////////////////////////////////


function efface(){
  mot = "";
  for( var i=0; i<cells.length; i++){
  cells[i].innerHTML = "";
}

}
