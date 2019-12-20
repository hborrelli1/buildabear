var outfits = [];
var column1 = document.querySelector('.column1');
// var column2 = document.querySelector('.column2');
var hatSection = document.querySelector('.hats-list');
var clothesSection = document.querySelector('.clothes-list');
var accessoriesSection = document.querySelector('.accessories-list');
var backgroundsSection = document.querySelector('.backgrounds-list');
var hatBtns = document.querySelectorAll('.hats-list .button-style');
var garmentAppear = document.querySelectorAll('.garment');
//next two variables allow us to use clearInputField function
var saveOutfit = document.querySelector('.disable-save');
var outFitInput = document.querySelector('.outfit-namer');
var id = Date.now();
var newOutfit = new Outfit(id);

column1.addEventListener('click', addGarment);
saveOutfit.addEventListener('click', clearInputField);
outFitInput.addEventListener('input', disableSaveButton)

function addGarment(event) {
  toggleGarments('hat', 0);
  toggleGarments('clothes', 1);
  toggleGarments('accessories', 2);
  toggleGarments('backgrounds', 3);
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


clearInputField(saveOutfit);

function clearInputField(saveOutfit) {
  outFitInput.value = "";
  disableSaveButton(event);
}

function disableSaveButton(event){
  if(outFitInput.value != "") {
    console.log('yo');
    saveOutfit.classList.remove('disable-save');
  }
}
