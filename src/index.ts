class ParallelCircuit {
    private resistance1: number;
    private resistance2: number;
    private resistors: number[];

    constructor(resistance1: number, resistance2: number, resistors: number[]) {
        this.resistance1 = resistance1;
        this.resistance2 = resistance2;
        this.resistors = resistors;
    }

    getTotalResistance(): number {
        return 1 / (1 / this.resistance1 + 1 / this.resistance2);
    }

    getTotalResistance_2(): number { // Masiivi jaoks
        let totalResistance = 0;
        for (const resistance of this.resistors) {
            totalResistance += 1 / resistance;
        }
        return 1 / totalResistance;
    }
}

let resistors:number[]=[110, 220, 220];
let inversesum:number=0;
for(let resistance of resistors){
    inversesum+=1/resistance;
}
console.log(1/inversesum);


// Jalgratta tulede patarei pinge on 4,5 volti. Esituld läbi vool 1 amper. Milline on esitule võimsus? Milline on esitule takistus?
let voltage = 4.5;
let current = 1;
let power = voltage * current;
console.log("Power of the headlight: " + power + " watts");

let resistance = voltage / current;
console.log("Front light resistance: " + resistance + " ohms");


// Sama jalgratta tagatuld läbib vool 0,5 amprit. Milline on tagatule võimsus? Milline on tagatule takistus?
let voltage_2 = 4.5;
let current_2 = 0.5;
let power_2 = voltage_2 * current_2;
console.log("Wattage of the tail light: " + power_2 + " watts");


// Milline on kahest rööbiti ühendatud jalgrattatulest koosneva lampide süsteemi võimsus kokku 4,5 voldi juures? Milline on selle lampide süsteemi kogutakistus oomides?
let current1 = 1;
let power1 = voltage * current1;
let current2 = 0.5;
let power2 = voltage * current2;
let total_power = power1 + power2;
console.log("Wattage of the system of lamps: " + total_power + " watts");

let resistance1 = voltage / current1;
let resistance2 = voltage / current2;
let total_resistance = resistance1 + resistance2;
console.log("Total resistance of the system of lamps: " + total_resistance + " ohms"); // oomides


// Rööpühendusse paigutati takistid 2 oomi ning 2 oomi. Leia tekkinud rööpühenduse kogutakistus.
let R1 = 2;
let R2 = 2;
let Rtotal = 1 / (1/R1 + 1/R2);
console.log("Total resistance of the rail connection: " + Rtotal + " ohms");


// Rööpühendusse paigutati takistid 2 oomi ning 4 oomi. Leia tekkinud rööpühenduse kogutakistus.
let R1_2 = 2;
let R2_2 = 4;
let Rtotal_2 = 1 / (1/R1_2 + 1/R2_2);
console.log("Total resistance of the rail connection: " + Rtotal_2 + " ohms");


// Programmi sisestatakse kahe takisti takistused. Väljasta nendest moodustatud rööpühenduse kogutakistus.
let pc = new ParallelCircuit(2, 4, []); // Tühi masiiv kuna klassi constructoris on vaja aga siin pole.
console.log("Total resistance: " + pc.getTotalResistance() + " ohms");


// Alamprogrammile antakse ette massiiv takistite takistustest. Tagasta nendest moodustatud rööpühenduse kogutakistus
let resistors_2 = [2, 4, 6, 8];
let pc_2 = new ParallelCircuit(0, 0, resistors_2);
console.log("Total resistance: " + pc_2.getTotalResistance_2() + " ohms");





