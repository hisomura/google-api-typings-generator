/* This is stub file for gapi.client.fitness definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200901

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('fitness', 'v1', () => {
        /** now we can use gapi.client.fitness */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Use Google Fit to see and store your physical activity data */
            'https://www.googleapis.com/auth/fitness.activity.read',
            /** See and add to your Google Fit physical activity data */
            'https://www.googleapis.com/auth/fitness.activity.write',
            /** See info about your blood glucose in Google Fit. I consent to Google sharing my blood glucose information with this app. */
            'https://www.googleapis.com/auth/fitness.blood_glucose.read',
            /** See and add info about your blood glucose to Google Fit. I consent to Google sharing my blood glucose information with this app. */
            'https://www.googleapis.com/auth/fitness.blood_glucose.write',
            /** See info about your blood pressure in Google Fit. I consent to Google sharing my blood pressure information with this app. */
            'https://www.googleapis.com/auth/fitness.blood_pressure.read',
            /** See and add info about your blood pressure in Google Fit. I consent to Google sharing my blood pressure information with this app. */
            'https://www.googleapis.com/auth/fitness.blood_pressure.write',
            /** See info about your body temperature in Google Fit. I consent to Google sharing my body temperature information with this app. */
            'https://www.googleapis.com/auth/fitness.body_temperature.read',
            /** See and add to info about your body temperature in Google Fit. I consent to Google sharing my body temperature information with this app. */
            'https://www.googleapis.com/auth/fitness.body_temperature.write',
            /** See info about your body measurements and heart rate in Google Fit */
            'https://www.googleapis.com/auth/fitness.body.read',
            /** See and add info about your body measurements and heart rate to Google Fit */
            'https://www.googleapis.com/auth/fitness.body.write',
            /** See your Google Fit speed and distance data */
            'https://www.googleapis.com/auth/fitness.location.read',
            /** See and add to your Google Fit location data */
            'https://www.googleapis.com/auth/fitness.location.write',
            /** See info about your nutrition in Google Fit */
            'https://www.googleapis.com/auth/fitness.nutrition.read',
            /** See and add to info about your nutrition in Google Fit */
            'https://www.googleapis.com/auth/fitness.nutrition.write',
            /** See info about your oxygen saturation in Google Fit. I consent to Google sharing my oxygen saturation information with this app. */
            'https://www.googleapis.com/auth/fitness.oxygen_saturation.read',
            /** See and add info about your oxygen saturation in Google Fit. I consent to Google sharing my oxygen saturation information with this app. */
            'https://www.googleapis.com/auth/fitness.oxygen_saturation.write',
            /** See info about your reproductive health in Google Fit. I consent to Google sharing my reporductive health information with this app. */
            'https://www.googleapis.com/auth/fitness.reproductive_health.read',
            /** See and add info about your reproductive health in Google Fit. I consent to Google sharing my reporductive health information with this app. */
            'https://www.googleapis.com/auth/fitness.reproductive_health.write',
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
    }
});
