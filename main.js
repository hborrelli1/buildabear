var outfits = [];
var column1 = document.querySelector('.column1');
var hatSection = document.querySelector('.hats-list');
var clothesSection = document.querySelector('.clothes-list');
var accessoriesSection = document.querySelector('.accessories-list');
var backgroundsSection = document.querySelector('.backgrounds-list');
var hatBtns = document.querySelectorAll('.hats-list .button-style');
var garmentAppear = document.querySelectorAll('.garment');
column1.addEventListener('click', addGarment);

var id = Date.now();
var newOutfit = new Outfit(id);

// Event LIstener on the parent
// If the event.target has class of hat
// Add element id to index 0 of garments array.

function addGarment(event) {
  toggleGarments('hat', 0);
  toggleGarments('clothes', 1);
  toggleGarments('accessories', 2);
  toggleGarments('backgrounds', 3);
  // dressBear(event);
  // undressBear(event);
  // If active state already exists, remove active class and item from Garments list.
}

// Refactored functions from above
function toggleGarments(category, index) {
  if (event.target.classList.contains(category)) {
    toggleActiveClass();
    toggleGarment(index);
  }
}

function toggleActiveClass() {
  // If target has class of active remove class
  if (event.target.classList.contains('active')){
    event.target.classList.remove('active');
  } else {
    // If it does not contain the class, remove 'active' class from all siblings
    var parent = event.target.parentNode;
    for (var i = 0; i < parent.children.length; i++) {
      parent.children[i].classList.remove('active');
      // Remove all images from category from Bear
    }
    // Add new item image to bear
    // Add class to newly clicked item.
    event.target.classList.add('active');
  }
}

function toggleGarment(i) {
  newOutfit.garments.splice(i, 1, event.target.id);
}

undressBear(event);

function undressBear(event) {
    for(var i = 0; i < garmentAppear.length; i++);
      garmentAppear[i].setAttribute('hidden', true);
  }
// function dressBear(event) {
//   undressBear();
//   for(var i = 0; i < garmentAppear.length; i++) {
//     if(garmentAppear[i].classList.contains(event.target.id)){
//       garmentAppear[i].classList.add('active-img');
//     }
//   }
// }



// var currentGarment = garmentAppear.find(element => element.classList.contains(event.target.id));
// currentGarment.classList.add('active-img')
// Toggle functions for managing garments in each category.


/* Notes */
// Random ID is stored as ID property in new object
// Random ID is also set to saved outfit buttons ID on right column

// How to ensure only one item from each category is added?
