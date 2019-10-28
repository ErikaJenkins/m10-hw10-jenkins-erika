// It is always helpful to use comments in your code!

//this creates what your button will output
const boilTempText = document.createTextNode(212);
const freezeTempText = document.createTextNode(32);
let userTempText = document.createTextNode(213);

//this creates a button using javascript
const waterBoil = document.getElementById('boiling-temp');
const waterFreeze = document.getElementById('freezing-temp');
let userTemp = document.getElementById('water-temp');
let perfectTemp = document.getElementById('good-temp');


const addBoilTemp = () => {
  waterBoil.appendChild(boilTempText);
}
addBoilTemp(boilTempText);

const addFreezeTemp = () => {
  waterFreeze.appendChild(freezeTempText);
}
addFreezeTemp(freezeTempText);

const adduserTemp = () => {
  userTemp.appendChild(userTempText);
}
adduserTemp(userTempText);

if (userTemp.innerHTML < 32){
  setTimeout(() => {
  frozen.classList.remove('hide');
  frozen.classList.add('show');
  }, 3000);


} else if (userTemp.innerHTML > 212) {
  setTimeout(() => {
  boiling.classList.remove('hide');
  boiling.classList.add('show');
  }, 3000);


} else if (32 < userTemp.innerHTML < 212) {
  setTimeout(() => {
  perfectTemp.classList.remove('hide');
  perfectTemp.classList.add('show');
  }, 3000);
}

//Arrow Function
/*const showSlideOutAd = () => {
  slideOutAd.classList.remove('hide');
  slideOutAd.classList.add('show');
};

//Vanilla JavaScript Function Expression
var showSlideOutAd = function() {
  slideOutAd.classList.remove('hide');
  slideOutAd.classList.add('show');
}

//Vanilla JavaScript Function Declaration
function showSlideOutAd() {
  slideOutAd.classList.remove('hide');
  slideOutAd.classList.add('show');
}

//SetTimeout function
SetTimeout(() => {
slideOutAd.classList.remove('hide');
slideOutAd.classList.add('show');
}, 3000);

if(userTemp > "212"){

  setTimeout(() => {
  boiling.classList.remove('hide');
  boiling.classList.add('show');
  }, 3000);

  console.log(userTemp);
  console.log(waterFreeze);
  console.log(waterBoil);

}

if(userTemp.innerHTML < 32){

  setTimeout(() => {
  frozen.classList.remove('hide');
  frozen.classList.add('show');
  }, 3000);

  console.log(userTemp);
  console.log(waterFreeze);
  console.log(waterBoil);

}


if(userTemp.innerHTML > 212){

  setTimeout(() => {
  boiling.classList.remove('hide');
  boiling.classList.add('show');
  }, 3000);

  console.log(userTemp);
  console.log(waterFreeze);
  console.log(waterBoil);

}

*/
