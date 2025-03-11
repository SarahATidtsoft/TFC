
function unefunction() {
  console.log('Hello, world!');
}

function affectprimary() {
  let titre = document.getElementById('tz');
  titre.classList.add("primary");
}

function ChangeTexte() {
  let div1a = document.getElementById('div1');
  div1a.innerHTML += "Hello, world!";
}


function addsimple() {
  let nb1=document.getElementById('nb1');
  let nb2=document.getElementById('nb2');
  let div1b = document.getElementById('res');
  div1b.innerText += (parseInt(nb1.value) + parseInt(nb2.value));
}

function addDiv (){
  let divSup = document.createElement('div');
  divSup.innerHTML="Hello world";
  let div1c = document.getElementById('div1').appendChild(divSup);
  
}

function addDivb (){
  let divSup = document.createElement('div');
  divSup.innerHTML=document.getElementById('ajout').value;
  let div1c = document.getElementById('div1').appendChild(divSup);
  
}
function FaitListe()
{
  let divSup = document.createElement('ul');
  let maVar = document.getElementById('ajout').value;
  let div1c = document.getElementById('div1').appendChild(divSup);
  let divSup1 = document.createElement('li');
  divSup1.innerHTML=maVar;
  let div1d = document.getElementById('div1').appendChild(divSup1);
}
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