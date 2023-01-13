class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getResistance(): number {
        return this.r;
    }
}

class SeriesCircuit {
    resistors: Resistor[] = []
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getTotalResistance() {
        let sum: number = 0;
        this.resistors.forEach((r: Resistor) => { sum += r.getResistance() });
        return sum;
    }
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }
}

// let sc1: SeriesCircuit = new SeriesCircuit();
// sc1.push(new Resistor(220));
// sc1.push(new Resistor(220));
// sc1.push(new Resistor(110));
// console.log(sc1.getTotalResistance());
// console.log(sc1.getCurrent(12));

let sc1: SeriesCircuit = new SeriesCircuit();
sc1.push(new Resistor(220));
sc1.push(new Resistor(220));
sc1.push(new Resistor(220));

let current = sc1.getCurrent(12);
console.log("Current: " + current.toFixed(4));

let v1 = current * sc1.resistors[0].getResistance();
console.log("Voltage across first resistor: " + v1 + "V");

let v2 = current * sc1.resistors[1].getResistance();
console.log("Voltage across second resistor: " + v2 + "V");

let v3 = current * sc1.resistors[2].getResistance();
console.log("Voltage across third resistor: " + v3 + "V");

let p1 = sc1.resistors[0].getPower(v1);
console.log("Power dissipated by first resistor: " + p1.toFixed(4) + "W");

let p2 = sc1.resistors[1].getPower(v2);
console.log("Power dissipated by second resistor: " + p2.toFixed(4) + "W");

let p3 = sc1.resistors[2].getPower(v3);
console.log("Power dissipated by third resistor: " + p3.toFixed(4) + "W");

console.log("------------------------------------------------------------------");

let sc2: SeriesCircuit = new SeriesCircuit();
sc2.push(new Resistor(110));
sc2.push(new Resistor(220));
sc2.push(new Resistor(220));

console.log("Total Series Resistance: " + sc2.getTotalResistance() + " ohms");

let current2 = sc2.getCurrent(12);
console.log("Current through series: " + current2.toFixed(5) + "A");

let v1_2 = current * sc2.resistors[0].getResistance();
console.log("Voltage across first resistor: " + v1_2 + "V");

let v2_2 = current * sc2.resistors[1].getResistance();
console.log("Voltage across second resistor: " + v2_2 + "V");

let v3_2 = current * sc2.resistors[2].getResistance();
console.log("Voltage across third resistor: " + v3_2 + "V");

let p1_2 = sc2.resistors[0].getPower(v1_2);
console.log("Power dissipated by first resistor: " + p1_2.toFixed(4) + "W");

let p2_2 = sc2.resistors[1].getPower(v2_2);
console.log("Power dissipated by first resistor: " + p2_2.toFixed(4) + "W");

let p3_2 = sc2.resistors[2].getPower(v3_2);
console.log("Power dissipated by first resistor: " + p3_2.toFixed(4) + "W");



