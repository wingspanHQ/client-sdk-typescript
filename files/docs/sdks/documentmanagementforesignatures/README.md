# DocumentManagementForESignatures
(*documentManagementForESignatures*)

## Overview

These endpoints cater to fetching, storing, and managing documents related to electronic signatures, including retrieval of signing URLs and saving e-signed documents.

### Available Operations

* [getFilesDocument](#getfilesdocument) - Retrieve All Documents
* [getFilesDocumentId](#getfilesdocumentid) - Retrieve Specific Document Details
* [getFilesDocumentIdSaveFiles](#getfilesdocumentidsavefiles) - Retrieve E-Signed Documents as PDF
* [getFilesDocumentIdSigningUrls](#getfilesdocumentidsigningurls) - Obtain URLs for Document Signing

## getFilesDocument

Fetches a list of all stored documents available to the requester. This can be useful for obtaining a comprehensive overview of documents in the system.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentManagementForESignatures.getFilesDocument();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetFilesDocumentResponse](../../sdk/models/operations/getfilesdocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getFilesDocumentId

Fetches detailed information of a specific document using its unique identifier. This provides a more granular view of an individual document.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentManagementForESignatures.getFilesDocumentId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetFilesDocumentIdRequest](../../sdk/models/operations/getfilesdocumentidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetFilesDocumentIdResponse](../../sdk/models/operations/getfilesdocumentidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getFilesDocumentIdSaveFiles

Fetches e-signed documents associated with the given ID, and saves them as PDFs in the file vault for secure storage and access.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentManagementForESignatures.getFilesDocumentIdSaveFiles({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetFilesDocumentIdSaveFilesRequest](../../sdk/models/operations/getfilesdocumentidsavefilesrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetFilesDocumentIdSaveFilesResponse](../../sdk/models/operations/getfilesdocumentidsavefilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getFilesDocumentIdSigningUrls

Retrieves the signing URLs associated with a specific document, facilitating electronic signing or verification processes.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.documentManagementForESignatures.getFilesDocumentIdSigningUrls({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetFilesDocumentIdSigningUrlsRequest](../../sdk/models/operations/getfilesdocumentidsigningurlsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetFilesDocumentIdSigningUrlsResponse](../../sdk/models/operations/getfilesdocumentidsigningurlsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
