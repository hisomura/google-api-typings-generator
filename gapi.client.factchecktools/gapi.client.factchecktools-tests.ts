/* This is stub file for gapi.client.factchecktools definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201026

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('factchecktools', 'v1alpha1', () => {
        /** now we can use gapi.client.factchecktools */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View your email address */
            'https://www.googleapis.com/auth/userinfo.email',
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
        /** Search through fact-checked claims. */
        await gapi.client.factchecktools.claims.search({
            languageCode: "Test string",
            maxAgeDays: 42,
            offset: 42,
            pageSize: 42,
            pageToken: "Test string",
            query: "Test string",
            reviewPublisherSiteFilter: "Test string",
        });
        /** Create `ClaimReview` markup on a page. */
        await gapi.client.factchecktools.pages.create({
        }, {
            claimReviewAuthor: {
                imageUrl: "Test string",
                name: "Test string",
            },
            claimReviewMarkups: [
                {
                    claimAppearances: [
                        "Test string"                    ],
                    claimAuthor: {
                        imageUrl: "Test string",
                        jobTitle: "Test string",
                        name: "Test string",
                        sameAs: "Test string",
                    },
                    claimDate: "Test string",
                    claimFirstAppearance: "Test string",
                    claimLocation: "Test string",
                    claimReviewed: "Test string",
                    rating: {
                        bestRating: 42,
                        imageUrl: "Test string",
                        ratingExplanation: "Test string",
                        ratingValue: 42,
                        textualRating: "Test string",
                        worstRating: 42,
                    },
                    url: "Test string",
                }            ],
            name: "Test string",
            pageUrl: "Test string",
            publishDate: "Test string",
            versionId: "Test string",
        });
        /** Delete all `ClaimReview` markup on a page. */
        await gapi.client.factchecktools.pages.delete({
            name: "Test string",
        });
        /** Get all `ClaimReview` markup on a page. */
        await gapi.client.factchecktools.pages.get({
            name: "Test string",
        });
        /** List the `ClaimReview` markup pages for a specific URL or for an organization. */
        await gapi.client.factchecktools.pages.list({
            offset: 42,
            organization: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            url: "Test string",
        });
        /**
         * Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the
         * returned markup, and finally call Update with the entire `ClaimReview` markup as the body.
         */
        await gapi.client.factchecktools.pages.update({
            name: "Test string",
        }, {
            claimReviewAuthor: {
                imageUrl: "Test string",
                name: "Test string",
            },
            claimReviewMarkups: [
                {
                    claimAppearances: [
                        "Test string"                    ],
                    claimAuthor: {
                        imageUrl: "Test string",
                        jobTitle: "Test string",
                        name: "Test string",
                        sameAs: "Test string",
                    },
                    claimDate: "Test string",
                    claimFirstAppearance: "Test string",
                    claimLocation: "Test string",
                    claimReviewed: "Test string",
                    rating: {
                        bestRating: 42,
                        imageUrl: "Test string",
                        ratingExplanation: "Test string",
                        ratingValue: 42,
                        textualRating: "Test string",
                        worstRating: 42,
                    },
                    url: "Test string",
                }            ],
            name: "Test string",
            pageUrl: "Test string",
            publishDate: "Test string",
            versionId: "Test string",
        });
    }
});
