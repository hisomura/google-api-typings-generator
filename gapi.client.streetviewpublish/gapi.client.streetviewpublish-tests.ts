/* This is stub file for gapi.client.streetviewpublish definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201119

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('streetviewpublish', 'v1', () => {
        /** now we can use gapi.client.streetviewpublish */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Publish and manage your 360 photos on Google Street View */
            'https://www.googleapis.com/auth/streetviewpublish',
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
         * After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps. Currently, the only way to set
         * heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. CreatePhoto ignores
         * the `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the
         * request is malformed or if the uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if the account
         * has reached the storage limit.
         */
        await gapi.client.streetviewpublish.photo.create({
        }, {
            captureTime: "Test string",
            connections: [
                {
                    target: {
                        id: "Test string",
                    },
                }            ],
            downloadUrl: "Test string",
            mapsPublishStatus: "Test string",
            photoId: {
                id: "Test string",
            },
            places: [
                {
                    languageCode: "Test string",
                    name: "Test string",
                    placeId: "Test string",
                }            ],
            pose: {
                accuracyMeters: 42,
                altitude: 42,
                heading: 42,
                latLngPair: {
                    latitude: 42,
                    longitude: 42,
                },
                level: {
                    name: "Test string",
                    number: 42,
                },
                pitch: 42,
                roll: 42,
            },
            shareLink: "Test string",
            thumbnailUrl: "Test string",
            transferStatus: "Test string",
            uploadReference: {
                uploadUrl: "Test string",
            },
            viewCount: "Test string",
        });
        /**
         * Deletes a Photo and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. *
         * google.rpc.Code.NOT_FOUND if the photo ID does not exist.
         */
        await gapi.client.streetviewpublish.photo.delete({
            photoId: "Test string",
        });
        /**
         * Gets the metadata of the specified Photo. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo. *
         * google.rpc.Code.NOT_FOUND if the requested Photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
         */
        await gapi.client.streetviewpublish.photo.get({
            languageCode: "Test string",
            photoId: "Test string",
            view: "Test string",
        });
        /**
         * Creates an upload session to start uploading photo bytes. The method uses the upload URL of the returned UploadRef to upload the bytes for the Photo. In addition to the photo
         * requirements shown in https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, the photo must meet the following requirements: * Photo Sphere XMP metadata must be
         * included in the photo metadata. See https://developers.google.com/streetview/spherical-metadata for the required fields. * The pixel size of the photo must meet the size requirements
         * listed in https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and the photo must be a full 360 horizontally. After the upload completes, the method uses UploadRef
         * with CreatePhoto to create the Photo object entry.
         */
        await gapi.client.streetviewpublish.photo.startUpload({
        }, {
        });
        /**
         * Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported. Only the fields specified in the updateMask field
         * are used. If `updateMask` is not present, the update applies to all fields. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did
         * not create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the requested photo does not exist. *
         * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
         */
        await gapi.client.streetviewpublish.photo.update({
            id: "Test string",
            updateMask: "Test string",
        }, {
            captureTime: "Test string",
            connections: [
                {
                    target: {
                        id: "Test string",
                    },
                }            ],
            downloadUrl: "Test string",
            mapsPublishStatus: "Test string",
            photoId: {
                id: "Test string",
            },
            places: [
                {
                    languageCode: "Test string",
                    name: "Test string",
                    placeId: "Test string",
                }            ],
            pose: {
                accuracyMeters: 42,
                altitude: 42,
                heading: 42,
                latLngPair: {
                    latitude: 42,
                    longitude: 42,
                },
                level: {
                    name: "Test string",
                    number: 42,
                },
                pitch: 42,
                roll: 42,
            },
            shareLink: "Test string",
            thumbnailUrl: "Test string",
            transferStatus: "Test string",
            uploadReference: {
                uploadUrl: "Test string",
            },
            viewCount: "Test string",
        });
        /**
         * Deletes a list of Photos and their metadata. Note that if BatchDeletePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchDeletePhotos
         * succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific
         * failures that can occur per photo.
         */
        await gapi.client.streetviewpublish.photos.batchDelete({
        }, {
            photoIds: [
                "Test string"            ],
        });
        /**
         * Gets the metadata of the specified Photo batch. Note that if BatchGetPhotos fails, either critical fields are missing or there is an authentication error. Even if BatchGetPhotos
         * succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific
         * failures that can occur per photo.
         */
        await gapi.client.streetviewpublish.photos.batchGet({
            languageCode: "Test string",
            photoIds: "Test string",
            view: "Test string",
        });
        /**
         * Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported. Note that if BatchUpdatePhotos fails, either critical
         * fields are missing or there is an authentication error. Even if BatchUpdatePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each
         * PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo. Only the fields specified in updateMask field are used. If
         * `updateMask` is not present, the update applies to all fields. The number of UpdatePhotoRequest messages in a BatchUpdatePhotosRequest must not exceed 20. *Note:* To update
         * Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.
         */
        await gapi.client.streetviewpublish.photos.batchUpdate({
        }, {
            updatePhotoRequests: [
                {
                    photo: {
                        captureTime: "Test string",
                        connections: [
                            {
                                target: {
                                    id: "Test string",
                                },
                            }                        ],
                        downloadUrl: "Test string",
                        mapsPublishStatus: "Test string",
                        photoId: {
                            id: "Test string",
                        },
                        places: [
                            {
                                languageCode: "Test string",
                                name: "Test string",
                                placeId: "Test string",
                            }                        ],
                        pose: {
                            accuracyMeters: 42,
                            altitude: 42,
                            heading: 42,
                            latLngPair: {
                                latitude: 42,
                                longitude: 42,
                            },
                            level: {
                                name: "Test string",
                                number: 42,
                            },
                            pitch: 42,
                            roll: 42,
                        },
                        shareLink: "Test string",
                        thumbnailUrl: "Test string",
                        transferStatus: "Test string",
                        uploadReference: {
                            uploadUrl: "Test string",
                        },
                        viewCount: "Test string",
                    },
                    updateMask: "Test string",
                }            ],
        });
        /** Lists all the Photos that belong to the user. *Note:* Recently created photos that are still being indexed are not returned in the response. */
        await gapi.client.streetviewpublish.photos.list({
            filter: "Test string",
            languageCode: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            view: "Test string",
        });
    }
});
