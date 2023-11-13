# @wingspan/files

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/wingspanHQ/client-sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/wingspanHQ/client-sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @wingspan/files
```

### Yarn

```bash
yarn add @wingspan/files
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
### Example

```typescript
import { Files } from "@wingspan/files";

(async () => {
    const sdk = new Files({
        bearerAuth: "",
    });

    const res = await sdk.deleteFilesMemberPrivateId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Files SDK](docs/sdks/files/README.md)

* [deleteFilesMemberPrivateId](docs/sdks/files/README.md#deletefilesmemberprivateid) - Remove a Specific Private File
* [deleteFilesMemberPublicId](docs/sdks/files/README.md#deletefilesmemberpublicid) - Remove Member's Public File
* [deleteFilesTemplateId](docs/sdks/files/README.md#deletefilestemplateid) - Remove a Specific E-signature Document Template
* [getFilesDocument](docs/sdks/files/README.md#getfilesdocument) - Retrieve All Documents
* [getFilesDocumentId](docs/sdks/files/README.md#getfilesdocumentid) - Retrieve Specific Document Details
* [getFilesDocumentIdSaveFiles](docs/sdks/files/README.md#getfilesdocumentidsavefiles) - Retrieve E-Signed Documents as PDF
* [getFilesDocumentIdSigningUrls](docs/sdks/files/README.md#getfilesdocumentidsigningurls) - Obtain URLs for Document Signing
* [getFilesMemberPrivate](docs/sdks/files/README.md#getfilesmemberprivate) - Fetch a List of All Private Files for the Member
* [getFilesMemberPrivateId](docs/sdks/files/README.md#getfilesmemberprivateid) - Retrieve Specific Private File Details
* [getFilesMemberPrivateIdDownload](docs/sdks/files/README.md#getfilesmemberprivateiddownload) - Download a Member's Private File
* [getFilesMemberPublic](docs/sdks/files/README.md#getfilesmemberpublic) - Retrieve List of Member's Public Files
* [getFilesMemberPublicId](docs/sdks/files/README.md#getfilesmemberpublicid) - Fetch Specific Public File Details
* [getFilesMemberPublicIdDownload](docs/sdks/files/README.md#getfilesmemberpubliciddownload) - Download a Specific Public File
* [getFilesMemberPublicIdSummary](docs/sdks/files/README.md#getfilesmemberpublicidsummary) - Retrieve Summary of a Specific Public File
* [getFilesTemplate](docs/sdks/files/README.md#getfilestemplate) - Retrieve All E-signature Document Templates
* [getFilesTemplateId](docs/sdks/files/README.md#getfilestemplateid) - Retrieve Specific E-signature Document Template Details
* [patchFilesMemberPrivateId](docs/sdks/files/README.md#patchfilesmemberprivateid) - Modify Specific Private File's Metadata
* [patchFilesMemberPublicId](docs/sdks/files/README.md#patchfilesmemberpublicid) - Update Member's Public File
* [postFilesMemberPrivate](docs/sdks/files/README.md#postfilesmemberprivate) - Generate Entry for a New Private File
* [postFilesMemberPrivateUpload](docs/sdks/files/README.md#postfilesmemberprivateupload) - Upload a Private File
* [postFilesMemberPublic](docs/sdks/files/README.md#postfilesmemberpublic) - Initialize Public File Creation
* [postFilesMemberPublicUpload](docs/sdks/files/README.md#postfilesmemberpublicupload) - Upload Publicly Viewable File
* [postFilesTemplate](docs/sdks/files/README.md#postfilestemplate) - Create a New E-signature Document Template
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { Files } from "@wingspan/files";

(async () => {
    const sdk = new Files({
        bearerAuth: "",
    });

    let res;
    try {
        res = await sdk.deleteFilesMemberPrivateId({
            id: "<ID>",
        });
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->



<!-- Start Server Selection -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.wingspan.app/files` | None |
| 1 | `https://stagingapi.wingspan.app/files` | None |

#### Example

```typescript
import { Files } from "@wingspan/files";

(async () => {
    const sdk = new Files({
        serverIdx: 1,
        bearerAuth: "",
    });

    const res = await sdk.deleteFilesMemberPrivateId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Files } from "@wingspan/files";

(async () => {
    const sdk = new Files({
        serverURL: "https://api.wingspan.app/files",
        bearerAuth: "",
    });

    const res = await sdk.deleteFilesMemberPrivateId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
## Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @wingspan/files import Files;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Files({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Authentication -->

## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Files } from "@wingspan/files";

(async () => {
    const sdk = new Files({
        bearerAuth: "",
    });

    const res = await sdk.deleteFilesMemberPrivateId({
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->

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
