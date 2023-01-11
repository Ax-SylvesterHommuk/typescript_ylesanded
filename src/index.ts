class Resistor {
    r: number = 0;
    constructor(r: number) {
      this.r = r;
    }
    getCurrent(u: number): number {
      return u / this.r;
    }
  }
  
let r1: Resistor = new Resistor(110);
console.log(r1.getCurrent(5));
let r2: Resistor = new Resistor(220);
console.log(r2.getCurrent(5));
let r3: Resistor = new Resistor(4700);
console.log(r3.getCurrent(5));

let resistors: Resistor[] = [];
resistors.push(new Resistor(110));
resistors.push(new Resistor(220));
resistors.push(new Resistor(4700));
let totalCurrent: number = 0;
resistors.forEach((resistor) => { totalCurrent += resistor.getCurrent(5); });
console.log(totalCurrent);