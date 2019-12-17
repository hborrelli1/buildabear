var outfits = [];
var id = null;

newOutfit();

function newOutfit() {
  // Generate new unique id & set to global variable above
  // now we can modify current outfit in global scope by variable above
  genUniqueId();

  // Push this outfit to 'outfits' global variable ^
  outfits.push(new Outfit(id));
}


genUniqueId() {

}

// add event listener to hats section


// When clicking on a button add active class to button for visual display
// Add garment item to outfit by targeting the id in global variable

// If garment is already active, remove garment from object garment list.



/* Notes */
// Random ID is stored as ID property in new object
// Random ID is also set to saved outfit buttons ID on right column
