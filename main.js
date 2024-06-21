
// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain");
let numberRandom = Math.round(Math.random() * 10 );

let tryAttenpts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnAgain.addEventListener('click', handleTryAgain);
btnAgain.addEventListener('keydown', keyReturn);


// Funções
function handleTryClick(event){

  event.preventDefault();
  const number = document.querySelector("#currentNumber");
  
  if(number.value > 10 || number.value < 0 || number.value === ''){
    
    alert("Por favor, informe um valor entre 0 e 10, o campo não pode está vazio.");
    
  } else{
    
    if(numberRandom == number.value){
      toggleScreen();
      document.querySelector("h2").innerHTML =`Acertou em ${tryAttenpts} vezes`;
      btnAgain.focus();
      
    }
    console.log(tryAttenpts +" :tentativas valor: " +numberRandom);
    number.value = "";
    tryAttenpts++;
  }
}

function handleTryAgain(){
  toggleScreen();
  numberRandom = Math.round(Math.random() * 10 );
  tryAttenpts = 1;
}

function toggleScreen(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function keyReturn(e){
  if(e.key === 'Enter' && screen1.classList.contains('hide')){
    handleTryAgain();
    toggleScreen();
  }
};