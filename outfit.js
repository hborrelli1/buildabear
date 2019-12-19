class Outfit {
  constructor(id){
    this.id = id;
    this.title = '';
    this.garments = [null, null, null, null];
    this.background = '';
  }

  addGarment(item){
    this.garments.push(item);
  }

  removeGarment(item){
    if (this.garments.includes(item)) {
      this.garments.splice(this.garments.indexOf(item), 1);
    }
  }

  changeBackground(background) {
    this.background = background
  }
};


// function valueCompare() {
//  if (parseInt(maxInput.value) < parseInt(minInput.value) &&
//     (minInput.value != "") && (maxInput.value != "")) {
//         errorAlert.removeAttribute('hidden');
//         maxInput.classList.add('max-input-border');
//         updateBtn.setAttribute('disabled', 'disabled')
//     } else {
//       errorAlert.setAttribute('hidden', true);
//       maxInput.classList.remove('max-input-border')
//         }
//      };
