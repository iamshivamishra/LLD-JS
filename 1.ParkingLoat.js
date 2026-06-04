let ParkingLot = (() => {

   let instance;

  class ParkingLot {


    constructor(totalSlots, gates) {

      this.totalSlots = totalSlots;

      this.availableSlots = totalSlots;

      this.gates = gates;

      this.parkedVehicles = new Map();

      this.nextSlot = 0;
    }

    parkVehicle(vehicleNumber) {

      if (this.availableSlots <= 0) {
        return "No available slots";
      }

      this.parkedVehicles.set(this.nextSlot, vehicleNumber);

      this.availableSlots--;

      return `Vehicle ${vehicleNumber} parked at slot ${this.nextSlot++}`;
    }

    removeVehicle(vehicleNumber) {

      for (let [slot, number] of this.parkedVehicles) {

        if (number === vehicleNumber) {

          this.parkedVehicles.delete(slot);

          this.availableSlots++;

          return `Vehicle ${vehicleNumber} removed from slot ${slot}`;
        }
      }

      return `Vehicle ${vehicleNumber} not found`;
    }

    getAvailableSlots() {
      return this.availableSlots;
    }
  }

  return {

    getInstance: (totalSlots, gates) => {

      if (!instance) {

        instance = new ParkingLot(totalSlots, gates);
      }

      return instance;
    }
  };

})(); 



// ==================== TEST CASE ====================

let lot = ParkingLot.getInstance(
  100,
  [{ entry: true, exit: true }]
);

console.log(
  lot.parkVehicle("KA-01-HH-1234")
);
console.log(
  lot.removeVehicle("KA-01-HH-1234")
);


console.log(
  lot.getAvailableSlots()
);
