class Outfit {
  constructor(id){
    this.id = id;
    this.title = '';
    this.garments = [];
    this.background = '';
  }

  addGarment(item){
    assignHat(){
      if (event.target.classList.contains('.hats-list .button-style') {
        var hat = event.target.id;
      })
      // assigns hat variable to event target within hat section
    }
    this.garments[0] = hat;
// target within hatBtns nodeList
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
