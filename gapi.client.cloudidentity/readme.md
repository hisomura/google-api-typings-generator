# TypeScript typings for Cloud Identity API v1

API for provisioning and managing identity resources.
For detailed description please check [documentation](https://cloud.google.com/identity/).

## Installing

Install typings for Cloud Identity API:

```
npm install @types/gapi.client.cloudidentity@v1 --save-dev
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
gapi.client.load('cloudidentity', 'v1', () => {
  // now we can use gapi.client.cloudidentity
  // ...
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [ 
      // See your device details
      'https://www.googleapis.com/auth/cloud-identity.devices.lookup',

      // See, change, create, and delete any of the Cloud Identity Groups that you can access, including the members of each group
      'https://www.googleapis.com/auth/cloud-identity.groups',

      // See any Cloud Identity Groups that you can access, including group members and their emails
      'https://www.googleapis.com/auth/cloud-identity.groups.readonly',

      // View and manage your data across Google Cloud Platform services
      'https://www.googleapis.com/auth/cloud-platform',
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

After that you can use Cloud Identity API resources:

```typescript

/*
Cancels an unfinished device wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped. This operation is possible when the device is in a "pending wipe" state. The device enters the "pending wipe" state when a wipe device command is issued, but has not yet been sent to the device. The cancel wipe will fail if the wipe command has already been issued to the device.
*/
await gapi.client.cloudidentity.devices.cancelWipe({ name: "name",  });

/*
Creates a device. Only company-owned device may be created.
*/
await gapi.client.cloudidentity.devices.create({  });

/*
Deletes the specified device.
*/
await gapi.client.cloudidentity.devices.delete({ name: "name",  });

/*
Retrieves the specified device.
*/
await gapi.client.cloudidentity.devices.get({ name: "name",  });

/*
Lists/Searches devices.
*/
await gapi.client.cloudidentity.devices.list({  });

/*
Wipes all data on the specified device.
*/
await gapi.client.cloudidentity.devices.wipe({ name: "name",  });

/*
Creates a Group.
*/
await gapi.client.cloudidentity.groups.create({  });

/*
Deletes a Group.
*/
await gapi.client.cloudidentity.groups.delete({ name: "name",  });

/*
Retrieves a Group.
*/
await gapi.client.cloudidentity.groups.get({ name: "name",  });

/*
Lists groups within a customer or a domain.
*/
await gapi.client.cloudidentity.groups.list({  });

/*
Looks up [resource name](https://cloud.google.com/apis/design/resource_names) of a Group by its EntityKey.
*/
await gapi.client.cloudidentity.groups.lookup({  });

/*
Updates a Group.
*/
await gapi.client.cloudidentity.groups.patch({ name: "name",  });

/*
Searches for Groups.
*/
await gapi.client.cloudidentity.groups.search({  });
```