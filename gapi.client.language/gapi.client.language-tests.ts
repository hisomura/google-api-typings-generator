/* This is stub file for gapi.client.language definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201017

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('language', 'v1', () => {
        /** now we can use gapi.client.language */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Apply machine learning models to reveal the structure and meaning of text */
            'https://www.googleapis.com/auth/cloud-language',
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
        /** Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties. */
        await gapi.client.language.documents.analyzeEntities({
        }, {
            document: {
                content: "Test string",
                gcsContentUri: "Test string",
                language: "Test string",
                type: "Test string",
            },
            encodingType: "Test string",
        });
        /** Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions. */
        await gapi.client.language.documents.analyzeEntitySentiment({
        }, {
            document: {
                content: "Test string",
                gcsContentUri: "Test string",
                language: "Test string",
                type: "Test string",
            },
            encodingType: "Test string",
        });
        /** Analyzes the sentiment of the provided text. */
        await gapi.client.language.documents.analyzeSentiment({
        }, {
            document: {
                content: "Test string",
                gcsContentUri: "Test string",
                language: "Test string",
                type: "Test string",
            },
            encodingType: "Test string",
        });
        /** Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties. */
        await gapi.client.language.documents.analyzeSyntax({
        }, {
            document: {
                content: "Test string",
                gcsContentUri: "Test string",
                language: "Test string",
                type: "Test string",
            },
            encodingType: "Test string",
        });
        /** A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call. */
        await gapi.client.language.documents.annotateText({
        }, {
            document: {
                content: "Test string",
                gcsContentUri: "Test string",
                language: "Test string",
                type: "Test string",
            },
            encodingType: "Test string",
            features: {
                classifyText: true,
                extractDocumentSentiment: true,
                extractEntities: true,
                extractEntitySentiment: true,
                extractSyntax: true,
            },
        });
        /** Classifies a document into categories. */
        await gapi.client.language.documents.classifyText({
        }, {
            document: {
                content: "Test string",
                gcsContentUri: "Test string",
                language: "Test string",
                type: "Test string",
            },
        });
    }
});
