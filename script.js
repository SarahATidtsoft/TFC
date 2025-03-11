

function addDivc (){
  let divSup = document.createElement('div');
  let maVar = document.getElementById('ajout').value;
  if (maVar=="")
  {
    divSup.innerHTML="vide";
    let div1c = document.getElementById('div1').appendChild(divSup);
  } 
  else{

  if (isNaN(parseInt(maVar))){
  
    divSup.innerHTML="pas un chiffre";
    let div1c = document.getElementById('div1').appendChild(divSup);
  }
  
else{
 
  {
    for(let i=1; i<=parseInt(maVar); i++)  {
      divSup=document.createElement('div')
      divSup.innerHTML="Hello world";
      let div1c = document.getElementById('div1').appendChild(divSup);
   
    };
  }
}}}