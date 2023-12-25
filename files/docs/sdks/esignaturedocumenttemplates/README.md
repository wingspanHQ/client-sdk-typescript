# ESignatureDocumentTemplates
(*eSignatureDocumentTemplates*)

## Overview

Endpoints focused on creating, listing, retrieving, and deleting e-signature document templates.

### Available Operations

* [deleteFilesTemplateId](#deletefilestemplateid) - Remove a Specific E-signature Document Template
* [getFilesTemplate](#getfilestemplate) - Retrieve All E-signature Document Templates
* [getFilesTemplateId](#getfilestemplateid) - Retrieve Specific E-signature Document Template Details
* [postFilesTemplate](#postfilestemplate) - Create a New E-signature Document Template

## deleteFilesTemplateId

Deletes a specified e-signature document template from the system, preventing its future use for document requirements.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.eSignatureDocumentTemplates.deleteFilesTemplateId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
| errors.SDKError | 4xx-5xx         | */*             |

## getFilesTemplate

Fetches a list of all stored e-signature document templates, providing an overview of available templates for document requirements.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.eSignatureDocumentTemplates.getFilesTemplate();

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

**Promise<[operations.GetFilesTemplateResponse](../../sdk/models/operations/getfilestemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getFilesTemplateId

Fetches detailed metadata and content of a particular document e-signature template using its unique identifier.

### Example Usage

```typescript
import { Files } from "@wingspan/files";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.eSignatureDocumentTemplates.getFilesTemplateId({
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
| `request`                                                                                        | [operations.GetFilesTemplateIdRequest](../../sdk/models/operations/getfilestemplateidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetFilesTemplateIdResponse](../../sdk/models/operations/getfilestemplateidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postFilesTemplate

Uploads and registers a new e-signature document template, allowing users to start the issuing document and eligibility requirements for Collaborators.

### Example Usage

```typescript
import { Files } from "@wingspan/files";
import { Purpose, Roles } from "@wingspan/files/dist/sdk/models/shared";

async function run() {
  const sdk = new Files({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.eSignatureDocumentTemplates.postFilesTemplate({
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
}

run();
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
| errors.SDKError | 4xx-5xx         | */*             |
