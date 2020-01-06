var outfits = [];
var column1 = document.querySelector('.column1');
var column3 = document.querySelector('.column3');
// var column2 = document.querySelector('.column2');
var hatSection = document.querySelector('.hats-list');
var clothesSection = document.querySelector('.clothes-list');
var accessoriesSection = document.querySelector('.accessories-list');
var backgroundsSection = document.querySelector('.backgrounds-list');
var hatBtns = document.querySelectorAll('.hats-list .button-style');
var allBtns = document.querySelectorAll('.button-style')
var garmentAppear = document.querySelectorAll('.garment');
//next two variables allow us to use clearInputField function
var saveOutfitBtn = document.getElementById('saveOutfitBtn');
var outFitInput = document.querySelector('.outfit-namer');
var backgroundsArray = document.querySelectorAll('.backgrounds');
var id = Date.now();
var newOutfit = new Outfit(id);
var bearContainer = document.querySelector('.bear-container');
var savedOutfitsList = document.querySelector('.outfits-list');
var closeSavedCard = document.querySelector('.close-btn');

column1.addEventListener('click', addGarment);
// saveOutfitBtn.addEventListener('click', clearInputField);
outFitInput.addEventListener('input', disableSaveButton);
column1.addEventListener('click', placeBackground);
saveOutfitBtn.addEventListener('click', saveOutfit);
column3.addEventListener('click', function() {
  removeSavedCard(event)
  removeCardFromLocalStorage(event);
});

window.addEventListener('load', getOutfitCards);

function addGarment(event) {
  toggleGarments('hat', 0);
  toggleGarments('clothes', 1);
  toggleGarments('accessories', 2);
  // toggleGarments('backgrounds');
}

function toggleGarments(category, index) {
  if (event.target.classList.contains(category)) {
    toggleActiveClass();
    placeGarment(index);
    dressBear(event, category);
  }
}

function toggleActiveClass() {
  if (event.target.classList.contains('active')){
    event.target.classList.remove('active');
  } else {
    var parent = event.target.parentNode;
    for (var i = 0; i < parent.children.length; i++) {
      parent.children[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }
}

function placeGarment(i) {
  if (newOutfit.garments[i] === event.target.id) {
    newOutfit.removeGarment(i, null);
  } else {
    newOutfit.addGarment(i, event.target.id);
  }
}

function dressBear(event, category) {
  for(var i = 0; i < garmentAppear.length; i++) {
    if((garmentAppear[i].classList.contains('active-img')) && (garmentAppear[i].classList.contains(category))){
      garmentAppear[i].classList.remove('active-img');
    } else if(garmentAppear[i].classList.contains(event.target.id)){
      garmentAppear[i].classList.add('active-img');
    }
  }
}

function placeBackground(background) {
  if (event.target.classList.contains('backgrounds')) {
    changeBackgroundData(background);
    changeBackgroundImg();
    toggleActiveClass();
  }
}

function changeBackgroundData(background) {
if (newOutfit.background === event.target.id) {
  newOutfit.changeBackground(null)
} else {
  newOutfit.changeBackground(event.target.id)
  }
}


function changeBackgroundImg() {
  for(var i = 0; i < backgroundsArray.length; i++) {
  if(event.target.classList.contains('active')){
    bearContainer.style.backgroundImage = "";
    bearContainer.style.backgroundColor = "";
  } else if(event.target.id === 'beach-background'){
    bearContainer.style.backgroundImage = "url(assets/beach.png)"
  } else if(event.target.id === 'park-background'){
    bearContainer.style.backgroundImage = "url(assets/park.png)"
  } else if(event.target.id === 'space-background'){
    bearContainer.style.backgroundImage = "url(assets/outerspace.png)"
  } else if(event.target.id === 'hearts-background'){
    bearContainer.style.backgroundImage ="url(assets/hearts.png)"
  } else if(event.target.id === 'blue-background'){
    bearContainer.style.backgroundImage = "";
    bearContainer.style.backgroundColor = "#1794A0";
  } else if(event.target.id === 'yellow-background'){
    bearContainer.style.backgroundImage = "";
    bearContainer.style.backgroundColor = "#E2B76B";
    }
  }
}

function clearInputField(saveOutfit) {
  outFitInput.value = "";
  disableSaveButton(event);
  nakedBear(saveOutfit);
  buttonReset(saveOutfit);
  bearContainer.style.backgroundImage = "";
  bearContainer.style.backgroundColor = "";
}

function disableSaveButton(event){
  if(outFitInput.value != "") {
    saveOutfitBtn.classList.remove('disable-save');
    saveOutfitBtn.removeAttribute('disabled');
  } else {
    saveOutfitBtn.classList.add('disable-save')
    saveOutfitBtn.setAttribute('disabled', '');
  }
}

function saveOutfit() {
  var outfitName = saveOutfitInput.value;
  var outfitId = newOutfit.id;
  var savedOutfitCard = `<button class="button-style">${outfitName}<img id="${outfitId}" class="close-btn" src="assets/close.svg" alt="Close"></button>`;
  newOutfit.title = outfitName;
  savedOutfitsList.insertAdjacentHTML('beforeend', savedOutfitCard);
  window.localStorage.setItem(outfitId, JSON.stringify(newOutfit));
  outfits.push(newOutfit);
  clearInputField(saveOutfit);
  resetDataModel();
}

function getOutfitCards(){
  for (var i = 0; i < localStorage.length; i++){
    var currentOutfit = JSON.parse(localStorage.getItem(localStorage.key(i)));
    var outfitButton = `<button class="button-style">${currentOutfit.title}<img id="${currentOutfit.id}" class="close-btn" src="assets/close.svg" alt="Close"></button>`;
    savedOutfitsList.insertAdjacentHTML('beforeend', outfitButton);
  }
}

function removeSavedCard(event) {
  if (event.target.classList.contains('close-btn')) {
    event.target.closest('.button-style').remove();
  }
}

//the two functions below reset the clothes buttons, and make the bear
//naked again. i created a new var allBtns @ 10.
function nakedBear(event) {
  for(var i = 0; i < garmentAppear.length; i++) {
    if(garmentAppear[i].classList.contains('active-img')){
    garmentAppear[i].classList.remove('active-img');
    }
  }
}

function buttonReset(event) {
  for (var i = 0; i < allBtns.length; i++) {
      if(allBtns[i].classList.contains('active')){
        allBtns[i].classList.remove('active')
    }
  }
}

function resetDataModel() {
  newOutfit = new Outfit(Date.now());
}

function removeCardFromLocalStorage() {
  if (event.target.classList.contains('close-btn')) {
    localStorage.removeItem(event.target.id);
  }
}
