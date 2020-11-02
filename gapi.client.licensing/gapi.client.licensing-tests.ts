/* This is stub file for gapi.client.licensing definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201031

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('licensing', 'v1', () => {
        /** now we can use gapi.client.licensing */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage G Suite licenses for your domain */
            'https://www.googleapis.com/auth/apps.licensing',
        ];
        const immediate = false;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle successful authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
    });

    async function run() {
        /** Revoke a license. */
        await gapi.client.licensing.licenseAssignments.delete({
            productId: "Test string",
            skuId: "Test string",
            userId: "Test string",
        });
        /** Get a specific user's license by product SKU. */
        await gapi.client.licensing.licenseAssignments.get({
            productId: "Test string",
            skuId: "Test string",
            userId: "Test string",
        });
        /** Assign a license. */
        await gapi.client.licensing.licenseAssignments.insert({
            productId: "Test string",
            skuId: "Test string",
        }, {
            userId: "Test string",
        });
        /** List all users assigned licenses for a specific product SKU. */
        await gapi.client.licensing.licenseAssignments.listForProduct({
            customerId: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            productId: "Test string",
        });
        /** List all users assigned licenses for a specific product SKU. */
        await gapi.client.licensing.licenseAssignments.listForProductAndSku({
            customerId: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            productId: "Test string",
            skuId: "Test string",
        });
        /** Patch a Licensing info via Apiary Patch Orchestration */
        await gapi.client.licensing.licenseAssignments.patch({
            productId: "Test string",
            skuId: "Test string",
            userId: "Test string",
        }, {
            etags: "Test string",
            kind: "Test string",
            productId: "Test string",
            productName: "Test string",
            selfLink: "Test string",
            skuId: "Test string",
            skuName: "Test string",
            userId: "Test string",
        });
        /** Reassign a user's product SKU with a different SKU in the same product. */
        await gapi.client.licensing.licenseAssignments.update({
            productId: "Test string",
            skuId: "Test string",
            userId: "Test string",
        }, {
            etags: "Test string",
            kind: "Test string",
            productId: "Test string",
            productName: "Test string",
            selfLink: "Test string",
            skuId: "Test string",
            skuName: "Test string",
            userId: "Test string",
        });
    }
});
