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
    getPotential(current: number): number {
        return current * this.r;
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
    getTotalPower(u: number) {
        return this.getCurrent(u) * u;
    }
    getBiggestResistorPower(u: number) {
        if (this.resistors.length == 0) { return 0; }
        let current: number = this.getCurrent(u);
        let biggestPower: number = this.resistors[0].getPower(this.resistors[0].getPotential(current));
        for (let i = 1; i < this.resistors.length; i++) {
            let power: number = this.resistors[i].getPower(this.resistors[i].getPotential(current));
            if (power > biggestPower) { biggestPower = power; }
        }
        return biggestPower;
    }
    getBiggestResistorResistance(): number {
        if (this.resistors.length == 0) {
            return 0; 
        }

        let biggestResistance = this.resistors[0].getResistance();

        for (let i = 1; i < this.resistors.length; i++) {
            let resistance = this.resistors[i].getResistance();
            if (resistance > biggestResistance) { 
                biggestResistance = resistance;
            }
        }
        return biggestResistance;
    }
    getBiggestVoltageDrop(u: number): number {
        if (this.resistors.length == 0) {
             return 0; 
        }

        let current = this.getCurrent(u);
        let biggestVoltageDrop = this.resistors[0].getResistance() * current;

        for (let i = 1; i < this.resistors.length; i++) {
            let voltageDrop = this.resistors[i].getResistance() * current;
            if (voltageDrop > biggestVoltageDrop) {
                 biggestVoltageDrop = voltageDrop; 
            }
        }
        return biggestVoltageDrop;
    }
}

// let sc1: SeriesCircuit = new SeriesCircuit();
// sc1.push(new Resistor(220));
// sc1.push(new Resistor(220));
// sc1.push(new Resistor(330));
// console.log(sc1.getTotalResistance());
// console.log(sc1.getCurrent(12));

// Koosta jadaühenduse klassist kaks eksemplari, katseta tulemusi mitmesuguse pinge korral. Võrdle käsitsi arvutatud tulemusi programmi pakutuga.
let sc1: SeriesCircuit = new SeriesCircuit();
let sc2: SeriesCircuit = new SeriesCircuit();

sc1.push(new Resistor(220));
sc1.push(new Resistor(220));
sc1.push(new Resistor(330));
console.log("sc1 Total Resistance: " + sc1.getTotalResistance());
console.log("sc1 Current at 10V: " + sc1.getCurrent(10));
console.log("sc1 Current at 20V: " + sc1.getCurrent(20));
console.log("sc1 Total Power at 10V: " + sc1.getTotalPower(10)); // kogu eralduva võimsus
console.log("sc1 Biggest Resistor Resistance: " + sc1.getBiggestResistorResistance());
console.log("sc1 Biggest Voltage Drop at 5V: " + sc1.getBiggestVoltageDrop(5) + "V"); // langev pinge 5 volti all
console.log("sc1 Biggest Resistor Power: " + (sc1.getBiggestResistorPower(12)));

console.log("-------------------------------------------------")

sc2.push(new Resistor(100));
sc2.push(new Resistor(100));
console.log("sc2 Total Resistance: " + sc2.getTotalResistance());
console.log("sc2 Current at 10V: " + sc2.getCurrent(10));
console.log("sc2 Current at 20V: " + sc2.getCurrent(20));
console.log("sc2 Total Power at 10V: " + sc2.getTotalPower(10)); // kogu eralduva võimsus
console.log("sc2 Biggest Resistor Resistance: " + sc2.getBiggestResistorResistance());
console.log("sc2 Biggest Voltage Drop at 5V: " + sc2.getBiggestVoltageDrop(5) + "V"); // langev pinge 5 volti all
console.log("sc2 Biggest Resistor Power: " + (sc2.getBiggestResistorPower(12)));