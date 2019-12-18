var outfits = [];
var hatSection = document.querySelector('.hats-list');
var clothesSection = document.querySelector('.clothes-list');
var column1 = document.querySelector('.column1');
var accessoriesSection = document.querySelector('.accessories-list');
var backgroundsSection = document.querySelector('.backgrounds-list');
var hatBtns = document.querySelectorAll('.hats-list .button-style');

column1.addEventListener('click', addGarment);
// hatSection.addEventListener('click', addGarment);
// clothesSection.addEventListener('click', addGarment);
// accessoriesSection.addEventListener('click', addGarment);
// backgroundsSection.addEventListener('click', addGarment);

// Create new outfit on load.
var id = Date.now();
var newOutfit = new Outfit(id);
  // outfits.push(new Outfit(id));
// }

// Event LIstener on the parent
// If the event.target has class of hat
// Add element id to index 0 of garments array.

function addGarment(event) {
  if (event.target.classList.contains('hat')) {
    toggleActiveClass();
    toggleGarment(0);
  }

  if (event.target.classList.contains('clothes')) {
    toggleActiveClass();
    toggleGarment(1);
  }

  if (event.target.classList.contains('accessories')) {
    toggleActiveClass();
    toggleGarment(2);
  }

  /*
  toggleGarments('hat', 0);
  toggleGarments('clothes', 1);
  toggleGarments('accessories', 2);
  */
  // If active state already exists, remove active class and item from Garments list.
}

// Refactored functions from above
function toggleGarments(category, index) {
  if (event.target.classList.contains(category)) {
    toggleActiveClass();
    toggleGarment(index);
  }
}




// function addGarment(event) {
//   if (event.target.classList.contains('button-style')) {
//     toggleActiveClass();
//     toggleGarment();
//   }
//   // Add garment item to outfit by targeting the id in global variable
//
//   // If active state already exists, remove active class and item from Garments list.
// }

function toggleActiveClass() {
  if (event.target.classList.contains('active')){
    event.target.classList.remove('active');
  } else {
    event.target.classList.add('active');
  }
}

function toggleGarment(i) {
  newOutfit.garments.splice(i, 1, event.target.id);

  // if(newOutfit.garments.includes(event.target.id)) {
  //   outfits[currentOutfit].removeGarment(event.target.id);
  // } else {
  //   outfits[currentOutfit].addGarment(event.target.id);
  // }
}


// Toggle functions for managing garments in each category.


/* Notes */
// Random ID is stored as ID property in new object
// Random ID is also set to saved outfit buttons ID on right column

// How to ensure only one item from each category is added?
