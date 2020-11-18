/* This is stub file for gapi.client.speech definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201113

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('speech', 'v1', () => {
        /** now we can use gapi.client.speech */

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
        /** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
        await gapi.client.speech.operations.get({
            name: "Test string",
        });
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to
         * override the binding to use different resource name schemes, such as `users/∗/operations`. To override the binding, API services can add a binding such as
         * `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must
         * ensure the name binding is the parent resource, without the operations collection id.
         */
        await gapi.client.speech.operations.list({
            filter: "Test string",
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains
         * a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
         */
        await gapi.client.speech.speech.longrunningrecognize({
        }, {
            audio: {
                content: "Test string",
                uri: "Test string",
            },
            config: {
                audioChannelCount: 42,
                diarizationConfig: {
                    enableSpeakerDiarization: true,
                    maxSpeakerCount: 42,
                    minSpeakerCount: 42,
                    speakerTag: 42,
                },
                enableAutomaticPunctuation: true,
                enableSeparateRecognitionPerChannel: true,
                enableWordTimeOffsets: true,
                encoding: "Test string",
                languageCode: "Test string",
                maxAlternatives: 42,
                metadata: {
                    audioTopic: "Test string",
                    industryNaicsCodeOfAudio: 42,
                    interactionType: "Test string",
                    microphoneDistance: "Test string",
                    originalMediaType: "Test string",
                    originalMimeType: "Test string",
                    recordingDeviceName: "Test string",
                    recordingDeviceType: "Test string",
                },
                model: "Test string",
                profanityFilter: true,
                sampleRateHertz: 42,
                speechContexts: [
                    {
                        phrases: [
                            "Test string"                        ],
                    }                ],
                useEnhanced: true,
            },
        });
        /** Performs synchronous speech recognition: receive results after all audio has been sent and processed. */
        await gapi.client.speech.speech.recognize({
        }, {
            audio: {
                content: "Test string",
                uri: "Test string",
            },
            config: {
                audioChannelCount: 42,
                diarizationConfig: {
                    enableSpeakerDiarization: true,
                    maxSpeakerCount: 42,
                    minSpeakerCount: 42,
                    speakerTag: 42,
                },
                enableAutomaticPunctuation: true,
                enableSeparateRecognitionPerChannel: true,
                enableWordTimeOffsets: true,
                encoding: "Test string",
                languageCode: "Test string",
                maxAlternatives: 42,
                metadata: {
                    audioTopic: "Test string",
                    industryNaicsCodeOfAudio: 42,
                    interactionType: "Test string",
                    microphoneDistance: "Test string",
                    originalMediaType: "Test string",
                    originalMimeType: "Test string",
                    recordingDeviceName: "Test string",
                    recordingDeviceType: "Test string",
                },
                model: "Test string",
                profanityFilter: true,
                sampleRateHertz: 42,
                speechContexts: [
                    {
                        phrases: [
                            "Test string"                        ],
                    }                ],
                useEnhanced: true,
            },
        });
    }
});
