/* This is stub file for gapi.client.videointelligence definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200831

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('videointelligence', 'v1', () => {
        /** now we can use gapi.client.videointelligence */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
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
        /**
         * Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains
         * `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).
         */
        await gapi.client.videointelligence.videos.annotate({
        }, {
            features: [
                "Test string"            ],
            inputContent: "Test string",
            inputUri: "Test string",
            locationId: "Test string",
            outputUri: "Test string",
            videoContext: {
                explicitContentDetectionConfig: {
                    model: "Test string",
                },
                labelDetectionConfig: {
                    frameConfidenceThreshold: 42,
                    labelDetectionMode: "Test string",
                    model: "Test string",
                    stationaryCamera: true,
                    videoConfidenceThreshold: 42,
                },
                objectTrackingConfig: {
                    model: "Test string",
                },
                segments: [
                    {
                        endTimeOffset: "Test string",
                        startTimeOffset: "Test string",
                    }                ],
                shotChangeDetectionConfig: {
                    model: "Test string",
                },
                speechTranscriptionConfig: {
                    audioTracks: [
                        42                    ],
                    diarizationSpeakerCount: 42,
                    enableAutomaticPunctuation: true,
                    enableSpeakerDiarization: true,
                    enableWordConfidence: true,
                    filterProfanity: true,
                    languageCode: "Test string",
                    maxAlternatives: 42,
                    speechContexts: [
                        {
                            phrases: [
                                "Test string"                            ],
                        }                    ],
                },
                textDetectionConfig: {
                    languageHints: [
                        "Test string"                    ],
                    model: "Test string",
                },
            },
        });
    }
});
