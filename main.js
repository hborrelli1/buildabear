var outfits = [];
var column1 = document.querySelector('.column1');
var column3 = document.querySelector('.column3');
var hatSection = document.querySelector('.hats-list');
var clothesSection = document.querySelector('.clothes-list');
var accessoriesSection = document.querySelector('.accessories-list');
var backgroundsSection = document.querySelector('.backgrounds-list');
var hatBtns = document.querySelectorAll('.hats-list .button-style');
var allBtns = document.querySelectorAll('.button-style')
var garmentAppear = document.querySelectorAll('.garment');
var saveOutfitBtn = document.getElementById('saveOutfitBtn');
var outFitInput = document.querySelector('.outfit-namer');
var backgroundsArray = document.querySelectorAll('.backgrounds');
var id = Date.now();
var currentOutfit = new Outfit(id);
var bearContainer = document.querySelector('.bear-container');
var savedOutfitsList = document.querySelector('.outfits-list');
var closeSavedCard = document.querySelector('.close-btn');
var resetBtn = document.querySelector('#reset');

column1.addEventListener('click', addGarment);
outFitInput.addEventListener('input', disableSaveButton);
column1.addEventListener('click', placeBackground);
saveOutfitBtn.addEventListener('click', saveOutfit);
resetBtn.addEventListener('click', resetBear);
column3.addEventListener('click', function() {
  removeSavedCard(event)
  removeCardFromLocalStorage(event);
  addGarmentsFromSave(event);
});

window.addEventListener('load', getOutfitCards);

function addGarment(event) {
  toggleGarments('hat', 0);
  toggleGarments('clothes', 1);
  toggleGarments('accessories', 2);
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
  if (currentOutfit.garments[i] === event.target.id) {
    currentOutfit.removeGarment(i, null);
  } else {
    currentOutfit.addGarment(i, event.target.id);
  }
}

function dressBear(event, category) {
  for (var i = 0; i < garmentAppear.length; i++) {
    if ((garmentAppear[i].classList.contains('active-img')) && (garmentAppear[i].classList.contains(category))) {
      garmentAppear[i].classList.remove('active-img');
    } else if (garmentAppear[i].classList.contains(event.target.id)) {
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
  if (currentOutfit.background === event.target.id) {
    currentOutfit.changeBackground(null);
  } else {
    currentOutfit.changeBackground(event.target.id);
  }
}

function changeBackgroundImg() {
  for (var i = 0; i < backgroundsArray.length; i++) {
    if (event.target.classList.contains('active')) {
      bearContainer.style.backgroundImage = "";
      bearContainer.style.backgroundColor = "";
    } else if (event.target.id === 'beach-background') {
      bearContainer.style.backgroundImage = "url(assets/beach.png)";
    } else if (event.target.id === 'park-background') {
      bearContainer.style.backgroundImage = "url(assets/park.png)";
    } else if (event.target.id === 'space-background') {
      bearContainer.style.backgroundImage = "url(assets/outerspace.png)";
    } else if (event.target.id === 'hearts-background') {
      bearContainer.style.backgroundImage ="url(assets/hearts.png)";
    } else if (event.target.id === 'blue-background') {
      bearContainer.style.backgroundImage = "";
      bearContainer.style.backgroundColor = "#1794A0";
    } else if (event.target.id === 'yellow-background') {
      bearContainer.style.backgroundImage = "";
      bearContainer.style.backgroundColor = "#E2B76B";
    }
  }
}

function updateBgFromSavedCard() {
  for (var i = 0; i < backgroundsArray.length; i++) {
    if (currentOutfit.background === "") {
      bearContainer.style.backgroundImage = "";
      bearContainer.style.backgroundColor = "";
    } else if (currentOutfit.background === 'beach-background') {
      bearContainer.style.backgroundImage = "url(assets/beach.png)";
    } else if (currentOutfit.background === 'park-background') {
      bearContainer.style.backgroundImage = "url(assets/park.png)";
    } else if (currentOutfit.background === 'space-background') {
      bearContainer.style.backgroundImage = "url(assets/outerspace.png)";
    } else if (currentOutfit.background === 'hearts-background') {
      bearContainer.style.backgroundImage ="url(assets/hearts.png)";
    } else if (currentOutfit.background === 'blue-background') {
      bearContainer.style.backgroundImage = "";
      bearContainer.style.backgroundColor = "#1794A0";
    } else if (currentOutfit.background === 'yellow-background') {
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

function disableSaveButton(event) {
  if (outFitInput.value != "") {
    saveOutfitBtn.classList.remove('disable-save');
    saveOutfitBtn.removeAttribute('disabled');
  } else {
    saveOutfitBtn.classList.add('disable-save')
    saveOutfitBtn.setAttribute('disabled', '');
  }
}

function saveOutfit() {
  var outfitName = saveOutfitInput.value;
  var savedOutfitCard = `<button id="${outfitName}" class="button-style">${outfitName}<img class="close-btn" src="assets/close.svg" alt="Close"></button>`;
  currentOutfit.title = outfitName;
  createOutfitBtn(outfitName, savedOutfitCard);
  window.localStorage.setItem(outfitName, JSON.stringify(currentOutfit));
  window.localStorage.setItem('outfitTitles', JSON.stringify(outfits));
  clearInputField(saveOutfit);
  resetDataModel();
}

function createOutfitBtn(outfitName, savedOutfitCard) {
  if (!outfits.includes(outfitName)) {
    savedOutfitsList.insertAdjacentHTML('beforeend', savedOutfitCard);
    outfits.push(currentOutfit.title);
  }
}

function getOutfitCards(){
  if (window.localStorage.getItem('outfitTitles') === null) {
    outfits = [];
  } else {
    outfits = JSON.parse(window.localStorage.getItem('outfitTitles'));
    for (var i = 0; i < outfits.length; i++) {
      var outfitButton = `<button id="${outfits[i]}" class="button-style">${outfits[i]}<img class="close-btn" src="assets/close.svg" alt="Close"></button>`;
      savedOutfitsList.insertAdjacentHTML('beforeend', outfitButton);
    }
  }
}

function removeSavedCard(event) {
  if (event.target.classList.contains('close-btn')) {
    event.target.closest('.button-style').remove();
    var garmentIndex = event.target.parentNode.id;
    outfits.splice(outfits.indexOf(garmentIndex), 1);
    window.localStorage.setItem('outfitTitles', JSON.stringify(outfits));
  }
}

function nakedBear(event) {
  for (var i = 0; i < garmentAppear.length; i++) {
    if (garmentAppear[i].classList.contains('active-img')) {
      garmentAppear[i].classList.remove('active-img');
    }
  }
}

function buttonReset(event) {
  for (var i = 0; i < allBtns.length; i++) {
    if (allBtns[i].classList.contains('active')) {
      allBtns[i].classList.remove('active');
    }
  }
}

function resetDataModel() {
  currentOutfit = new Outfit(Date.now());
}

function removeCardFromLocalStorage() {
  if (event.target.classList.contains('close-btn')) {
    localStorage.removeItem(event.target.parentNode.id);
  }
}

function addGarmentsFromSave(event) {
  if (event.target.classList.contains('button-style')) {
    clearInputField(event);
    resetDataModel(event);
    grabOutfit(event);
    updateDom();
    disableSaveButton();
    updateBgFromSavedCard();
  }
}

function grabOutfit(event) {
  var clickedOutfit = event.target.id;
  var sourceOutfit = JSON.parse(window.localStorage.getItem(clickedOutfit));
  currentOutfit = Object.assign(currentOutfit, sourceOutfit);
}

function updateDom(){
  outFitInput.value = currentOutfit.title;
  for (var i = 0; i < currentOutfit.garments.length; i++) {
    if (currentOutfit.garments[i] != null) {
      populateGarmentsBtns(i);
      populateGarmentsImgs(i);
    }
  }
  populateGarmentsBg();
}

function populateGarmentsBtns(i) {
  var allBtnsArr = Array.prototype.slice.call(allBtns);
  var garmentBtn = allBtnsArr.find(btn => btn.id === currentOutfit.garments[i]);
  garmentBtn.classList.add('active');
}

function populateGarmentsImgs(i) {
  var garmentsArr = Array.prototype.slice.call(garmentAppear);
  var garmentImg = garmentsArr.find(img => img.classList.contains(currentOutfit.garments[i]));
  garmentImg.classList.add('active-img');
}

function populateGarmentsBg() {
  var allBtnsArr = Array.prototype.slice.call(allBtns);
  var bgBtn = allBtnsArr.find(btn => btn.id === currentOutfit.background);
  bgBtn.classList.add('active');
}

function resetBear(){
  clearInputField(saveOutfit);
  resetDataModel();
}
