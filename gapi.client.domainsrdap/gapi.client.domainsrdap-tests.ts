/* This is stub file for gapi.client.domainsrdap definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200914

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('domainsrdap', 'v1', () => {
        /** now we can use gapi.client.domainsrdap */

        run();
    });

    async function run() {
        /** The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error. */
        await gapi.client.domainsrdap.autnum.get({
            autnumId: "Test string",
        });
        /** Look up RDAP information for a domain by name. */
        await gapi.client.domainsrdap.domain.get({
            domainName: "Test string",
        });
        /** The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error. */
        await gapi.client.domainsrdap.entity.get({
            entityId: "Test string",
        });
        /** The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error. */
        await gapi.client.domainsrdap.ip.get({
            ipId: "Test string",
            ipId1: "Test string",
        });
        /** The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error. */
        await gapi.client.domainsrdap.nameserver.get({
            nameserverId: "Test string",
        });
        /** The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error. */
        await gapi.client.domainsrdap.v1.getDomains({
        });
        /** The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error. */
        await gapi.client.domainsrdap.v1.getEntities({
        });
        /** Get help information for the RDAP API, including links to documentation. */
        await gapi.client.domainsrdap.v1.getHelp({
        });
        /** The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error. */
        await gapi.client.domainsrdap.v1.getIp({
        });
        /** The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error. */
        await gapi.client.domainsrdap.v1.getNameservers({
        });
    }
});
