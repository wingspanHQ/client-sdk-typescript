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
```typescript
import { Files } from "@wingspan/files";

(async () => {
    const sdk = new Files();

    const res = await sdk.files.deleteFilesMemberPrivateId({
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
