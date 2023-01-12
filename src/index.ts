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

    getAmps(w: number, v:number): number {
        return  w / v
    }

    getOhms(v: number, w:number): number{
        return v / this.getAmps(w, v);
    }

    getWater(w: number, ml:number): number{
        return Math.floor(20 + (60 /(4.19 * (ml / w))))
    }
}

// Takistile mõjub pinge 5 volti ning seda läbib vool 2 amprit. Mitu vatti soojust eraldub takistist?
let r1 = new Resistor(2.5);
console.log(r1.getPower(5));

// Takistile mõjub pinge 4 volti ning sealt eraldub võimsus 6 vatti. Mitu amprit voolu läbib takistit?
console.log(r1.getAmps(6,4));

// Mitu oomi on eelneva takisti takistus?
console.log(r1.getOhms(4,6))

// Veekeedukannu võimsuseks on 1 kilovatt, seal sees on vett 1 liiter. Mitme kraadi peale tõuseb vee temperatuur 20 kraadi Celsiuse pealt ühe minutiga, kui kogu sisselülitatud kannu võimsus läheb vee soojendamiseks?
console.log(r1.getWater(1000, 1000))

// Mitu amprit voolu läbib eelnimetatud veekeedukannu, kui võrgupinge on 220 volti?
console.log(r1.getAmps(1000, 220))

// Mitu oomi on selle veekeedukannu takistus?
console.log(r1.getOhms(220, 1000))