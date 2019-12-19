var outfits = [];
var column1 = document.querySelector('.column1');
var hatSection = document.querySelector('.hats-list');
var clothesSection = document.querySelector('.clothes-list');
var accessoriesSection = document.querySelector('.accessories-list');
var backgroundsSection = document.querySelector('.backgrounds-list');
var hatBtns = document.querySelectorAll('.hats-list .button-style');
var garmentAppear = document.querySelectorAll('.garment');
var id = Date.now();
var newOutfit = new Outfit(id);

column1.addEventListener('click', addGarment);
column1.addEventListener('click', placeBackground);

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
      console.log('if')
    } else if(garmentAppear[i].classList.contains(event.target.id)){
      garmentAppear[i].classList.add('active-img');
      console.log('else if')
    }
  }
}

function placeBackground(background) {
  if (event.target.classList.contains('backgrounds')) {
    toggleActiveClass();
    if (newOutfit.background === event.target.id) {
      newOutfit.changeBackground(null)
    } else {
      newOutfit.changeBackground(event.target.id)
    }
  }
}
