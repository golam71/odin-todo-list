class Golam {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  golam() {
    return `${this.name} is ${String(this.age)} years olda`;
  }
}

class Homie extends Golam {
  constructor(name, age) {
    super(name, age);
  }
  g() {
    return super.golam();
  }
}

let x = new Homie("golam", 19);

console.log(x.g());
