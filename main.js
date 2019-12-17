var outfits = [];
var hatSection = document.querySelector('.hats-list');

var outfit1 = new Outfit();

hatSection.addEventListener('click', addGarment);

function addGarment(event) {
  var hat;

  if (event.target.classList.contains('button-style')) {
    hat = event.target.id;
    outfit1.garments.push(hat);

    for (var i = 0; i < this.children.length; i++) {
      this.children[i].disabled = false;
    }
    event.target.disabled = true;
  }
}

// event listener on buttons
// when clicked add element to array.
