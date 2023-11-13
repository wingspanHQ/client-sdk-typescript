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
| errors.SDKError | 400-600         | */*             |

## deleteFilesMemberPublicId

Deletes a specific publicly viewable file owned by the member using its unique identifier.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.deleteFilesMemberPublicId({
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
| `request`                                                                                                      | [operations.DeleteFilesMemberPublicIdRequest](../../sdk/models/operations/deletefilesmemberpublicidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteFilesMemberPublicIdResponse](../../sdk/models/operations/deletefilesmemberpublicidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteFilesTemplateId

Deletes a specified e-signature document template from the system, preventing its future use for document requirements.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.deleteFilesTemplateId({
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
| `request`                                                                                              | [operations.DeleteFilesTemplateIdRequest](../../sdk/models/operations/deletefilestemplateidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeleteFilesTemplateIdResponse](../../sdk/models/operations/deletefilestemplateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFilesDocument

Fetches a list of all stored documents available to the requester. This can be useful for obtaining a comprehensive overview of documents in the system.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesDocument();

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

**Promise<[operations.GetFilesDocumentResponse](../../sdk/models/operations/getfilesdocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFilesDocumentId

Fetches detailed information of a specific document using its unique identifier. This provides a more granular view of an individual document.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesDocumentId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |

## getFilesDocumentIdSaveFiles

Fetches e-signed documents associated with the given ID, and saves them as PDFs in the file vault for secure storage and access.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesDocumentIdSaveFiles({
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
| `request`                                                                                                          | [operations.GetFilesDocumentIdSaveFilesRequest](../../sdk/models/operations/getfilesdocumentidsavefilesrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetFilesDocumentIdSaveFilesResponse](../../sdk/models/operations/getfilesdocumentidsavefilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFilesDocumentIdSigningUrls

Retrieves the signing URLs associated with a specific document, facilitating electronic signing or verification processes.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesDocumentIdSigningUrls({
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
| `request`                                                                                                              | [operations.GetFilesDocumentIdSigningUrlsRequest](../../sdk/models/operations/getfilesdocumentidsigningurlsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetFilesDocumentIdSigningUrlsResponse](../../sdk/models/operations/getfilesdocumentidsigningurlsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFilesMemberPrivate

Retrieves a list of all private files associated with the member. This includes details such as file name, type, size, and date uploaded.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesMemberPrivate();

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

**Promise<[operations.GetFilesMemberPrivateResponse](../../sdk/models/operations/getfilesmemberprivateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFilesMemberPrivateId

Fetches the details of a specific private file associated with the given ID, ensuring that only authorized members can access its information.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesMemberPrivateId({
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
| `request`                                                                                                  | [operations.GetFilesMemberPrivateIdRequest](../../sdk/models/operations/getfilesmemberprivateidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetFilesMemberPrivateIdResponse](../../sdk/models/operations/getfilesmemberprivateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFilesMemberPrivateIdDownload

Downloads a member's private file, ensuring secure and exclusive access to the specified content.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesMemberPrivateIdDownload({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
| errors.SDKError | 400-600         | */*             |

## getFilesMemberPublic

Fetches a list of files that are publicly viewable and owned by the member.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesMemberPublic();

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

**Promise<[operations.GetFilesMemberPublicResponse](../../sdk/models/operations/getfilesmemberpublicresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFilesMemberPublicId

Retrieves details of a specific publicly viewable file owned by the member using its unique identifier.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesMemberPublicId({
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
| `request`                                                                                                | [operations.GetFilesMemberPublicIdRequest](../../sdk/models/operations/getfilesmemberpublicidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetFilesMemberPublicIdResponse](../../sdk/models/operations/getfilesmemberpublicidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFilesMemberPublicIdDownload

Initiates a download for the specified public file, allowing members to access and save the file to their local device.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesMemberPublicIdDownload({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetFilesMemberPublicIdDownloadRequest](../../sdk/models/operations/getfilesmemberpubliciddownloadrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetFilesMemberPublicIdDownloadResponse](../../sdk/models/operations/getfilesmemberpubliciddownloadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFilesMemberPublicIdSummary

Fetches a concise summary of the specified public file, which includes meta-information like file name, type, size, and date modified.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesMemberPublicIdSummary({
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
| `request`                                                                                                              | [operations.GetFilesMemberPublicIdSummaryRequest](../../sdk/models/operations/getfilesmemberpublicidsummaryrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetFilesMemberPublicIdSummaryResponse](../../sdk/models/operations/getfilesmemberpublicidsummaryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFilesTemplate

Fetches a list of all stored e-signature document templates, providing an overview of available templates for document requirements.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesTemplate();

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

**Promise<[operations.GetFilesTemplateResponse](../../sdk/models/operations/getfilestemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getFilesTemplateId

Fetches detailed metadata and content of a particular document e-signature template using its unique identifier.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.getFilesTemplateId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetFilesTemplateIdRequest](../../sdk/models/operations/getfilestemplateidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetFilesTemplateIdResponse](../../sdk/models/operations/getfilestemplateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchFilesMemberPrivateId

Updates the metadata or other non-content related information of a specific private file associated with the provided ID.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.patchFilesMemberPrivateId({
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

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PatchFilesMemberPrivateIdRequest](../../sdk/models/operations/patchfilesmemberprivateidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PatchFilesMemberPrivateIdResponse](../../sdk/models/operations/patchfilesmemberprivateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchFilesMemberPublicId

Allows for modifications or updates to the existing public file owned by the member using its unique identifier.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.patchFilesMemberPublicId({
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchFilesMemberPublicIdRequest](../../sdk/models/operations/patchfilesmemberpublicidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchFilesMemberPublicIdResponse](../../sdk/models/operations/patchfilesmemberpublicidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postFilesMemberPrivate

Creates a new entry in the system for a private file. This does not upload the file, but prepares the system to receive a file for the given entry.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.postFilesMemberPrivate();

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

**Promise<[operations.PostFilesMemberPrivateResponse](../../sdk/models/operations/postfilesmemberprivateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postFilesMemberPrivateUpload

Provides a mechanism for members to securely upload private files to the platform. These files are not accessible to other members or the public.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.postFilesMemberPrivateUpload();

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

**Promise<[operations.PostFilesMemberPrivateUploadResponse](../../sdk/models/operations/postfilesmemberprivateuploadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postFilesMemberPublic

Begin the process of creating a new public file entry for a member, usually followed by an upload action.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.postFilesMemberPublic();

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

**Promise<[operations.PostFilesMemberPublicResponse](../../sdk/models/operations/postfilesmemberpublicresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postFilesMemberPublicUpload

Allows members to upload files that will be publicly viewable.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.postFilesMemberPublicUpload();

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

**Promise<[operations.PostFilesMemberPublicUploadResponse](../../sdk/models/operations/postfilesmemberpublicuploadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postFilesTemplate

Uploads and registers a new e-signature document template, allowing users to start the issuing document and eligibility requirements for Collaborators.

### Example Usage

```typescript
import { Files } from "@wingspan/files";
import { Purpose, Roles } from "@wingspan/files/dist/sdk/models/shared";

(async() => {
  const sdk = new Files({
    bearerAuth: "",
  });

  const res = await sdk.postFilesTemplate({
    fileId: "string",
    purpose: Purpose.OnboardCollaborator,
    roles: [
      Roles.LessThanNilGreaterThan,
    ],
    title: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.TemplateCreateRequest](../../sdk/models/shared/templatecreaterequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.PostFilesTemplateResponse](../../sdk/models/operations/postfilestemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
