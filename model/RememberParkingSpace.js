import * as Storage from '../services/StorageService'

export default class RememberParkingSpace {
    hourDuration = 1;
    minuteDuration = 0;
    until = null;

    constructor(){
        this.until = new Date(Storage.getItem('remember_parkingspace_until'));
    }

    hasRemembered(){
        return !!Storage.getItem('remember_parkingspace_id');
    }

    rememberParkingSpace({parkingLotId, parkingSpaceId}){
        let until = new Date();
        until.setHours(until.getHours() + this.hourDuration);
        until.setMinutes(until.getMinutes() + this.minuteDuration);

        this.until = until;

        Storage.setItem('remember_parkinglot_id', "" + parkingLotId);
        Storage.setItem('remember_parkingspace_id', "" + parkingSpaceId);
        Storage.setItem('remember_parkingspace_until', "" + until);
    }

    getUntil(){
        return this.until;
    }

    getRememberedParkingSpaceId(){
        return Storage.getItem('remember_parkingspace_id');
    }

    getParkingLotId() {
        return Storage.getItem('remember_parkinglot_id');
    }

    forgetRemember = async () => {
        this.until = null;
        await Storage.removeItemAsync('remember_parkinglot_id');
        await Storage.removeItemAsync('remember_parkingspace_id');
        await Storage.removeItemAsync('remember_parkingspace_until');
    }
}