# @wingspan/files

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/wingspanHQ/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/wingspanHQ/client-sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @wingspan/files
```

### Yarn

```bash
yarn add @wingspan/files
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Files } from "@wingspan/files";

async function run() {
    const sdk = new Files({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.documentManagementForESignatures.getFilesDocument();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [documentManagementForESignatures](docs/sdks/documentmanagementforesignatures/README.md)

* [getFilesDocument](docs/sdks/documentmanagementforesignatures/README.md#getfilesdocument) - Retrieve All Documents
* [getFilesDocumentId](docs/sdks/documentmanagementforesignatures/README.md#getfilesdocumentid) - Retrieve Specific Document Details
* [getFilesDocumentIdSaveFiles](docs/sdks/documentmanagementforesignatures/README.md#getfilesdocumentidsavefiles) - Retrieve E-Signed Documents as PDF
* [getFilesDocumentIdSigningUrls](docs/sdks/documentmanagementforesignatures/README.md#getfilesdocumentidsigningurls) - Obtain URLs for Document Signing

### [privateFileManagement](docs/sdks/privatefilemanagement/README.md)

* [deleteFilesMemberPrivateId](docs/sdks/privatefilemanagement/README.md#deletefilesmemberprivateid) - Remove a Specific Private File
* [getFilesMemberPrivate](docs/sdks/privatefilemanagement/README.md#getfilesmemberprivate) - Fetch a List of All Private Files for the Member
* [getFilesMemberPrivateId](docs/sdks/privatefilemanagement/README.md#getfilesmemberprivateid) - Retrieve Specific Private File Details
* [getFilesMemberPrivateIdDownload](docs/sdks/privatefilemanagement/README.md#getfilesmemberprivateiddownload) - Download a Member's Private File
* [patchFilesMemberPrivateId](docs/sdks/privatefilemanagement/README.md#patchfilesmemberprivateid) - Modify Specific Private File's Metadata
* [postFilesMemberPrivate](docs/sdks/privatefilemanagement/README.md#postfilesmemberprivate) - Generate Entry for a New Private File
* [postFilesMemberPrivateUpload](docs/sdks/privatefilemanagement/README.md#postfilesmemberprivateupload) - Upload a Private File

### [publicFileManagement](docs/sdks/publicfilemanagement/README.md)

* [deleteFilesMemberPublicId](docs/sdks/publicfilemanagement/README.md#deletefilesmemberpublicid) - Remove Member's Public File
* [getFilesMemberPublic](docs/sdks/publicfilemanagement/README.md#getfilesmemberpublic) - Retrieve List of Member's Public Files
* [getFilesMemberPublicId](docs/sdks/publicfilemanagement/README.md#getfilesmemberpublicid) - Fetch Specific Public File Details
* [getFilesMemberPublicIdDownload](docs/sdks/publicfilemanagement/README.md#getfilesmemberpubliciddownload) - Download a Specific Public File
* [getFilesMemberPublicIdSummary](docs/sdks/publicfilemanagement/README.md#getfilesmemberpublicidsummary) - Retrieve Summary of a Specific Public File
* [patchFilesMemberPublicId](docs/sdks/publicfilemanagement/README.md#patchfilesmemberpublicid) - Update Member's Public File
* [postFilesMemberPublic](docs/sdks/publicfilemanagement/README.md#postfilesmemberpublic) - Initialize Public File Creation
* [postFilesMemberPublicUpload](docs/sdks/publicfilemanagement/README.md#postfilesmemberpublicupload) - Upload Publicly Viewable File

### [eSignatureDocumentTemplates](docs/sdks/esignaturedocumenttemplates/README.md)

* [deleteFilesTemplateId](docs/sdks/esignaturedocumenttemplates/README.md#deletefilestemplateid) - Remove a Specific E-signature Document Template
* [getFilesTemplate](docs/sdks/esignaturedocumenttemplates/README.md#getfilestemplate) - Retrieve All E-signature Document Templates
* [getFilesTemplateId](docs/sdks/esignaturedocumenttemplates/README.md#getfilestemplateid) - Retrieve Specific E-signature Document Template Details
* [postFilesTemplate](docs/sdks/esignaturedocumenttemplates/README.md#postfilestemplate) - Create a New E-signature Document Template
<!-- End Available Resources and Operations [operations] -->



<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Files } from "@wingspan/files";
import * as errors from "@wingspan/files/sdk/models/errors";

async function run() {
    const sdk = new Files({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    let result;
    try {
        result = await sdk.documentManagementForESignatures.getFilesDocument();
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.wingspan.app` | None |
| 1 | `https://stagingapi.wingspan.app` | None |

```typescript
import { Files } from "@wingspan/files";

async function run() {
    const sdk = new Files({
        serverIdx: 1,
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.documentManagementForESignatures.getFilesDocument();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Files } from "@wingspan/files";

async function run() {
    const sdk = new Files({
        serverURL: "https://api.wingspan.app",
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.documentManagementForESignatures.getFilesDocument();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Files } from "@wingspan/files";
import { HTTPClient } from "@wingspan/files/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Files({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Files } from "@wingspan/files";

async function run() {
    const sdk = new Files({
        bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.documentManagementForESignatures.getFilesDocument();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
