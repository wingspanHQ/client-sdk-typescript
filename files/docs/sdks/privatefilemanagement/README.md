# PrivateFileManagement
(*privateFileManagement*)

## Overview

Endpoints for managing private files that are only accessible to specific members, covering actions like uploading, listing, fetching details, and deleting private files

### Available Operations

* [deleteFilesMemberPrivateId](#deletefilesmemberprivateid) - Remove a Specific Private File
* [getFilesMemberPrivate](#getfilesmemberprivate) - Fetch a List of All Private Files for the Member
* [getFilesMemberPrivateId](#getfilesmemberprivateid) - Retrieve Specific Private File Details
* [getFilesMemberPrivateIdDownload](#getfilesmemberprivateiddownload) - Download a Member's Private File
* [patchFilesMemberPrivateId](#patchfilesmemberprivateid) - Modify Specific Private File's Metadata
* [postFilesMemberPrivate](#postfilesmemberprivate) - Generate Entry for a New Private File
* [postFilesMemberPrivateUpload](#postfilesmemberprivateupload) - Upload a Private File

## deleteFilesMemberPrivateId

Permanently deletes a specific private file associated with the provided ID from the system, ensuring it cannot be retrieved again.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.privateFileManagement.deleteFilesMemberPrivateId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteFilesMemberPrivateIdRequest](../../sdk/models/operations/deletefilesmemberprivateidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteFilesMemberPrivateIdResponse](../../sdk/models/operations/deletefilesmemberprivateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getFilesMemberPrivate

Retrieves a list of all private files associated with the member. This includes details such as file name, type, size, and date uploaded.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.privateFileManagement.getFilesMemberPrivate();

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

**Promise<[operations.GetFilesMemberPrivateResponse](../../sdk/models/operations/getfilesmemberprivateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getFilesMemberPrivateId

Fetches the details of a specific private file associated with the given ID, ensuring that only authorized members can access its information.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.privateFileManagement.getFilesMemberPrivateId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetFilesMemberPrivateIdRequest](../../sdk/models/operations/getfilesmemberprivateidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetFilesMemberPrivateIdResponse](../../sdk/models/operations/getfilesmemberprivateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getFilesMemberPrivateIdDownload

Downloads a member's private file, ensuring secure and exclusive access to the specified content.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.privateFileManagement.getFilesMemberPrivateIdDownload({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GetFilesMemberPrivateIdDownloadRequest](../../sdk/models/operations/getfilesmemberprivateiddownloadrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetFilesMemberPrivateIdDownloadResponse](../../sdk/models/operations/getfilesmemberprivateiddownloadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchFilesMemberPrivateId

Updates the metadata or other non-content related information of a specific private file associated with the provided ID.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.privateFileManagement.patchFilesMemberPrivateId({
    fileRequest: {
      filename: "borders_protocol.html",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PatchFilesMemberPrivateIdRequest](../../sdk/models/operations/patchfilesmemberprivateidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PatchFilesMemberPrivateIdResponse](../../sdk/models/operations/patchfilesmemberprivateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postFilesMemberPrivate

Creates a new entry in the system for a private file. This does not upload the file, but prepares the system to receive a file for the given entry.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.privateFileManagement.postFilesMemberPrivate();

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

**Promise<[operations.PostFilesMemberPrivateResponse](../../sdk/models/operations/postfilesmemberprivateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postFilesMemberPrivateUpload

Provides a mechanism for members to securely upload private files to the platform. These files are not accessible to other members or the public.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.privateFileManagement.postFilesMemberPrivateUpload();

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

**Promise<[operations.PostFilesMemberPrivateUploadResponse](../../sdk/models/operations/postfilesmemberprivateuploadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
