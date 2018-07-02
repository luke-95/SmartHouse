import { Device } from "src/app/models/Device";


export class Category {
    public name: string;
    public devices: Array<Device>;
    public filtered_devices: Array<Device>;
    public filters: Array<string>;

    public constructor(name: string, devices:Array<Device>) {
        this.name = name;
        this.devices = devices;
        this.filters = [];
        this.filtered_devices = this.getFilteredDevices();
    }

    addFilter(filter: string) {
        this.filters.push(filter);
        this.filtered_devices = this.getFilteredDevices();

        console.log("Added filter: " + filter);
        console.log("Filtered devices: " + this.filtered_devices);
    }

    addDevice(device: Device) {
        if (!this.devices.includes(device))
        {
            this.devices.push(device);
            this.filtered_devices = this.getFilteredDevices();
        }
    }
    
    removeFilter(filter: string) {
        this.filters.forEach( (filter_item, index) => {
            if(filter_item === filter) this.filters.splice(index,1);
        });    
    }

    removeAllFilters() {
        this.filters = [];
        this.filtered_devices = this.getFilteredDevices();
    }

    removeDevice(device) {
        this.devices.forEach( (device_item, index) => {
            if(device_item == device) this.devices.splice(index,1);
        });
    }

    removeDeviceByName(device_name) {
        this.devices.forEach( (device_item, index) => {
            if(device_item.Name === device_name) this.devices.splice(index,1);
        });
    }

    getFilteredDevices() {
        if (this.filters.length > 0) {
            return this.devices.filter(device => this.filters.includes(device.Type));
        } else {
            return this.devices;
        }
    }
}
