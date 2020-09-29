/* This is stub file for gapi.client.games definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200924

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('games', 'v1', () => {
        /** now we can use gapi.client.games */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage its own configuration data in your Google Drive */
            'https://www.googleapis.com/auth/drive.appdata',
            /** Create, edit, and delete your Google Play Games activity */
            'https://www.googleapis.com/auth/games',
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
        /** Lists all the achievement definitions for your application. */
        await gapi.client.games.achievementDefinitions.list({
            language: "Test string",
            maxResults: 42,
            pageToken: "Test string",
        });
        /** Increments the steps of the achievement with the given ID for the currently authenticated player. */
        await gapi.client.games.achievements.increment({
            achievementId: "Test string",
            requestId: "Test string",
            stepsToIncrement: 42,
        });
        /** Lists the progress for all your application's achievements for the currently authenticated player. */
        await gapi.client.games.achievements.list({
            language: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            playerId: "Test string",
            state: "Test string",
        });
        /** Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player. */
        await gapi.client.games.achievements.reveal({
            achievementId: "Test string",
        });
        /**
         * Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained
         * for the achievement, the achievement is not modified.
         */
        await gapi.client.games.achievements.setStepsAtLeast({
            achievementId: "Test string",
            steps: 42,
        });
        /** Unlocks this achievement for the currently authenticated player. */
        await gapi.client.games.achievements.unlock({
            achievementId: "Test string",
        });
        /** Updates multiple achievements for the currently authenticated player. */
        await gapi.client.games.achievements.updateMultiple({
        }, {
            kind: "Test string",
            updates: [
                {
                    achievementId: "Test string",
                    incrementPayload: {
                        kind: "Test string",
                        requestId: "Test string",
                        steps: 42,
                    },
                    kind: "Test string",
                    setStepsAtLeastPayload: {
                        kind: "Test string",
                        steps: 42,
                    },
                    updateType: "Test string",
                }            ],
        });
        /**
         * Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any
         * instance data.
         */
        await gapi.client.games.applications.get({
            applicationId: "Test string",
            language: "Test string",
            platformType: "Test string",
        });
        /** Indicate that the currently authenticated user is playing your application. */
        await gapi.client.games.applications.played({
        });
        /** Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for. */
        await gapi.client.games.applications.verify({
            applicationId: "Test string",
        });
        /** Returns a list showing the current progress on events in this application for the currently authenticated user. */
        await gapi.client.games.events.listByPlayer({
            language: "Test string",
            maxResults: 42,
            pageToken: "Test string",
        });
        /** Returns a list of the event definitions in this application. */
        await gapi.client.games.events.listDefinitions({
            language: "Test string",
            maxResults: 42,
            pageToken: "Test string",
        });
        /** Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application. */
        await gapi.client.games.events.record({
            language: "Test string",
        }, {
            currentTimeMillis: "Test string",
            kind: "Test string",
            requestId: "Test string",
            timePeriods: [
                {
                    kind: "Test string",
                    timePeriod: {
                        kind: "Test string",
                        periodEndMillis: "Test string",
                        periodStartMillis: "Test string",
                    },
                    updates: [
                        {
                            definitionId: "Test string",
                            kind: "Test string",
                            updateCount: "Test string",
                        }                    ],
                }            ],
        });
        /** Retrieves the metadata of the leaderboard with the given ID. */
        await gapi.client.games.leaderboards.get({
            language: "Test string",
            leaderboardId: "Test string",
        });
        /** Lists all the leaderboard metadata for your application. */
        await gapi.client.games.leaderboards.list({
            language: "Test string",
            maxResults: 42,
            pageToken: "Test string",
        });
        /** Return the metagame configuration data for the calling application. */
        await gapi.client.games.metagame.getMetagameConfig({
        });
        /** List play data aggregated per category for the player corresponding to `playerId`. */
        await gapi.client.games.metagame.listCategoriesByPlayer({
            collection: "Test string",
            language: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            playerId: "Test string",
        });
        /** Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`. */
        await gapi.client.games.players.get({
            language: "Test string",
            playerId: "Test string",
        });
        /** Get the collection of players for the currently authenticated user. */
        await gapi.client.games.players.list({
            collection: "Test string",
            language: "Test string",
            maxResults: 42,
            pageToken: "Test string",
        });
        /** Checks whether the games client is out of date. */
        await gapi.client.games.revisions.check({
            clientRevision: "Test string",
        });
        /**
         * Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all
         * leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
         */
        await gapi.client.games.scores.get({
            includeRankType: "Test string",
            language: "Test string",
            leaderboardId: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            playerId: "Test string",
            timeSpan: "Test string",
        });
        /** Lists the scores in a leaderboard, starting from the top. */
        await gapi.client.games.scores.list({
            collection: "Test string",
            language: "Test string",
            leaderboardId: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            timeSpan: "Test string",
        });
        /** Lists the scores in a leaderboard around (and including) a player's score. */
        await gapi.client.games.scores.listWindow({
            collection: "Test string",
            language: "Test string",
            leaderboardId: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            resultsAbove: 42,
            returnTopIfAbsent: true,
            timeSpan: "Test string",
        });
        /** Submits a score to the specified leaderboard. */
        await gapi.client.games.scores.submit({
            language: "Test string",
            leaderboardId: "Test string",
            score: "Test string",
            scoreTag: "Test string",
        });
        /** Submits multiple scores to leaderboards. */
        await gapi.client.games.scores.submitMultiple({
            language: "Test string",
        }, {
            kind: "Test string",
            scores: [
                {
                    kind: "Test string",
                    leaderboardId: "Test string",
                    score: "Test string",
                    scoreTag: "Test string",
                    signature: "Test string",
                }            ],
        });
        /** Retrieves the metadata for a given snapshot ID. */
        await gapi.client.games.snapshots.get({
            language: "Test string",
            snapshotId: "Test string",
        });
        /** Retrieves a list of snapshots created by your application for the player corresponding to the player ID. */
        await gapi.client.games.snapshots.list({
            language: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            playerId: "Test string",
        });
        /** Returns engagement and spend statistics in this application for the currently authenticated user. */
        await gapi.client.games.stats.get({
        });
    }
});
