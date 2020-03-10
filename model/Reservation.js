import * as Storage from '../services/StorageService'
import * as ApiService from '../services/ApiService';

export default class Reservation {
    hourStart = null;
    minuteStart = null;
    hourDuration = 1;
    minuteDuration = 0;

    hasReservation(){
        return !!Storage.getItem('reserve_parkingspace_id');
    }

    getUntil(){
        let parkedFrom = this.getParkedFrom();

        let until = new Date();
        until.setHours(parkedFrom.getHours() + this.hourDuration);
        until.setMinutes(parkedFrom.getMinutes() + this.minuteDuration);

        return until;
    }

    getParkedFrom(){
        let parkedFrom = new Date();
        parkedFrom.setHours(this.hourStart);
        parkedFrom.setMinutes(this.minuteStart);

        return parkedFrom;
    }

    async reserveParkingSpace({parkingLotId, parkingSpaceId}){
        let until = this.getUntil();
        let parkedFrom = this.getParkedFrom();

        let data = ApiService.getData();
        let reservationForApi = {
            parking_lot_id: parkingLotId,
            parking_space_id: data[parkingLotId].spaces[parkingSpaceId].id,
            start: Math.ceil(parkedFrom.getTime() / 1000),
            end: Math.ceil(until.getTime() / 1000)
        }

        /*
        // does not work...
        let oldReservations = await ApiService.getReservationsOfThisUserAsync();

        let promises = [];
        for (let oldReservation of oldReservations) {
            promises.push(ApiService.deleteReservationAsync(JSON.parse(oldReservation)));
        }
        await Promise.all(promises); */
        let response = await ApiService.reserveAsync(reservationForApi);
        if (response.status == "success") {
            data = await ApiService.fetchAllAsync();
            Storage.setItem('reserve_parkinglot_id', "" + parkingLotId);
            Storage.setItem('reserve_parkingspace_id', "" + parkingSpaceId);
            Storage.setItem('reserve_parkingspace_until', "" + until);
            console.log('reservation successful');
        } else {
            console.warn('error while reserving parkingspace');
            console.log(response);
        }
    }

    getParkingLotId() {
        return Storage.getItem('reserve_parkinglot_id');
    }

    isParkingSpaceReserved(parkingSpace){
        return parkingSpace.xml_id == Storage.getItem('reserve_parkingspace_id') && parkingLotId.parking_lot_id == Storage.getItem('reserve_parkinglot_id')
            || parkingSpace.reserved
    }

    getReservedParkingSpaceId(){
        return Storage.getItem('reserve_parkingspace_id');
    }

    forgetReservation = async () => {
        await Storage.removeItemAsync('reserve_parkinglot_id');
        await Storage.removeItemAsync('reserve_parkingspace_id');
        await Storage.removeItemAsync('reserve_parkingspace_until');
    }
}