# CustomFieldManagement
(*customFieldManagement*)

## Overview

Focuses on endpoints for managing custom fields related to payments and collaborators.

### Available Operations

* [deletePaymentsCustomFieldsId](#deletepaymentscustomfieldsid) - Remove a Specific Custom Field
* [getPaymentsCustomFields](#getpaymentscustomfields) - Retrieve All Custom Fields
* [getPaymentsCustomFieldsId](#getpaymentscustomfieldsid) - Fetch Details of a Specific Custom Field
* [patchPaymentsCustomFieldsId](#patchpaymentscustomfieldsid) - Modify Details of a Specific Custom Field
* [postPaymentsCustomFields](#postpaymentscustomfields) - Add a New Custom Field

## deletePaymentsCustomFieldsId

Permanently delete a custom field from the system based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.customFieldManagement.deletePaymentsCustomFieldsId({
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
| `request`                                                                                                            | [operations.DeletePaymentsCustomFieldsIdRequest](../../sdk/models/operations/deletepaymentscustomfieldsidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeletePaymentsCustomFieldsIdResponse](../../sdk/models/operations/deletepaymentscustomfieldsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCustomFields

Obtain a list of all user-defined custom fields associated with payments.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.customFieldManagement.getPaymentsCustomFields();

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

**Promise<[operations.GetPaymentsCustomFieldsResponse](../../sdk/models/operations/getpaymentscustomfieldsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCustomFieldsId

Retrieve detailed information for a custom field based on its unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.customFieldManagement.getPaymentsCustomFieldsId({
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
| `request`                                                                                                      | [operations.GetPaymentsCustomFieldsIdRequest](../../sdk/models/operations/getpaymentscustomfieldsidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetPaymentsCustomFieldsIdResponse](../../sdk/models/operations/getpaymentscustomfieldsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsCustomFieldsId

Update specific attributes or data for an existing custom field.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AdditionalDataUpdateRequestResourceType, AdditionalDataUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.customFieldManagement.patchPaymentsCustomFieldsId({
    additionalDataUpdateRequest: {},
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
| `request`                                                                                                          | [operations.PatchPaymentsCustomFieldsIdRequest](../../sdk/models/operations/patchpaymentscustomfieldsidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchPaymentsCustomFieldsIdResponse](../../sdk/models/operations/patchpaymentscustomfieldsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCustomFields

Define a new custom field for payments using additional data provided.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { ResourceType, TypeT } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.customFieldManagement.postPaymentsCustomFields({
    key: "<key>",
    name: "string",
    required: false,
    resourceType: ResourceType.LineItem,
    type: TypeT.String,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.AdditionalData](../../sdk/models/shared/additionaldata.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.PostPaymentsCustomFieldsResponse](../../sdk/models/operations/postpaymentscustomfieldsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
