var outfits = [];
var column1 = document.querySelector('.column1');
var hatSection = document.querySelector('.hats-list');
var clothesSection = document.querySelector('.clothes-list');
var accessoriesSection = document.querySelector('.accessories-list');
var backgroundsSection = document.querySelector('.backgrounds-list');
var hatBtns = document.querySelectorAll('.hats-list .button-style');
var garmentAppear = document.querySelectorAll('.garment');
var backgroundsArray = document.querySelectorAll('.backgrounds');
var id = Date.now();
var newOutfit = new Outfit(id);
var bearContainer = document.querySelector('.bear-container');

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
    } else if(garmentAppear[i].classList.contains(event.target.id)){
      garmentAppear[i].classList.add('active-img');
    }
  }
}

function placeBackground(background) {
  if (event.target.classList.contains('backgrounds')) {
    toggleActiveClass();
    changeBackgroundData(background);
    changeBackgroundImg();
  }
}

function changeBackgroundData(background) {
if (newOutfit.background === event.target.id) {
  newOutfit.changeBackground(null)
} else {
  newOutfit.changeBackground(event.target.id)
  }
}


// function changeBackgroundImg(event, category) {
function changeBackgroundImg() {
  for(var i = 0; i < backgroundsArray.length; i++) {
  if(event.target.id === 'beach-background'){
    bearContainer.style.backgroundImage="url(assets/beach.png)"
  } else if((event.target.id === 'beach-background') &&  (bearContainer.style.backgroundImage === "url(assets/beach.png)")){
    bearContainer.style.backgroundImage = "";
  } else if(event.target.id === 'park-background'){
    bearContainer.style.backgroundImage = "url(assets/park.png)"
  } else if(event.target.id === 'space-background'){
    bearContainer.style.backgroundImage = "url(assets/outerspace.png)"
  } else if(event.target.id === 'hearts-background'){
    bearContainer.style.backgroundImage ="url(assets/hearts.png)"
  } else if(event.target.id === 'blue-background'){
    bearContainer.style.backgroundImage = "";
    bearContainer.style.backgroundColor = "#1794A0";
  } else if(event.target.id === 'yellow-background'){
    bearContainer.style.backgroundImage = "";
    bearContainer.style.backgroundColor = "#E2B76B";
    }
  }
}

// if(backgroundsArray[i].)
//
//     } else if(backgroundsArray[i].classList.contains(event.target.id)){
//       backgroundsArray[i].classList.add('active-img');
//     }
//   }
// }
