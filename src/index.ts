class Resistor {
  r: number = 0;
  maxPower: number = 0;
  maxVoltage: number = 0;

  constructor(r: number, maxPower: number, maxVoltage: number) {
    this.r = r;
    this.maxPower = maxPower;
    this.maxVoltage = maxVoltage;
  }
  getCurrent(u: number): number {
    return u / this.r;
  }
  getPower(u: number): number {
    return u * this.getCurrent(u);
  }
  getMaxPower(): number {
    return this.maxPower;
  }
  isVoltageAllowed(u: number): boolean {
    return u <= this.maxVoltage;
  }
}

// Lisa takistile väli lubatud maksimumvõimsuse kohta. Selle sisestamine on vajalik konstruktoris.
// r, maxPower, maxVoltage
let r1 = new Resistor(220, 100, 20);

// Loo käsk kontrollimaks, kas parameetrina antud pinge on vastava takisti puhul lubatud - st. kas pingestamisel eralduv võimsus jääb lubatud maksimuvõimsuse piiresse
console.log(r1.isVoltageAllowed(19)); // true
console.log(r1.isVoltageAllowed(21)); // false

// Koosta takistitest massiiv. Koosta funktsioon, mis loob uue massiivi takistitest, mille lubatud võimsus jääb etteantud pinge korral lubatud piiresse.
// r, maxPower, maxVoltage
const resistors: Resistor[] = [
    new Resistor(220, 100, 10),
    new Resistor(330, 200, 15),
    new Resistor(100, 50, 5),
    new Resistor(100, 70, 8)
];

function getAllowedResistor(voltage: number, resistors: Resistor[]): Resistor[] {
    return resistors.filter(resistor => resistor.isVoltageAllowed(voltage));
}


// voltageAmount, resistors dict
let allowedResistor = getAllowedResistor(8, resistors); // vastus: 3, kuna üks on alla 8 volti
console.log(allowedResistor)