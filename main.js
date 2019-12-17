var outfits = [];
var hatSection = document.querySelector('.hats-list');

var outfit1 = new Outfit();

hatSection.addEventListener('click', addGarment);

function addGarment(event) {
  if (event.target.classList.contains('button-style')) {
    outfit1.garments.push(event.target.id);
  }
}

// event listener on buttons
// when clicked add element to array.
