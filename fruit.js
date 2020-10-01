function Fruit() {
  this.x;
  this.y;
  this.fruitNumber;

  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;
    this.fruitNumber = Math.floor(Math.random() * 2);
  }

  this.draw = function() {
    var img = new Image();
    img.src = `./assets/${this.fruitNumber}.png`;
    ctx.drawImage(img, this.x, this.y, scale, scale);
  }
}
