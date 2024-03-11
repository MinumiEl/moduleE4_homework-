// Задание 5

class Electro{
    constructor(name, consumption) {
        this.name = name;
        this.consumption = consumption;
        this.electricity = "Powered by an outlet";
    }
    DevIncluded(){
        console.log('The appliance is included'+ " " + this.name + " " + '-' + " " + this.consumption +'Bt');
        this.on = "ON";

    }
    DevicesOff() {
        console.log('The appliance is disconnected' + " " + this.name + " " + '-' + " " + this.consumption +'Bt');
        this.off = "Off";


    }
}

const computer = new Electro( 'computer', 150);
const phone = new Electro('phone', 6);
const lamp = new Electro('lamp', 0);

console.log(computer.DevIncluded());
console.log(phone.DevIncluded());
console.log(lamp.DevicesOff());