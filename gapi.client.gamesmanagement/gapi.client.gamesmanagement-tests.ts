/* This is stub file for gapi.client.gamesmanagement definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200909

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('gamesmanagement', 'v1management', () => {
        /** now we can use gapi.client.gamesmanagement */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
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
        /** Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. */
        await gapi.client.gamesmanagement.achievements.reset({
            achievementId: "Test string",
        });
        /** Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application. */
        await gapi.client.gamesmanagement.achievements.resetAll({
        });
        /** Resets all draft achievements for all players. This method is only available to user accounts for your developer console. */
        await gapi.client.gamesmanagement.achievements.resetAllForAllPlayers({
        });
        /** Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset. */
        await gapi.client.gamesmanagement.achievements.resetForAllPlayers({
            achievementId: "Test string",
        });
        /** Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset. */
        await gapi.client.gamesmanagement.achievements.resetMultipleForAllPlayers({
        }, {
            achievement_ids: [
                "Test string"            ],
            kind: "Test string",
        });
        /** Get the list of players hidden from the given application. This method is only available to user accounts for your developer console. */
        await gapi.client.gamesmanagement.applications.listHidden({
            applicationId: "Test string",
            maxResults: 42,
            pageToken: "Test string",
        });
        /** Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. */
        await gapi.client.gamesmanagement.events.reset({
            eventId: "Test string",
        });
        /** Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. */
        await gapi.client.gamesmanagement.events.resetAll({
        });
        /** Resets all draft events for all players. This method is only available to user accounts for your developer console. */
        await gapi.client.gamesmanagement.events.resetAllForAllPlayers({
        });
        /** Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset. */
        await gapi.client.gamesmanagement.events.resetForAllPlayers({
            eventId: "Test string",
        });
        /** Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset. */
        await gapi.client.gamesmanagement.events.resetMultipleForAllPlayers({
        }, {
            event_ids: [
                "Test string"            ],
            kind: "Test string",
        });
        /** Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console. */
        await gapi.client.gamesmanagement.players.hide({
            applicationId: "Test string",
            playerId: "Test string",
        });
        /** Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console. */
        await gapi.client.gamesmanagement.players.unhide({
            applicationId: "Test string",
            playerId: "Test string",
        });
        /** Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. */
        await gapi.client.gamesmanagement.scores.reset({
            leaderboardId: "Test string",
        });
        /** Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application. */
        await gapi.client.gamesmanagement.scores.resetAll({
        });
        /** Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console. */
        await gapi.client.gamesmanagement.scores.resetAllForAllPlayers({
        });
        /** Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset. */
        await gapi.client.gamesmanagement.scores.resetForAllPlayers({
            leaderboardId: "Test string",
        });
        /** Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset. */
        await gapi.client.gamesmanagement.scores.resetMultipleForAllPlayers({
        }, {
            kind: "Test string",
            leaderboard_ids: [
                "Test string"            ],
        });
    }
});
