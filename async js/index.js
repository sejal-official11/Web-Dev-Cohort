const user = {
  name: "Sejal",
  age: 24,
};

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }
  paint() {
    console.log(`Painting with color ${this.color}`);
  }


  destroy() {

  }

  
}


const rect = new Rectangle(11, 4, "red");
const area = rect.area();
console.log(area);
rect.paint();
 