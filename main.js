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

function addGarment(event) {
  toggleGarments('hat', 0);
  toggleGarments('clothes', 1);
  toggleGarments('accessories', 2);
  toggleGarments('backgrounds', 3);
  dressBear(event);
  // undressBear(event);
  // If active state already exists, remove active class and item from Garments list.
}

function toggleGarments(category, index) {
  if (event.target.classList.contains(category)) {
    toggleActiveClass();
    placeGarment(index);
  }
}

function toggleActiveClass() {
  // If target has class of active remove class
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

// undressBear(event);

function undressBear(event) {
    for(var i = 0; i < garmentAppear.length; i++) {
      garmentAppear[i].classList.remove('active-img');
  }
}

function dressBear(event) {
  undressBear();
  for(var i = 0; i < garmentAppear.length; i++) {
    if(garmentAppear[i].classList.contains(event.target.id)){
      garmentAppear[i].classList.add('active-img');
    }
  }
}



// var currentGarment = garmentAppear.find(element => element.classList.contains(event.target.id));
// currentGarment.classList.add('active-img')
// Toggle functions for managing garments in each category.


/* Notes */
// Random ID is stored as ID property in new object
// Random ID is also set to saved outfit buttons ID on right column

// How to ensure only one item from each category is added?
