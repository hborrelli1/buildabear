class Outfit {
  constructor(id){
    this.id = id;
    this.title = '';
    this.garments = [null, null, null];
    this.background = '';
  }

  addGarment(i, item){
    this.garments.splice(i, 1, item);
  }

  removeGarment(i, item){
    if (this.garments[i] === item) {
      this.garments.splice(i, null);
    }
  }

  changeBackground(background) {
    this.background = background;
  }
};
