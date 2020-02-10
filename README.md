# google-api-typings-generator
Generate TypeScript typings definition for all Google APIs,
using [Google API discovery](https://developers.google.com/discovery/) service.

##### My fork DIFF:
- Supports both `request` and `body` approaches; [details](#resource-vs-body)
- Includes empty interfaces; [details](#empty-interfaces)
- Works for arrays, aka `"repeated": true`; [details](#arrays--repeated-values)
- Other minor fixes and updates

## Usage

### Generating types

1. Use the supported Node version via [Node Version Manager](https://github.com/nvm-sh/nvm):

    ```sh
    nvm install
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Generate type definitions for:

    1. all discovered Google APIs:

        ```sh
        npm start
        ```

        _Some APIs are disabled or not fully developed yet, so some expected errors might be output._

    2. one service by name:

        ```sh
        npm start -- --service sheets
        ```

        where `sheets` is the name of the [Google Sheets](https://developers.google.com/sheets/) service.

        _The full list of APIs can be found [here](https://www.googleapis.com/discovery/v1/apis)._

    3. one service by URL:

        ```sh
        npm start -- --url https://sheets.googleapis.com/\\\$discovery/rest?version=v4
        ```

       _Note the intentional escaping of `$discovery`._

### Compiling project

```sh
npm run compile
```

```sh
node dist/cli.js --out ./types
```

### Running tests

Tests are run automatically in practice via GitHub Actions continuous integration.

#### Lint

The generated type definitions are linted via [`dtslint`](https://github.com/Microsoft/dtslint), mimicking
[DefinitelyTyped's process](https://github.com/DefinitelyTyped/DefinitelyTyped#verifying).

A single project can be linted via:

```
npm run dtslint types/<project-directory>
```

All projects can be linted in parallel via:

```
GAPI_MAX_PARALLEL=3 npm run lint
```

#### Unit (WIP)

Unit tests for this generator project are written with [Jasmine](https://jasmine.github.io/) and
[Mocha](https://mochajs.org/). They can be run via:

```
npm run test
```

### Fixing formatting

This project leverages [Google's TypeScript Style (gts)](https://github.com/google/gts) to standardize formatting.

To invoke the automatic code fixer, run:

```sh
npm run fix
```

## Details

### Resource VS Body
First approach (Resource):
```javascript
gapi.client.sheets.spreadsheets
  .batchUpdate({
    spreadsheetId: 'someId',
    resource: {
      // Request Body goes here, as part of `request`
    },
  })
```
second approach (Body):
```javascript
gapi.client.sheets.spreadsheets
  .batchUpdate({
    spreadsheetId: 'someId',
  }, {
    // Request Body goes here, as a second argument
  })
```
Both approaches are valid (tested for Google Sheets API), but first one seems to be default for JS Client Library.

More info here: [google/google-api-javascript-client#432 (comment)](https://github.com/google/google-api-javascript-client/issues/432#issuecomment-530860301),
and here: [declanvong@`bec4f89`#r35992626](https://github.com/declanvong/google-api-typings-generator/commit/bec4f89b998db670e4a9d41810ceb39a1ba9b798#r35992626)

**NOTE:** Some APIs have methods that accept `resource` parameter that is not request body. In that case, we only generate second approach ([details](https://github.com/Maxim-Mazurok/google-api-typings-generator/pull/14/commits/776e36ef25886fdb2d38a002ed12ba1dacde85c5))

### Empty interfaces
This fork keeps interfaces even if they are empty to make typings more accurate.

More info here: [Maxim-Mazurok/google-api-typings-generator#4](https://github.com/Maxim-Mazurok/google-api-typings-generator/pull/4)

### Arrays / repeated values
This fork understands `"repeated": true`

More info here: [Maxim-Mazurok/google-api-typings-generator#1](https://github.com/Maxim-Mazurok/google-api-typings-generator/pull/1)
and here: [declanvong@`bec4f89`#r35992626](https://github.com/declanvong/google-api-typings-generator/commit/bec4f89b998db670e4a9d41810ceb39a1ba9b798#r35992626)
