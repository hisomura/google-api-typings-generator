# TypeScript typings for Display & Video 360 API v1

Display & Video 360 API allows users to manage and create campaigns and reports.
For detailed description please check [documentation](https://developers.google.com/display-video/).

## Installing

Install typings for Display & Video 360 API:

```
npm install @types/gapi.client.displayvideo@v1 --save-dev
```

## Usage

You need to initialize Google API client in your code:

```typescript
gapi.load('client', () => {
  // now we can use gapi.client
  // ...
});
```

Then load api client wrapper:

```typescript
gapi.client.load('displayvideo', 'v1', () => {
  // now we can use gapi.client.displayvideo
  // ...
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [ 
      // Create, see, edit, and permanently delete your Display & Video 360 entities and reports
      'https://www.googleapis.com/auth/display-video',

      // View and manage your reports in DoubleClick Bid Manager
      'https://www.googleapis.com/auth/doubleclickbidmanager',
    ],
    immediate = true;
// ...

gapi.auth.authorize(
  { client_id: client_id, scope: scope, immediate: immediate },
  authResult => {
    if (authResult && !authResult.error) {
        /* handle successful authorization */
    } else {
        /* handle authorization error */
    }
});
```

After that you can use Display & Video 360 API resources:

```typescript

/*
Bulk edits targeting options under a single advertiser.
The operation will delete the assigned targeting options provided in
BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and
then create the assigned targeting options provided in
BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
*/
await gapi.client.displayvideo.advertisers.bulkEditAdvertiserAssignedTargetingOptions({ advertiserId: "advertiserId",  });

/*
Lists assigned targeting options of an advertiser across targeting types.
*/
await gapi.client.displayvideo.advertisers.bulkListAdvertiserAssignedTargetingOptions({ advertiserId: "advertiserId",  });

/*
Creates a new advertiser.
Returns the newly created advertiser if successful.
This method can take up to 180 seconds to complete.
*/
await gapi.client.displayvideo.advertisers.create({  });

/*
Deletes an advertiser.
Deleting an advertiser will delete all of its child resources, for example,
campaigns, insertion orders and line items.
A deleted advertiser cannot be recovered.
*/
await gapi.client.displayvideo.advertisers.delete({ advertiserId: "advertiserId",  });

/*
Gets an advertiser.
*/
await gapi.client.displayvideo.advertisers.get({ advertiserId: "advertiserId",  });

/*
Lists advertisers that are accessible to the current user.

The order is defined by the order_by
parameter.

A single partner_id is required.
Cross-partner listing is not supported.
*/
await gapi.client.displayvideo.advertisers.list({  });

/*
Updates an existing advertiser.
Returns the updated advertiser if successful.
*/
await gapi.client.displayvideo.advertisers.patch({ advertiserId: "advertiserId",  });

/*
Gets a combined audience.
*/
await gapi.client.displayvideo.combinedAudiences.get({ combinedAudienceId: "combinedAudienceId",  });

/*
Lists combined audiences.

The order is defined by the
order_by parameter.
*/
await gapi.client.displayvideo.combinedAudiences.list({  });

/*
Gets a custom list.
*/
await gapi.client.displayvideo.customLists.get({ customListId: "customListId",  });

/*
Lists custom lists.

The order is defined by the order_by
parameter.
*/
await gapi.client.displayvideo.customLists.list({  });

/*
Gets a first and third party audience.
*/
await gapi.client.displayvideo.firstAndThirdPartyAudiences.get({ firstAndThirdPartyAudienceId: "firstAndThirdPartyAudienceId",  });

/*
Lists first and third party audiences.

The order is defined by the
order_by parameter.
*/
await gapi.client.displayvideo.firstAndThirdPartyAudiences.list({  });

/*
Gets a Floodlight group.
*/
await gapi.client.displayvideo.floodlightGroups.get({ floodlightGroupId: "floodlightGroupId",  });

/*
Updates an existing Floodlight group.
Returns the updated Floodlight group if successful.
*/
await gapi.client.displayvideo.floodlightGroups.patch({ floodlightGroupId: "floodlightGroupId",  });

/*
Gets a Google audience.
*/
await gapi.client.displayvideo.googleAudiences.get({ googleAudienceId: "googleAudienceId",  });

/*
Lists Google audiences.

The order is defined by the order_by
parameter.
*/
await gapi.client.displayvideo.googleAudiences.list({  });

/*
Creates a new inventory source group. Returns the newly created inventory
source group if successful.
*/
await gapi.client.displayvideo.inventorySourceGroups.create({  });

/*
Deletes an inventory source group.
*/
await gapi.client.displayvideo.inventorySourceGroups.delete({ inventorySourceGroupId: "inventorySourceGroupId",  });

/*
Gets an inventory source group.
*/
await gapi.client.displayvideo.inventorySourceGroups.get({ inventorySourceGroupId: "inventorySourceGroupId",  });

/*
Lists inventory source groups that are accessible to the current user.

The order is defined by the
order_by parameter.
*/
await gapi.client.displayvideo.inventorySourceGroups.list({  });

/*
Updates an inventory source group. Returns the updated inventory source
group if successful.
*/
await gapi.client.displayvideo.inventorySourceGroups.patch({ inventorySourceGroupId: "inventorySourceGroupId",  });

/*
Gets an inventory source.
*/
await gapi.client.displayvideo.inventorySources.get({ inventorySourceId: "inventorySourceId",  });

/*
Lists inventory sources that are accessible to the current user.

The order is defined by the
order_by parameter.
If a filter by
entity_status is not
specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED`
will not be included in the results.
*/
await gapi.client.displayvideo.inventorySources.list({  });

/*
Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.`

**Note**: Download requests will not be successful without including `alt=media` query string.
*/
await gapi.client.displayvideo.media.download({ resourceName: "resourceName",  });

/*
Creates an SDF Download Task. Returns an
Operation.

An SDF Download Task is a long-running, asynchronous operation. The
metadata type of this operation is
SdfDownloadTaskMetadata. If the request is successful, the
response type of the operation is
SdfDownloadTask. The response will not include the download files,
which must be retrieved with
media.download. The state of
operation can be retrieved with
sdfdownloadtask.operations.get.

Any errors can be found in the
error.message. Note
that error.details is expected to be
empty.
*/
await gapi.client.displayvideo.sdfdownloadtasks.create({  });
```