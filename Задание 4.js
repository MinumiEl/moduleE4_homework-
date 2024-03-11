// Задание 4

function Electrodevicef(name) {
    this.name = name,
    this.electricity = "Powered by an outlet"

}
 Electrodevicef.prototype.getWeight = function (consumption){
    console.log(`Electricity consumption ${consumption} Bt`)
 }

function DevIncluded(name){
    this.on = "ON",
    this.name = name

}
DevIncluded.prototype = new Electrodevicef()

DevIncluded.prototype.getWeight = function (consumption, name){
    console.log(`The appliance is included ${name} - ${consumption} Bt`)
}

function DevicesOff(name) {
    this.off = "Off",
    this.name = name

}
DevicesOff.prototype = new Electrodevicef()

DevicesOff.prototype.getWeight = function (consumption, name){
    console.log(`The appliance is disconnected ${name} - ${consumption} Bt`)
}


const computer = new DevIncluded ('computer');
const phone = new DevIncluded('phone');
const lamp = new DevicesOff('lamp');

computer.getWeight(150, 'computer')
phone.getWeight(6,'phone')
lamp.getWeight(0,'lamp')

console.log(computer)

