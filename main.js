var outfits = [];
var hatSection = document.querySelector('.hats-list');
var clothesSection = document.querySelector('.clothes-list');
var accessoriesSection = document.querySelector('.accessories-list');
var backgroundsSection = document.querySelector('.backgrounds-list');

hatSection.addEventListener('click', addGarment);
clothesSection.addEventListener('click', addGarment);
accessoriesSection.addEventListener('click', addGarment);
backgroundsSection.addEventListener('click', addGarment);

// Create new outfit on load.
newOutfit();

function newOutfit() {
  var id = Date.now();
  outfits.push(new Outfit(id));
}



function addGarment(event) {
  if (event.target.classList.contains('button-style')) {
    toggleActiveClass();
    toggleGarment();
  }
  // Add garment item to outfit by targeting the id in global variable

  // If active state already exists, remove active class and item from Garments list.

}

function toggleActiveClass() {
  if (event.target.classList.contains('active')){
    event.target.classList.remove('active');
  } else {
    event.target.classList.add('active');
  }
}

function toggleGarment() {
  var currentOutfit = (outfits.length - 1);
  if(outfits[currentOutfit].garments.includes(event.target.id)) {
    outfits[currentOutfit].removeGarment(event.target.id);
  } else {
    outfits[currentOutfit].addGarment(event.target.id);
  }
}


// Toggle functions for managing garments in each category.


/* Notes */
// Random ID is stored as ID property in new object
// Random ID is also set to saved outfit buttons ID on right column

// How to ensure only one item from each category is added?
