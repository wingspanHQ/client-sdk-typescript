# Files SDK


## Overview

Wingspan Files API: Files

### Available Operations

* [deleteFilesMemberPrivateId](#deletefilesmemberprivateid) - Remove a Specific Private File
* [deleteFilesMemberPublicId](#deletefilesmemberpublicid) - Remove Member's Public File
* [deleteFilesTemplateId](#deletefilestemplateid) - Remove a Specific Document Template
* [getFilesDocument](#getfilesdocument) - Retrieve All Documents
* [getFilesDocumentId](#getfilesdocumentid) - Retrieve Specific Document Details
* [getFilesDocumentIdSaveFiles](#getfilesdocumentidsavefiles) - Retrieve Latest E-Signed Documents as PDF
* [getFilesDocumentIdSigningUrls](#getfilesdocumentidsigningurls) - Obtain URLs for Document Signing
* [getFilesMemberPrivate](#getfilesmemberprivate) - Fetch a List of All Private Files for the Member
* [getFilesMemberPrivateId](#getfilesmemberprivateid) - Retrieve Specific Private File Details
* [getFilesMemberPrivateIdDownload](#getfilesmemberprivateiddownload) - Download a Member's Private File
* [getFilesMemberPublic](#getfilesmemberpublic) - Retrieve List of Member's Public Files
* [getFilesMemberPublicId](#getfilesmemberpublicid) - Fetch Specific Public File Details
* [getFilesMemberPublicIdDownload](#getfilesmemberpubliciddownload) - Download a Specific Public File
* [getFilesMemberPublicIdSummary](#getfilesmemberpublicidsummary) - Retrieve Summary of a Specific Public File
* [getFilesTemplate](#getfilestemplate) - Retrieve All Document Templates
* [getFilesTemplateId](#getfilestemplateid) - Retrieve Specific Document Template Details
* [patchFilesMemberPrivateId](#patchfilesmemberprivateid) - Modify Specific Private File's Metadata
* [patchFilesMemberPublicId](#patchfilesmemberpublicid) - Update Member's Public File
* [postFilesMemberPrivate](#postfilesmemberprivate) - Generate Entry for a New Private File
* [postFilesMemberPrivateUpload](#postfilesmemberprivateupload) - Upload a Private File
* [postFilesMemberPublic](#postfilesmemberpublic) - Initialize Public File Creation
* [postFilesMemberPublicUpload](#postfilesmemberpublicupload) - Upload Publicly Viewable File
* [postFilesTemplate](#postfilestemplate) - Create a New Document Template

## deleteFilesMemberPrivateId

Remove a Specific Private File

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

Remove Member's Public File

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

Remove a Specific Document Template

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

Retrieve All Documents

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

Retrieve Specific Document Details

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

Retrieve Latest E-Signed Documents as PDF

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

Obtain URLs for Document Signing

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

Fetch a List of All Private Files for the Member

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

Retrieve Specific Private File Details

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

Download a Member's Private File

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

Retrieve List of Member's Public Files

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

Fetch Specific Public File Details

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

Download a Specific Public File

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

Retrieve Summary of a Specific Public File

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

Retrieve All Document Templates

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

Retrieve Specific Document Template Details

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

Modify Specific Private File's Metadata

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

Update Member's Public File

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

Generate Entry for a New Private File

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

Upload a Private File

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

Initialize Public File Creation

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

Upload Publicly Viewable File

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

Create a New Document Template

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

