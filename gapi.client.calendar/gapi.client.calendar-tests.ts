/* This is stub file for gapi.client.calendar definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201028

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('calendar', 'v3', () => {
        /** now we can use gapi.client.calendar */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** See, edit, share, and permanently delete all the calendars you can access using Google Calendar */
            'https://www.googleapis.com/auth/calendar',
            /** View and edit events on all your calendars */
            'https://www.googleapis.com/auth/calendar.events',
            /** View events on all your calendars */
            'https://www.googleapis.com/auth/calendar.events.readonly',
            /** View your calendars */
            'https://www.googleapis.com/auth/calendar.readonly',
            /** View your Calendar settings */
            'https://www.googleapis.com/auth/calendar.settings.readonly',
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
        /** Deletes an access control rule. */
        await gapi.client.calendar.acl.delete({
            calendarId: "Test string",
            ruleId: "Test string",
        });
        /** Returns an access control rule. */
        await gapi.client.calendar.acl.get({
            calendarId: "Test string",
            ruleId: "Test string",
        });
        /** Creates an access control rule. */
        await gapi.client.calendar.acl.insert({
            calendarId: "Test string",
            sendNotifications: true,
        }, {
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            role: "Test string",
            scope: {
                type: "Test string",
                value: "Test string",
            },
        });
        /** Returns the rules in the access control list for the calendar. */
        await gapi.client.calendar.acl.list({
            calendarId: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            showDeleted: true,
            syncToken: "Test string",
        });
        /** Updates an access control rule. This method supports patch semantics. */
        await gapi.client.calendar.acl.patch({
            calendarId: "Test string",
            ruleId: "Test string",
            sendNotifications: true,
        }, {
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            role: "Test string",
            scope: {
                type: "Test string",
                value: "Test string",
            },
        });
        /** Updates an access control rule. */
        await gapi.client.calendar.acl.update({
            calendarId: "Test string",
            ruleId: "Test string",
            sendNotifications: true,
        }, {
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            role: "Test string",
            scope: {
                type: "Test string",
                value: "Test string",
            },
        });
        /** Watch for changes to ACL resources. */
        await gapi.client.calendar.acl.watch({
            calendarId: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            showDeleted: true,
            syncToken: "Test string",
        }, {
            address: "Test string",
            expiration: "Test string",
            id: "Test string",
            kind: "Test string",
            params: {
                A: "Test string"            },
            payload: true,
            resourceId: "Test string",
            resourceUri: "Test string",
            token: "Test string",
            type: "Test string",
        });
        /** Removes a calendar from the user's calendar list. */
        await gapi.client.calendar.calendarList.delete({
            calendarId: "Test string",
        });
        /** Returns a calendar from the user's calendar list. */
        await gapi.client.calendar.calendarList.get({
            calendarId: "Test string",
        });
        /** Inserts an existing calendar into the user's calendar list. */
        await gapi.client.calendar.calendarList.insert({
            colorRgbFormat: true,
        }, {
            accessRole: "Test string",
            backgroundColor: "Test string",
            colorId: "Test string",
            conferenceProperties: {
                allowedConferenceSolutionTypes: [
                    "Test string"                ],
            },
            defaultReminders: [
                {
                    method: "Test string",
                    minutes: 42,
                }            ],
            deleted: true,
            description: "Test string",
            etag: "Test string",
            foregroundColor: "Test string",
            hidden: true,
            id: "Test string",
            kind: "Test string",
            location: "Test string",
            notificationSettings: {
                notifications: [
                    {
                        method: "Test string",
                        type: "Test string",
                    }                ],
            },
            primary: true,
            selected: true,
            summary: "Test string",
            summaryOverride: "Test string",
            timeZone: "Test string",
        });
        /** Returns the calendars on the user's calendar list. */
        await gapi.client.calendar.calendarList.list({
            maxResults: 42,
            minAccessRole: "Test string",
            pageToken: "Test string",
            showDeleted: true,
            showHidden: true,
            syncToken: "Test string",
        });
        /** Updates an existing calendar on the user's calendar list. This method supports patch semantics. */
        await gapi.client.calendar.calendarList.patch({
            calendarId: "Test string",
            colorRgbFormat: true,
        }, {
            accessRole: "Test string",
            backgroundColor: "Test string",
            colorId: "Test string",
            conferenceProperties: {
                allowedConferenceSolutionTypes: [
                    "Test string"                ],
            },
            defaultReminders: [
                {
                    method: "Test string",
                    minutes: 42,
                }            ],
            deleted: true,
            description: "Test string",
            etag: "Test string",
            foregroundColor: "Test string",
            hidden: true,
            id: "Test string",
            kind: "Test string",
            location: "Test string",
            notificationSettings: {
                notifications: [
                    {
                        method: "Test string",
                        type: "Test string",
                    }                ],
            },
            primary: true,
            selected: true,
            summary: "Test string",
            summaryOverride: "Test string",
            timeZone: "Test string",
        });
        /** Updates an existing calendar on the user's calendar list. */
        await gapi.client.calendar.calendarList.update({
            calendarId: "Test string",
            colorRgbFormat: true,
        }, {
            accessRole: "Test string",
            backgroundColor: "Test string",
            colorId: "Test string",
            conferenceProperties: {
                allowedConferenceSolutionTypes: [
                    "Test string"                ],
            },
            defaultReminders: [
                {
                    method: "Test string",
                    minutes: 42,
                }            ],
            deleted: true,
            description: "Test string",
            etag: "Test string",
            foregroundColor: "Test string",
            hidden: true,
            id: "Test string",
            kind: "Test string",
            location: "Test string",
            notificationSettings: {
                notifications: [
                    {
                        method: "Test string",
                        type: "Test string",
                    }                ],
            },
            primary: true,
            selected: true,
            summary: "Test string",
            summaryOverride: "Test string",
            timeZone: "Test string",
        });
        /** Watch for changes to CalendarList resources. */
        await gapi.client.calendar.calendarList.watch({
            maxResults: 42,
            minAccessRole: "Test string",
            pageToken: "Test string",
            showDeleted: true,
            showHidden: true,
            syncToken: "Test string",
        }, {
            address: "Test string",
            expiration: "Test string",
            id: "Test string",
            kind: "Test string",
            params: {
                A: "Test string"            },
            payload: true,
            resourceId: "Test string",
            resourceUri: "Test string",
            token: "Test string",
            type: "Test string",
        });
        /** Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account. */
        await gapi.client.calendar.calendars.clear({
            calendarId: "Test string",
        });
        /** Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars. */
        await gapi.client.calendar.calendars.delete({
            calendarId: "Test string",
        });
        /** Returns metadata for a calendar. */
        await gapi.client.calendar.calendars.get({
            calendarId: "Test string",
        });
        /** Creates a secondary calendar. */
        await gapi.client.calendar.calendars.insert({} , {
            conferenceProperties: {
                allowedConferenceSolutionTypes: [
                    "Test string"                ],
            },
            description: "Test string",
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            location: "Test string",
            summary: "Test string",
            timeZone: "Test string",
        });
        /** Updates metadata for a calendar. This method supports patch semantics. */
        await gapi.client.calendar.calendars.patch({
            calendarId: "Test string",
        }, {
            conferenceProperties: {
                allowedConferenceSolutionTypes: [
                    "Test string"                ],
            },
            description: "Test string",
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            location: "Test string",
            summary: "Test string",
            timeZone: "Test string",
        });
        /** Updates metadata for a calendar. */
        await gapi.client.calendar.calendars.update({
            calendarId: "Test string",
        }, {
            conferenceProperties: {
                allowedConferenceSolutionTypes: [
                    "Test string"                ],
            },
            description: "Test string",
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            location: "Test string",
            summary: "Test string",
            timeZone: "Test string",
        });
        /** Stop watching resources through this channel */
        await gapi.client.calendar.channels.stop({} , {
            address: "Test string",
            expiration: "Test string",
            id: "Test string",
            kind: "Test string",
            params: {
                A: "Test string"            },
            payload: true,
            resourceId: "Test string",
            resourceUri: "Test string",
            token: "Test string",
            type: "Test string",
        });
        /** Returns the color definitions for calendars and events. */
        await gapi.client.calendar.colors.get();
        /** Deletes an event. */
        await gapi.client.calendar.events.delete({
            calendarId: "Test string",
            eventId: "Test string",
            sendNotifications: true,
            sendUpdates: "Test string",
        });
        /** Returns an event. */
        await gapi.client.calendar.events.get({
            alwaysIncludeEmail: true,
            calendarId: "Test string",
            eventId: "Test string",
            maxAttendees: 42,
            timeZone: "Test string",
        });
        /** Imports an event. This operation is used to add a private copy of an existing event to a calendar. */
        await gapi.client.calendar.events.import({
            calendarId: "Test string",
            conferenceDataVersion: 42,
            supportsAttachments: true,
        }, {
            anyoneCanAddSelf: true,
            attachments: [
                {
                    fileId: "Test string",
                    fileUrl: "Test string",
                    iconLink: "Test string",
                    mimeType: "Test string",
                    title: "Test string",
                }            ],
            attendees: [
                {
                    additionalGuests: 42,
                    comment: "Test string",
                    displayName: "Test string",
                    email: "Test string",
                    id: "Test string",
                    optional: true,
                    organizer: true,
                    resource: true,
                    responseStatus: "Test string",
                    self: true,
                }            ],
            attendeesOmitted: true,
            colorId: "Test string",
            conferenceData: {
                conferenceId: "Test string",
                conferenceSolution: {
                    iconUri: "Test string",
                    key: {
                        type: "Test string",
                    },
                    name: "Test string",
                },
                createRequest: {
                    conferenceSolutionKey: {
                        type: "Test string",
                    },
                    requestId: "Test string",
                    status: {
                        statusCode: "Test string",
                    },
                },
                entryPoints: [
                    {
                        accessCode: "Test string",
                        entryPointFeatures: [
                            "Test string"                        ],
                        entryPointType: "Test string",
                        label: "Test string",
                        meetingCode: "Test string",
                        passcode: "Test string",
                        password: "Test string",
                        pin: "Test string",
                        regionCode: "Test string",
                        uri: "Test string",
                    }                ],
                notes: "Test string",
                parameters: {
                    addOnParameters: {
                        parameters: {
                            A: "Test string"                        },
                    },
                },
                signature: "Test string",
            },
            created: "Test string",
            creator: {
                displayName: "Test string",
                email: "Test string",
                id: "Test string",
                self: true,
            },
            description: "Test string",
            end: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            endTimeUnspecified: true,
            etag: "Test string",
            extendedProperties: {
                private: {
                    A: "Test string"                },
                shared: {
                    A: "Test string"                },
            },
            gadget: {
                display: "Test string",
                height: 42,
                iconLink: "Test string",
                link: "Test string",
                preferences: {
                    A: "Test string"                },
                title: "Test string",
                type: "Test string",
                width: 42,
            },
            guestsCanInviteOthers: true,
            guestsCanModify: true,
            guestsCanSeeOtherGuests: true,
            hangoutLink: "Test string",
            htmlLink: "Test string",
            iCalUID: "Test string",
            id: "Test string",
            kind: "Test string",
            location: "Test string",
            locked: true,
            organizer: {
                displayName: "Test string",
                email: "Test string",
                id: "Test string",
                self: true,
            },
            originalStartTime: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            privateCopy: true,
            recurrence: [
                "Test string"            ],
            recurringEventId: "Test string",
            reminders: {
                overrides: [
                    {
                        method: "Test string",
                        minutes: 42,
                    }                ],
                useDefault: true,
            },
            sequence: 42,
            source: {
                title: "Test string",
                url: "Test string",
            },
            start: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            status: "Test string",
            summary: "Test string",
            transparency: "Test string",
            updated: "Test string",
            visibility: "Test string",
        });
        /** Creates an event. */
        await gapi.client.calendar.events.insert({
            calendarId: "Test string",
            conferenceDataVersion: 42,
            maxAttendees: 42,
            sendNotifications: true,
            sendUpdates: "Test string",
            supportsAttachments: true,
        }, {
            anyoneCanAddSelf: true,
            attachments: [
                {
                    fileId: "Test string",
                    fileUrl: "Test string",
                    iconLink: "Test string",
                    mimeType: "Test string",
                    title: "Test string",
                }            ],
            attendees: [
                {
                    additionalGuests: 42,
                    comment: "Test string",
                    displayName: "Test string",
                    email: "Test string",
                    id: "Test string",
                    optional: true,
                    organizer: true,
                    resource: true,
                    responseStatus: "Test string",
                    self: true,
                }            ],
            attendeesOmitted: true,
            colorId: "Test string",
            conferenceData: {
                conferenceId: "Test string",
                conferenceSolution: {
                    iconUri: "Test string",
                    key: {
                        type: "Test string",
                    },
                    name: "Test string",
                },
                createRequest: {
                    conferenceSolutionKey: {
                        type: "Test string",
                    },
                    requestId: "Test string",
                    status: {
                        statusCode: "Test string",
                    },
                },
                entryPoints: [
                    {
                        accessCode: "Test string",
                        entryPointFeatures: [
                            "Test string"                        ],
                        entryPointType: "Test string",
                        label: "Test string",
                        meetingCode: "Test string",
                        passcode: "Test string",
                        password: "Test string",
                        pin: "Test string",
                        regionCode: "Test string",
                        uri: "Test string",
                    }                ],
                notes: "Test string",
                parameters: {
                    addOnParameters: {
                        parameters: {
                            A: "Test string"                        },
                    },
                },
                signature: "Test string",
            },
            created: "Test string",
            creator: {
                displayName: "Test string",
                email: "Test string",
                id: "Test string",
                self: true,
            },
            description: "Test string",
            end: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            endTimeUnspecified: true,
            etag: "Test string",
            extendedProperties: {
                private: {
                    A: "Test string"                },
                shared: {
                    A: "Test string"                },
            },
            gadget: {
                display: "Test string",
                height: 42,
                iconLink: "Test string",
                link: "Test string",
                preferences: {
                    A: "Test string"                },
                title: "Test string",
                type: "Test string",
                width: 42,
            },
            guestsCanInviteOthers: true,
            guestsCanModify: true,
            guestsCanSeeOtherGuests: true,
            hangoutLink: "Test string",
            htmlLink: "Test string",
            iCalUID: "Test string",
            id: "Test string",
            kind: "Test string",
            location: "Test string",
            locked: true,
            organizer: {
                displayName: "Test string",
                email: "Test string",
                id: "Test string",
                self: true,
            },
            originalStartTime: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            privateCopy: true,
            recurrence: [
                "Test string"            ],
            recurringEventId: "Test string",
            reminders: {
                overrides: [
                    {
                        method: "Test string",
                        minutes: 42,
                    }                ],
                useDefault: true,
            },
            sequence: 42,
            source: {
                title: "Test string",
                url: "Test string",
            },
            start: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            status: "Test string",
            summary: "Test string",
            transparency: "Test string",
            updated: "Test string",
            visibility: "Test string",
        });
        /** Returns instances of the specified recurring event. */
        await gapi.client.calendar.events.instances({
            alwaysIncludeEmail: true,
            calendarId: "Test string",
            eventId: "Test string",
            maxAttendees: 42,
            maxResults: 42,
            originalStart: "Test string",
            pageToken: "Test string",
            showDeleted: true,
            timeMax: "Test string",
            timeMin: "Test string",
            timeZone: "Test string",
        });
        /** Returns events on the specified calendar. */
        await gapi.client.calendar.events.list({
            alwaysIncludeEmail: true,
            calendarId: "Test string",
            iCalUID: "Test string",
            maxAttendees: 42,
            maxResults: 42,
            orderBy: "Test string",
            pageToken: "Test string",
            privateExtendedProperty: "Test string",
            q: "Test string",
            sharedExtendedProperty: "Test string",
            showDeleted: true,
            showHiddenInvitations: true,
            singleEvents: true,
            syncToken: "Test string",
            timeMax: "Test string",
            timeMin: "Test string",
            timeZone: "Test string",
            updatedMin: "Test string",
        });
        /** Moves an event to another calendar, i.e. changes an event's organizer. */
        await gapi.client.calendar.events.move({
            calendarId: "Test string",
            destination: "Test string",
            eventId: "Test string",
            sendNotifications: true,
            sendUpdates: "Test string",
        });
        /** Updates an event. This method supports patch semantics. */
        await gapi.client.calendar.events.patch({
            alwaysIncludeEmail: true,
            calendarId: "Test string",
            conferenceDataVersion: 42,
            eventId: "Test string",
            maxAttendees: 42,
            sendNotifications: true,
            sendUpdates: "Test string",
            supportsAttachments: true,
        }, {
            anyoneCanAddSelf: true,
            attachments: [
                {
                    fileId: "Test string",
                    fileUrl: "Test string",
                    iconLink: "Test string",
                    mimeType: "Test string",
                    title: "Test string",
                }            ],
            attendees: [
                {
                    additionalGuests: 42,
                    comment: "Test string",
                    displayName: "Test string",
                    email: "Test string",
                    id: "Test string",
                    optional: true,
                    organizer: true,
                    resource: true,
                    responseStatus: "Test string",
                    self: true,
                }            ],
            attendeesOmitted: true,
            colorId: "Test string",
            conferenceData: {
                conferenceId: "Test string",
                conferenceSolution: {
                    iconUri: "Test string",
                    key: {
                        type: "Test string",
                    },
                    name: "Test string",
                },
                createRequest: {
                    conferenceSolutionKey: {
                        type: "Test string",
                    },
                    requestId: "Test string",
                    status: {
                        statusCode: "Test string",
                    },
                },
                entryPoints: [
                    {
                        accessCode: "Test string",
                        entryPointFeatures: [
                            "Test string"                        ],
                        entryPointType: "Test string",
                        label: "Test string",
                        meetingCode: "Test string",
                        passcode: "Test string",
                        password: "Test string",
                        pin: "Test string",
                        regionCode: "Test string",
                        uri: "Test string",
                    }                ],
                notes: "Test string",
                parameters: {
                    addOnParameters: {
                        parameters: {
                            A: "Test string"                        },
                    },
                },
                signature: "Test string",
            },
            created: "Test string",
            creator: {
                displayName: "Test string",
                email: "Test string",
                id: "Test string",
                self: true,
            },
            description: "Test string",
            end: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            endTimeUnspecified: true,
            etag: "Test string",
            extendedProperties: {
                private: {
                    A: "Test string"                },
                shared: {
                    A: "Test string"                },
            },
            gadget: {
                display: "Test string",
                height: 42,
                iconLink: "Test string",
                link: "Test string",
                preferences: {
                    A: "Test string"                },
                title: "Test string",
                type: "Test string",
                width: 42,
            },
            guestsCanInviteOthers: true,
            guestsCanModify: true,
            guestsCanSeeOtherGuests: true,
            hangoutLink: "Test string",
            htmlLink: "Test string",
            iCalUID: "Test string",
            id: "Test string",
            kind: "Test string",
            location: "Test string",
            locked: true,
            organizer: {
                displayName: "Test string",
                email: "Test string",
                id: "Test string",
                self: true,
            },
            originalStartTime: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            privateCopy: true,
            recurrence: [
                "Test string"            ],
            recurringEventId: "Test string",
            reminders: {
                overrides: [
                    {
                        method: "Test string",
                        minutes: 42,
                    }                ],
                useDefault: true,
            },
            sequence: 42,
            source: {
                title: "Test string",
                url: "Test string",
            },
            start: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            status: "Test string",
            summary: "Test string",
            transparency: "Test string",
            updated: "Test string",
            visibility: "Test string",
        });
        /** Creates an event based on a simple text string. */
        await gapi.client.calendar.events.quickAdd({
            calendarId: "Test string",
            sendNotifications: true,
            sendUpdates: "Test string",
            text: "Test string",
        });
        /** Updates an event. */
        await gapi.client.calendar.events.update({
            alwaysIncludeEmail: true,
            calendarId: "Test string",
            conferenceDataVersion: 42,
            eventId: "Test string",
            maxAttendees: 42,
            sendNotifications: true,
            sendUpdates: "Test string",
            supportsAttachments: true,
        }, {
            anyoneCanAddSelf: true,
            attachments: [
                {
                    fileId: "Test string",
                    fileUrl: "Test string",
                    iconLink: "Test string",
                    mimeType: "Test string",
                    title: "Test string",
                }            ],
            attendees: [
                {
                    additionalGuests: 42,
                    comment: "Test string",
                    displayName: "Test string",
                    email: "Test string",
                    id: "Test string",
                    optional: true,
                    organizer: true,
                    resource: true,
                    responseStatus: "Test string",
                    self: true,
                }            ],
            attendeesOmitted: true,
            colorId: "Test string",
            conferenceData: {
                conferenceId: "Test string",
                conferenceSolution: {
                    iconUri: "Test string",
                    key: {
                        type: "Test string",
                    },
                    name: "Test string",
                },
                createRequest: {
                    conferenceSolutionKey: {
                        type: "Test string",
                    },
                    requestId: "Test string",
                    status: {
                        statusCode: "Test string",
                    },
                },
                entryPoints: [
                    {
                        accessCode: "Test string",
                        entryPointFeatures: [
                            "Test string"                        ],
                        entryPointType: "Test string",
                        label: "Test string",
                        meetingCode: "Test string",
                        passcode: "Test string",
                        password: "Test string",
                        pin: "Test string",
                        regionCode: "Test string",
                        uri: "Test string",
                    }                ],
                notes: "Test string",
                parameters: {
                    addOnParameters: {
                        parameters: {
                            A: "Test string"                        },
                    },
                },
                signature: "Test string",
            },
            created: "Test string",
            creator: {
                displayName: "Test string",
                email: "Test string",
                id: "Test string",
                self: true,
            },
            description: "Test string",
            end: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            endTimeUnspecified: true,
            etag: "Test string",
            extendedProperties: {
                private: {
                    A: "Test string"                },
                shared: {
                    A: "Test string"                },
            },
            gadget: {
                display: "Test string",
                height: 42,
                iconLink: "Test string",
                link: "Test string",
                preferences: {
                    A: "Test string"                },
                title: "Test string",
                type: "Test string",
                width: 42,
            },
            guestsCanInviteOthers: true,
            guestsCanModify: true,
            guestsCanSeeOtherGuests: true,
            hangoutLink: "Test string",
            htmlLink: "Test string",
            iCalUID: "Test string",
            id: "Test string",
            kind: "Test string",
            location: "Test string",
            locked: true,
            organizer: {
                displayName: "Test string",
                email: "Test string",
                id: "Test string",
                self: true,
            },
            originalStartTime: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            privateCopy: true,
            recurrence: [
                "Test string"            ],
            recurringEventId: "Test string",
            reminders: {
                overrides: [
                    {
                        method: "Test string",
                        minutes: 42,
                    }                ],
                useDefault: true,
            },
            sequence: 42,
            source: {
                title: "Test string",
                url: "Test string",
            },
            start: {
                date: "Test string",
                dateTime: "Test string",
                timeZone: "Test string",
            },
            status: "Test string",
            summary: "Test string",
            transparency: "Test string",
            updated: "Test string",
            visibility: "Test string",
        });
        /** Watch for changes to Events resources. */
        await gapi.client.calendar.events.watch({
            alwaysIncludeEmail: true,
            calendarId: "Test string",
            iCalUID: "Test string",
            maxAttendees: 42,
            maxResults: 42,
            orderBy: "Test string",
            pageToken: "Test string",
            privateExtendedProperty: "Test string",
            q: "Test string",
            sharedExtendedProperty: "Test string",
            showDeleted: true,
            showHiddenInvitations: true,
            singleEvents: true,
            syncToken: "Test string",
            timeMax: "Test string",
            timeMin: "Test string",
            timeZone: "Test string",
            updatedMin: "Test string",
        }, {
            address: "Test string",
            expiration: "Test string",
            id: "Test string",
            kind: "Test string",
            params: {
                A: "Test string"            },
            payload: true,
            resourceId: "Test string",
            resourceUri: "Test string",
            token: "Test string",
            type: "Test string",
        });
        /** Returns free/busy information for a set of calendars. */
        await gapi.client.calendar.freebusy.query({} , {
            calendarExpansionMax: 42,
            groupExpansionMax: 42,
            items: [
                {
                    id: "Test string",
                }            ],
            timeMax: "Test string",
            timeMin: "Test string",
            timeZone: "Test string",
        });
        /** Returns a single user setting. */
        await gapi.client.calendar.settings.get({
            setting: "Test string",
        });
        /** Returns all user settings for the authenticated user. */
        await gapi.client.calendar.settings.list({
            maxResults: 42,
            pageToken: "Test string",
            syncToken: "Test string",
        });
        /** Watch for changes to Settings resources. */
        await gapi.client.calendar.settings.watch({
            maxResults: 42,
            pageToken: "Test string",
            syncToken: "Test string",
        }, {
            address: "Test string",
            expiration: "Test string",
            id: "Test string",
            kind: "Test string",
            params: {
                A: "Test string"            },
            payload: true,
            resourceId: "Test string",
            resourceUri: "Test string",
            token: "Test string",
            type: "Test string",
        });
    }
});
