/* This is stub file for gapi.client.alertcenter definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200831

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('alertcenter', 'v1beta1', () => {
        /** now we can use gapi.client.alertcenter */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** See and delete your domain's G Suite alerts, and send alert feedback */
            'https://www.googleapis.com/auth/apps.alerts',
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
        /** Performs batch delete operation on alerts. */
        await gapi.client.alertcenter.alerts.batchDelete({
        }, {
            alertId: [
                "Test string"            ],
            customerId: "Test string",
        });
        /**
         * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for
         * deletion returns `FAILED_PRECONDITION' error.
         */
        await gapi.client.alertcenter.alerts.feedback.create({
            alertId: "Test string",
            customerId: "Test string",
        }, {
            alertId: "Test string",
            createTime: "Test string",
            customerId: "Test string",
            email: "Test string",
            feedbackId: "Test string",
            type: "Test string",
        });
        /** Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error. */
        await gapi.client.alertcenter.alerts.feedback.list({
            alertId: "Test string",
            customerId: "Test string",
            filter: "Test string",
        });
        /** Performs batch undelete operation on alerts. */
        await gapi.client.alertcenter.alerts.batchUndelete({
        }, {
            alertId: [
                "Test string"            ],
            customerId: "Test string",
        });
        /**
         * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for
         * deletion returns `FAILED_PRECONDITION' error.
         */
        await gapi.client.alertcenter.alerts.feedback.create({
            alertId: "Test string",
            customerId: "Test string",
        }, {
            alertId: "Test string",
            createTime: "Test string",
            customerId: "Test string",
            email: "Test string",
            feedbackId: "Test string",
            type: "Test string",
        });
        /** Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error. */
        await gapi.client.alertcenter.alerts.feedback.list({
            alertId: "Test string",
            customerId: "Test string",
            filter: "Test string",
        });
        /**
         * Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert
         * which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
         */
        await gapi.client.alertcenter.alerts.delete({
            alertId: "Test string",
            customerId: "Test string",
        });
        /**
         * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for
         * deletion returns `FAILED_PRECONDITION' error.
         */
        await gapi.client.alertcenter.alerts.feedback.create({
            alertId: "Test string",
            customerId: "Test string",
        }, {
            alertId: "Test string",
            createTime: "Test string",
            customerId: "Test string",
            email: "Test string",
            feedbackId: "Test string",
            type: "Test string",
        });
        /** Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error. */
        await gapi.client.alertcenter.alerts.feedback.list({
            alertId: "Test string",
            customerId: "Test string",
            filter: "Test string",
        });
        /** Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error. */
        await gapi.client.alertcenter.alerts.get({
            alertId: "Test string",
            customerId: "Test string",
        });
        /**
         * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for
         * deletion returns `FAILED_PRECONDITION' error.
         */
        await gapi.client.alertcenter.alerts.feedback.create({
            alertId: "Test string",
            customerId: "Test string",
        }, {
            alertId: "Test string",
            createTime: "Test string",
            customerId: "Test string",
            email: "Test string",
            feedbackId: "Test string",
            type: "Test string",
        });
        /** Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error. */
        await gapi.client.alertcenter.alerts.feedback.list({
            alertId: "Test string",
            customerId: "Test string",
            filter: "Test string",
        });
        /** Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error. */
        await gapi.client.alertcenter.alerts.getMetadata({
            alertId: "Test string",
            customerId: "Test string",
        });
        /**
         * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for
         * deletion returns `FAILED_PRECONDITION' error.
         */
        await gapi.client.alertcenter.alerts.feedback.create({
            alertId: "Test string",
            customerId: "Test string",
        }, {
            alertId: "Test string",
            createTime: "Test string",
            customerId: "Test string",
            email: "Test string",
            feedbackId: "Test string",
            type: "Test string",
        });
        /** Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error. */
        await gapi.client.alertcenter.alerts.feedback.list({
            alertId: "Test string",
            customerId: "Test string",
            filter: "Test string",
        });
        /** Lists the alerts. */
        await gapi.client.alertcenter.alerts.list({
            customerId: "Test string",
            filter: "Test string",
            orderBy: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for
         * deletion returns `FAILED_PRECONDITION' error.
         */
        await gapi.client.alertcenter.alerts.feedback.create({
            alertId: "Test string",
            customerId: "Test string",
        }, {
            alertId: "Test string",
            createTime: "Test string",
            customerId: "Test string",
            email: "Test string",
            feedbackId: "Test string",
            type: "Test string",
        });
        /** Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error. */
        await gapi.client.alertcenter.alerts.feedback.list({
            alertId: "Test string",
            customerId: "Test string",
            filter: "Test string",
        });
        /**
         * Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been
         * removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.
         */
        await gapi.client.alertcenter.alerts.undelete({
            alertId: "Test string",
        }, {
            customerId: "Test string",
        });
        /**
         * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for
         * deletion returns `FAILED_PRECONDITION' error.
         */
        await gapi.client.alertcenter.alerts.feedback.create({
            alertId: "Test string",
            customerId: "Test string",
        }, {
            alertId: "Test string",
            createTime: "Test string",
            customerId: "Test string",
            email: "Test string",
            feedbackId: "Test string",
            type: "Test string",
        });
        /** Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error. */
        await gapi.client.alertcenter.alerts.feedback.list({
            alertId: "Test string",
            customerId: "Test string",
            filter: "Test string",
        });
        /** Returns customer-level settings. */
        await gapi.client.alertcenter.v1beta1.getSettings({
            customerId: "Test string",
        });
        /** Updates the customer-level settings. */
        await gapi.client.alertcenter.v1beta1.updateSettings({
            customerId: "Test string",
        }, {
            notifications: [
                {
                    cloudPubsubTopic: {
                        payloadFormat: "Test string",
                        topicName: "Test string",
                    },
                }            ],
        });
    }
});
