# TypeScript typings for Library Agent API v1

A simple Google Example Library API.
For detailed description please check [documentation](https://cloud.google.com/docs/quota).

## Installing

Install typings for Library Agent API:

```
npm install @types/gapi.client.libraryagent@v1 --save-dev
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
gapi.client.load('libraryagent', 'v1', () => {
  // now we can use gapi.client.libraryagent
  // ...
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [ 
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

After that you can use Library Agent API resources:

```typescript

/*
Gets a shelf. Returns NOT_FOUND if the shelf does not exist.
*/
await gapi.client.libraryagent.shelves.get({ name: "name",  });

/*
Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.
*/
await gapi.client.libraryagent.shelves.list({  });
```