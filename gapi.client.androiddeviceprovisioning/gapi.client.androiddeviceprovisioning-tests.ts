/* This is stub file for gapi.client.androiddeviceprovisioning definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200916

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('androiddeviceprovisioning', 'v1', () => {
        /** now we can use gapi.client.androiddeviceprovisioning */

        run();
    });

    async function run() {
        /** Lists the user's customer accounts. */
        await gapi.client.androiddeviceprovisioning.customers.list({
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Creates a new configuration. Once created, a customer can apply the configuration to devices. */
        await gapi.client.androiddeviceprovisioning.customers.configurations.create({
            parent: "Test string",
        }, {
            companyName: "Test string",
            configurationId: "Test string",
            configurationName: "Test string",
            contactEmail: "Test string",
            contactPhone: "Test string",
            customMessage: "Test string",
            dpcExtras: "Test string",
            dpcResourcePath: "Test string",
            isDefault: true,
            name: "Test string",
        });
        /** Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied. */
        await gapi.client.androiddeviceprovisioning.customers.configurations.delete({
            name: "Test string",
        });
        /** Gets the details of a configuration. */
        await gapi.client.androiddeviceprovisioning.customers.configurations.get({
            name: "Test string",
        });
        /** Lists a customer's configurations. */
        await gapi.client.androiddeviceprovisioning.customers.configurations.list({
            parent: "Test string",
        });
        /** Updates a configuration's field values. */
        await gapi.client.androiddeviceprovisioning.customers.configurations.patch({
            name: "Test string",
            updateMask: "Test string",
        }, {
            companyName: "Test string",
            configurationId: "Test string",
            configurationName: "Test string",
            contactEmail: "Test string",
            contactPhone: "Test string",
            customMessage: "Test string",
            dpcExtras: "Test string",
            dpcResourcePath: "Test string",
            isDefault: true,
            name: "Test string",
        });
        /**
         * Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first
         * boot, or next factory reset.
         */
        await gapi.client.androiddeviceprovisioning.customers.devices.applyConfiguration({
            parent: "Test string",
        }, {
            configuration: "Test string",
            device: {
                deviceId: "Test string",
                deviceIdentifier: {
                    imei: "Test string",
                    manufacturer: "Test string",
                    meid: "Test string",
                    model: "Test string",
                    serialNumber: "Test string",
                },
            },
        });
        /** Gets the details of a device. */
        await gapi.client.androiddeviceprovisioning.customers.devices.get({
            name: "Test string",
        });
        /** Lists a customer's devices. */
        await gapi.client.androiddeviceprovisioning.customers.devices.list({
            pageSize: "Test string",
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Removes a configuration from device. */
        await gapi.client.androiddeviceprovisioning.customers.devices.removeConfiguration({
            parent: "Test string",
        }, {
            device: {
                deviceId: "Test string",
                deviceIdentifier: {
                    imei: "Test string",
                    manufacturer: "Test string",
                    meid: "Test string",
                    model: "Test string",
                    serialNumber: "Test string",
                },
            },
        });
        /**
         * Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch
         * enrollment again.
         */
        await gapi.client.androiddeviceprovisioning.customers.devices.unclaim({
            parent: "Test string",
        }, {
            device: {
                deviceId: "Test string",
                deviceIdentifier: {
                    imei: "Test string",
                    manufacturer: "Test string",
                    meid: "Test string",
                    model: "Test string",
                    serialNumber: "Test string",
                },
            },
        });
        /** Lists the DPCs (device policy controllers) that support zero-touch enrollment. */
        await gapi.client.androiddeviceprovisioning.customers.dpcs.list({
            parent: "Test string",
        });
        /** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
        await gapi.client.androiddeviceprovisioning.operations.get({
            name: "Test string",
        });
    }
});
