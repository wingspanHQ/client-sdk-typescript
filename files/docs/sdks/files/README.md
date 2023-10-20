# Files SDK


## Overview

Wingspan Files API: Files

### Available Operations

* [deleteFilesMemberPrivateId](#deletefilesmemberprivateid) - Remove a Specific Private File
* [deleteFilesMemberPublicId](#deletefilesmemberpublicid) - Remove Member's Public File
* [deleteFilesTemplateId](#deletefilestemplateid) - Remove a Specific E-signature Document Template
* [getFilesDocument](#getfilesdocument) - Retrieve All Documents
* [getFilesDocumentId](#getfilesdocumentid) - Retrieve Specific Document Details
* [getFilesDocumentIdSaveFiles](#getfilesdocumentidsavefiles) - Retrieve E-Signed Documents as PDF
* [getFilesDocumentIdSigningUrls](#getfilesdocumentidsigningurls) - Obtain URLs for Document Signing
* [getFilesMemberPrivate](#getfilesmemberprivate) - Fetch a List of All Private Files for the Member
* [getFilesMemberPrivateId](#getfilesmemberprivateid) - Retrieve Specific Private File Details
* [getFilesMemberPrivateIdDownload](#getfilesmemberprivateiddownload) - Download a Member's Private File
* [getFilesMemberPublic](#getfilesmemberpublic) - Retrieve List of Member's Public Files
* [getFilesMemberPublicId](#getfilesmemberpublicid) - Fetch Specific Public File Details
* [getFilesMemberPublicIdDownload](#getfilesmemberpubliciddownload) - Download a Specific Public File
* [getFilesMemberPublicIdSummary](#getfilesmemberpublicidsummary) - Retrieve Summary of a Specific Public File
* [getFilesTemplate](#getfilestemplate) - Retrieve All E-signature Document Templates
* [getFilesTemplateId](#getfilestemplateid) - Retrieve Specific E-signature Document Template Details
* [patchFilesMemberPrivateId](#patchfilesmemberprivateid) - Modify Specific Private File's Metadata
* [patchFilesMemberPublicId](#patchfilesmemberpublicid) - Update Member's Public File
* [postFilesMemberPrivate](#postfilesmemberprivate) - Generate Entry for a New Private File
* [postFilesMemberPrivateUpload](#postfilesmemberprivateupload) - Upload a Private File
* [postFilesMemberPublic](#postfilesmemberpublic) - Initialize Public File Creation
* [postFilesMemberPublicUpload](#postfilesmemberpublicupload) - Upload Publicly Viewable File
* [postFilesTemplate](#postfilestemplate) - Create a New E-signature Document Template

## deleteFilesMemberPrivateId

Permanently deletes a specific private file associated with the provided ID from the system, ensuring it cannot be retrieved again.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.deleteFilesMemberPrivateId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DeleteFilesMemberPrivateIdRequest](../../models/operations/deletefilesmemberprivateidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DeleteFilesMemberPrivateIdResponse](../../models/operations/deletefilesmemberprivateidresponse.md)>**


## deleteFilesMemberPublicId

Deletes a specific publicly viewable file owned by the member using its unique identifier.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.deleteFilesMemberPublicId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.DeleteFilesMemberPublicIdRequest](../../models/operations/deletefilesmemberpublicidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeleteFilesMemberPublicIdResponse](../../models/operations/deletefilesmemberpublicidresponse.md)>**


## deleteFilesTemplateId

Deletes a specified e-signature document template from the system, preventing its future use for document requirements.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.deleteFilesTemplateId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteFilesTemplateIdRequest](../../models/operations/deletefilestemplateidrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteFilesTemplateIdResponse](../../models/operations/deletefilestemplateidresponse.md)>**


## getFilesDocument

Fetches a list of all stored documents available to the requester. This can be useful for obtaining a comprehensive overview of documents in the system.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesDocument();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetFilesDocumentResponse](../../models/operations/getfilesdocumentresponse.md)>**


## getFilesDocumentId

Fetches detailed information of a specific document using its unique identifier. This provides a more granular view of an individual document.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesDocumentId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetFilesDocumentIdRequest](../../models/operations/getfilesdocumentidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetFilesDocumentIdResponse](../../models/operations/getfilesdocumentidresponse.md)>**


## getFilesDocumentIdSaveFiles

Fetches e-signed documents associated with the given ID, and saves them as PDFs in the file vault for secure storage and access.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesDocumentIdSaveFiles({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetFilesDocumentIdSaveFilesRequest](../../models/operations/getfilesdocumentidsavefilesrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetFilesDocumentIdSaveFilesResponse](../../models/operations/getfilesdocumentidsavefilesresponse.md)>**


## getFilesDocumentIdSigningUrls

Retrieves the signing URLs associated with a specific document, facilitating electronic signing or verification processes.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesDocumentIdSigningUrls({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetFilesDocumentIdSigningUrlsRequest](../../models/operations/getfilesdocumentidsigningurlsrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetFilesDocumentIdSigningUrlsResponse](../../models/operations/getfilesdocumentidsigningurlsresponse.md)>**


## getFilesMemberPrivate

Retrieves a list of all private files associated with the member. This includes details such as file name, type, size, and date uploaded.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesMemberPrivate();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetFilesMemberPrivateResponse](../../models/operations/getfilesmemberprivateresponse.md)>**


## getFilesMemberPrivateId

Fetches the details of a specific private file associated with the given ID, ensuring that only authorized members can access its information.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesMemberPrivateId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetFilesMemberPrivateIdRequest](../../models/operations/getfilesmemberprivateidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetFilesMemberPrivateIdResponse](../../models/operations/getfilesmemberprivateidresponse.md)>**


## getFilesMemberPrivateIdDownload

Downloads a member's private file, ensuring secure and exclusive access to the specified content.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesMemberPrivateIdDownload({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetFilesMemberPrivateIdDownloadRequest](../../models/operations/getfilesmemberprivateiddownloadrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetFilesMemberPrivateIdDownloadResponse](../../models/operations/getfilesmemberprivateiddownloadresponse.md)>**


## getFilesMemberPublic

Fetches a list of files that are publicly viewable and owned by the member.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesMemberPublic();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetFilesMemberPublicResponse](../../models/operations/getfilesmemberpublicresponse.md)>**


## getFilesMemberPublicId

Retrieves details of a specific publicly viewable file owned by the member using its unique identifier.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesMemberPublicId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetFilesMemberPublicIdRequest](../../models/operations/getfilesmemberpublicidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetFilesMemberPublicIdResponse](../../models/operations/getfilesmemberpublicidresponse.md)>**


## getFilesMemberPublicIdDownload

Initiates a download for the specified public file, allowing members to access and save the file to their local device.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesMemberPublicIdDownload({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetFilesMemberPublicIdDownloadRequest](../../models/operations/getfilesmemberpubliciddownloadrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetFilesMemberPublicIdDownloadResponse](../../models/operations/getfilesmemberpubliciddownloadresponse.md)>**


## getFilesMemberPublicIdSummary

Fetches a concise summary of the specified public file, which includes meta-information like file name, type, size, and date modified.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesMemberPublicIdSummary({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetFilesMemberPublicIdSummaryRequest](../../models/operations/getfilesmemberpublicidsummaryrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetFilesMemberPublicIdSummaryResponse](../../models/operations/getfilesmemberpublicidsummaryresponse.md)>**


## getFilesTemplate

Fetches a list of all stored e-signature document templates, providing an overview of available templates for document requirements.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesTemplate();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetFilesTemplateResponse](../../models/operations/getfilestemplateresponse.md)>**


## getFilesTemplateId

Fetches detailed metadata and content of a particular document e-signature template using its unique identifier.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.getFilesTemplateId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetFilesTemplateIdRequest](../../models/operations/getfilestemplateidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetFilesTemplateIdResponse](../../models/operations/getfilestemplateidresponse.md)>**


## patchFilesMemberPrivateId

Updates the metadata or other non-content related information of a specific private file associated with the provided ID.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.patchFilesMemberPrivateId({
    fileRequest: {
      filename: "borders_protocol.html",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PatchFilesMemberPrivateIdRequest](../../models/operations/patchfilesmemberprivateidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PatchFilesMemberPrivateIdResponse](../../models/operations/patchfilesmemberprivateidresponse.md)>**


## patchFilesMemberPublicId

Allows for modifications or updates to the existing public file owned by the member using its unique identifier.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.patchFilesMemberPublicId({
    fileRequest: {
      filename: "global_leverage.mpg",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchFilesMemberPublicIdRequest](../../models/operations/patchfilesmemberpublicidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchFilesMemberPublicIdResponse](../../models/operations/patchfilesmemberpublicidresponse.md)>**


## postFilesMemberPrivate

Creates a new entry in the system for a private file. This does not upload the file, but prepares the system to receive a file for the given entry.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.postFilesMemberPrivate();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostFilesMemberPrivateResponse](../../models/operations/postfilesmemberprivateresponse.md)>**


## postFilesMemberPrivateUpload

Provides a mechanism for members to securely upload private files to the platform. These files are not accessible to other members or the public.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.postFilesMemberPrivateUpload();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostFilesMemberPrivateUploadResponse](../../models/operations/postfilesmemberprivateuploadresponse.md)>**


## postFilesMemberPublic

Begin the process of creating a new public file entry for a member, usually followed by an upload action.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.postFilesMemberPublic();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostFilesMemberPublicResponse](../../models/operations/postfilesmemberpublicresponse.md)>**


## postFilesMemberPublicUpload

Allows members to upload files that will be publicly viewable.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.postFilesMemberPublicUpload();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostFilesMemberPublicUploadResponse](../../models/operations/postfilesmemberpublicuploadresponse.md)>**


## postFilesTemplate

Uploads and registers a new e-signature document template, allowing users to start the issuing document and eligibility requirements for Collaborators.

### Example Usage

```typescript
import { Files } from "@wingspan/files";
import { TemplateCreateRequestPurpose, TemplateCreateRequestRoles } from "@wingspan/files/dist/sdk/models/shared";

(async() => {
  const sdk = new Files();

  const res = await sdk.files.postFilesTemplate({
    fileId: "chase",
    purpose: TemplateCreateRequestPurpose.OnboardCollaborator,
    roles: [
      TemplateCreateRequestRoles.Client,
    ],
    title: "Midland",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.TemplateCreateRequest](../../models/shared/templatecreaterequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.PostFilesTemplateResponse](../../models/operations/postfilestemplateresponse.md)>**

