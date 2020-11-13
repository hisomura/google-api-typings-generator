/* This is stub file for gapi.client.books definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201110

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('books', 'v1', () => {
        /** now we can use gapi.client.books */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage your books */
            'https://www.googleapis.com/auth/books',
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
        /** Retrieves metadata for a specific bookshelf for the specified user. */
        await gapi.client.books.bookshelves.get({
            shelf: "Test string",
            source: "Test string",
            userId: "Test string",
        });
        /** Retrieves volumes in a specific bookshelf for the specified user. */
        await gapi.client.books.bookshelves.volumes.list({
            maxResults: 42,
            shelf: "Test string",
            showPreorders: true,
            source: "Test string",
            startIndex: 42,
            userId: "Test string",
        });
        /** Retrieves a list of public bookshelves for the specified user. */
        await gapi.client.books.bookshelves.list({
            source: "Test string",
            userId: "Test string",
        });
        /** Retrieves volumes in a specific bookshelf for the specified user. */
        await gapi.client.books.bookshelves.volumes.list({
            maxResults: 42,
            shelf: "Test string",
            showPreorders: true,
            source: "Test string",
            startIndex: 42,
            userId: "Test string",
        });
        /** Add a user-upload volume and triggers processing. */
        await gapi.client.books.cloudloading.addBook({
            drive_document_id: "Test string",
            mime_type: "Test string",
            name: "Test string",
            upload_client_token: "Test string",
        });
        /** Remove the book and its contents */
        await gapi.client.books.cloudloading.deleteBook({
            volumeId: "Test string",
        });
        /** Updates a user-upload volume. */
        await gapi.client.books.cloudloading.updateBook({
        }, {
            author: "Test string",
            processingState: "Test string",
            title: "Test string",
            volumeId: "Test string",
        });
        /** Returns a list of offline dictionary metadata available */
        await gapi.client.books.dictionary.listOfflineMetadata({
            cpksver: "Test string",
        });
        /** Gets information regarding the family that the user is part of. */
        await gapi.client.books.familysharing.getFamilyInfo({
            source: "Test string",
        });
        /** Initiates sharing of the content with the user's family. Empty response indicates success. */
        await gapi.client.books.familysharing.share({
            docId: "Test string",
            source: "Test string",
            volumeId: "Test string",
        });
        /** Initiates revoking content that has already been shared with the user's family. Empty response indicates success. */
        await gapi.client.books.familysharing.unshare({
            docId: "Test string",
            source: "Test string",
            volumeId: "Test string",
        });
        /** Gets the layer summary for a volume. */
        await gapi.client.books.layers.get({
            contentVersion: "Test string",
            source: "Test string",
            summaryId: "Test string",
            volumeId: "Test string",
        });
        /** Gets the annotation data. */
        await gapi.client.books.layers.annotationData.get({
            allowWebDefinitions: true,
            annotationDataId: "Test string",
            contentVersion: "Test string",
            h: 42,
            layerId: "Test string",
            locale: "Test string",
            scale: 42,
            source: "Test string",
            volumeId: "Test string",
            w: 42,
        });
        /** Gets the annotation data for a volume and layer. */
        await gapi.client.books.layers.annotationData.list({
            annotationDataId: "Test string",
            contentVersion: "Test string",
            h: 42,
            layerId: "Test string",
            locale: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            scale: 42,
            source: "Test string",
            updatedMax: "Test string",
            updatedMin: "Test string",
            volumeId: "Test string",
            w: 42,
        });
        /** Gets the volume annotation. */
        await gapi.client.books.layers.volumeAnnotations.get({
            annotationId: "Test string",
            layerId: "Test string",
            locale: "Test string",
            source: "Test string",
            volumeId: "Test string",
        });
        /** Gets the volume annotations for a volume and layer. */
        await gapi.client.books.layers.volumeAnnotations.list({
            contentVersion: "Test string",
            endOffset: "Test string",
            endPosition: "Test string",
            layerId: "Test string",
            locale: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            showDeleted: true,
            source: "Test string",
            startOffset: "Test string",
            startPosition: "Test string",
            updatedMax: "Test string",
            updatedMin: "Test string",
            volumeAnnotationsVersion: "Test string",
            volumeId: "Test string",
        });
        /** List the layer summaries for a volume. */
        await gapi.client.books.layers.list({
            contentVersion: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            source: "Test string",
            volumeId: "Test string",
        });
        /** Gets the annotation data. */
        await gapi.client.books.layers.annotationData.get({
            allowWebDefinitions: true,
            annotationDataId: "Test string",
            contentVersion: "Test string",
            h: 42,
            layerId: "Test string",
            locale: "Test string",
            scale: 42,
            source: "Test string",
            volumeId: "Test string",
            w: 42,
        });
        /** Gets the annotation data for a volume and layer. */
        await gapi.client.books.layers.annotationData.list({
            annotationDataId: "Test string",
            contentVersion: "Test string",
            h: 42,
            layerId: "Test string",
            locale: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            scale: 42,
            source: "Test string",
            updatedMax: "Test string",
            updatedMin: "Test string",
            volumeId: "Test string",
            w: 42,
        });
        /** Gets the volume annotation. */
        await gapi.client.books.layers.volumeAnnotations.get({
            annotationId: "Test string",
            layerId: "Test string",
            locale: "Test string",
            source: "Test string",
            volumeId: "Test string",
        });
        /** Gets the volume annotations for a volume and layer. */
        await gapi.client.books.layers.volumeAnnotations.list({
            contentVersion: "Test string",
            endOffset: "Test string",
            endPosition: "Test string",
            layerId: "Test string",
            locale: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            showDeleted: true,
            source: "Test string",
            startOffset: "Test string",
            startPosition: "Test string",
            updatedMax: "Test string",
            updatedMin: "Test string",
            volumeAnnotationsVersion: "Test string",
            volumeId: "Test string",
        });
        /** Gets the current settings for the user. */
        await gapi.client.books.myconfig.getUserSettings({
            country: "Test string",
        });
        /** Release downloaded content access restriction. */
        await gapi.client.books.myconfig.releaseDownloadAccess({
            cpksver: "Test string",
            locale: "Test string",
            source: "Test string",
            volumeIds: "Test string",
        });
        /** Request concurrent and download access restrictions. */
        await gapi.client.books.myconfig.requestAccess({
            cpksver: "Test string",
            licenseTypes: "Test string",
            locale: "Test string",
            nonce: "Test string",
            source: "Test string",
            volumeId: "Test string",
        });
        /** Request downloaded content access for specified volumes on the My eBooks shelf. */
        await gapi.client.books.myconfig.syncVolumeLicenses({
            cpksver: "Test string",
            features: "Test string",
            includeNonComicsSeries: true,
            locale: "Test string",
            nonce: "Test string",
            showPreorders: true,
            source: "Test string",
            volumeIds: "Test string",
        });
        /** Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value. */
        await gapi.client.books.myconfig.updateUserSettings({
        }, {
            kind: "Test string",
            notesExport: {
                folderName: "Test string",
                isEnabled: true,
            },
            notification: {
                matchMyInterests: {
                    opted_state: "Test string",
                },
                moreFromAuthors: {
                    opted_state: "Test string",
                },
                moreFromSeries: {
                    opted_state: "Test string",
                },
                priceDrop: {
                    opted_state: "Test string",
                },
                rewardExpirations: {
                    opted_state: "Test string",
                },
            },
        });
        /** Returns notification details for a given notification id. */
        await gapi.client.books.notification.get({
            locale: "Test string",
            notification_id: "Test string",
            source: "Test string",
        });
        /** List categories for onboarding experience. */
        await gapi.client.books.onboarding.listCategories({
            locale: "Test string",
        });
        /** List available volumes under categories for onboarding experience. */
        await gapi.client.books.onboarding.listCategoryVolumes({
            categoryId: "Test string",
            locale: "Test string",
            maxAllowedMaturityRating: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Returns a stream of personalized book clusters */
        await gapi.client.books.personalizedstream.get({
            locale: "Test string",
            maxAllowedMaturityRating: "Test string",
            source: "Test string",
        });
        /** Accepts the promo offer. */
        await gapi.client.books.promooffer.accept({
            androidId: "Test string",
            device: "Test string",
            manufacturer: "Test string",
            model: "Test string",
            offerId: "Test string",
            product: "Test string",
            serial: "Test string",
            volumeId: "Test string",
        });
        /** Marks the promo offer as dismissed. */
        await gapi.client.books.promooffer.dismiss({
            androidId: "Test string",
            device: "Test string",
            manufacturer: "Test string",
            model: "Test string",
            offerId: "Test string",
            product: "Test string",
            serial: "Test string",
        });
        /** Returns a list of promo offers available to the user */
        await gapi.client.books.promooffer.get({
            androidId: "Test string",
            device: "Test string",
            manufacturer: "Test string",
            model: "Test string",
            product: "Test string",
            serial: "Test string",
        });
        /** Returns Series metadata for the given series ids. */
        await gapi.client.books.series.get({
            series_id: "Test string",
        });
        /** Returns Series membership data given the series id. */
        await gapi.client.books.series.membership.get({
            page_size: 42,
            page_token: "Test string",
            series_id: "Test string",
        });
        /** Gets volume information for a single volume. */
        await gapi.client.books.volumes.get({
            country: "Test string",
            includeNonComicsSeries: true,
            partner: "Test string",
            projection: "Test string",
            source: "Test string",
            user_library_consistent_read: true,
            volumeId: "Test string",
        });
        /** Return a list of associated books. */
        await gapi.client.books.volumes.associated.list({
            association: "Test string",
            locale: "Test string",
            maxAllowedMaturityRating: "Test string",
            source: "Test string",
            volumeId: "Test string",
        });
        /** Return a list of books in My Library. */
        await gapi.client.books.volumes.mybooks.list({
            acquireMethod: "Test string",
            country: "Test string",
            locale: "Test string",
            maxResults: 42,
            processingState: "Test string",
            source: "Test string",
            startIndex: 42,
        });
        /** Return a list of recommended books for the current user. */
        await gapi.client.books.volumes.recommended.list({
            locale: "Test string",
            maxAllowedMaturityRating: "Test string",
            source: "Test string",
        });
        /** Rate a recommended book for the current user. */
        await gapi.client.books.volumes.recommended.rate({
            locale: "Test string",
            rating: "Test string",
            source: "Test string",
            volumeId: "Test string",
        });
        /** Return a list of books uploaded by the current user. */
        await gapi.client.books.volumes.useruploaded.list({
            locale: "Test string",
            maxResults: 42,
            processingState: "Test string",
            source: "Test string",
            startIndex: 42,
            volumeId: "Test string",
        });
        /** Performs a book search. */
        await gapi.client.books.volumes.list({
            download: "Test string",
            filter: "Test string",
            langRestrict: "Test string",
            libraryRestrict: "Test string",
            maxAllowedMaturityRating: "Test string",
            maxResults: 42,
            orderBy: "Test string",
            partner: "Test string",
            printType: "Test string",
            projection: "Test string",
            q: "Test string",
            showPreorders: true,
            source: "Test string",
            startIndex: 42,
        });
        /** Return a list of associated books. */
        await gapi.client.books.volumes.associated.list({
            association: "Test string",
            locale: "Test string",
            maxAllowedMaturityRating: "Test string",
            source: "Test string",
            volumeId: "Test string",
        });
        /** Return a list of books in My Library. */
        await gapi.client.books.volumes.mybooks.list({
            acquireMethod: "Test string",
            country: "Test string",
            locale: "Test string",
            maxResults: 42,
            processingState: "Test string",
            source: "Test string",
            startIndex: 42,
        });
        /** Return a list of recommended books for the current user. */
        await gapi.client.books.volumes.recommended.list({
            locale: "Test string",
            maxAllowedMaturityRating: "Test string",
            source: "Test string",
        });
        /** Rate a recommended book for the current user. */
        await gapi.client.books.volumes.recommended.rate({
            locale: "Test string",
            rating: "Test string",
            source: "Test string",
            volumeId: "Test string",
        });
        /** Return a list of books uploaded by the current user. */
        await gapi.client.books.volumes.useruploaded.list({
            locale: "Test string",
            maxResults: 42,
            processingState: "Test string",
            source: "Test string",
            startIndex: 42,
            volumeId: "Test string",
        });
    }
});
