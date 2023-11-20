# Payments SDK


## Overview

Wingspan Payments API: Payments

### Available Operations

* [~~deletePaymentsCollaboratorSettingsAdditionalDataId~~](#deletepaymentscollaboratorsettingsadditionaldataid) - Erase a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [~~getPaymentsCollaboratorSettingsAdditionalData~~](#getpaymentscollaboratorsettingsadditionaldata) - Retrieve All Collaborator-Member Custom Data Points :warning: **Deprecated**
* [~~getPaymentsCollaboratorSettingsAdditionalDataId~~](#getpaymentscollaboratorsettingsadditionaldataid) - Retrieve Specific Collaborator Custom Data :warning: **Deprecated**
* [getPaymentsMcc](#getpaymentsmcc) - Retrieve Merchant Category Codes (MCC)
* [getPaymentsV2Client](#getpaymentsv2client) - Retrieve All Clients (Version 2)
* [getPaymentsV2ClientClientId](#getpaymentsv2clientclientid) - Retrieve Specific Client Details (Version 2)
* [getPaymentsV2Collaborator](#getpaymentsv2collaborator) - Retrieve All Collaborators (Version 2)
* [getPaymentsV2CollaboratorMemberId](#getpaymentsv2collaboratormemberid) - Retrieve Specific Collaborator Details (Version 2)
* [~~patchPaymentsCollaboratorSettingsAdditionalDataId~~](#patchpaymentscollaboratorsettingsadditionaldataid) - Modify a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [~~postPaymentsCollaboratorSettingsAdditionalData~~](#postpaymentscollaboratorsettingsadditionaldata) - Register New Custom Data for Collaborator-Member Relationship :warning: **Deprecated**

## ~~deletePaymentsCollaboratorSettingsAdditionalDataId~~

[Deprecated - use /payments/custom-fields] Remove a specific custom data point, eliminating the additional details provided about a collaborator-member relationship.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.deletePaymentsCollaboratorSettingsAdditionalDataId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                        | [operations.DeletePaymentsCollaboratorSettingsAdditionalDataIdRequest](../../sdk/models/operations/deletepaymentscollaboratorsettingsadditionaldataidrequest.md) | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


### Response

**Promise<[operations.DeletePaymentsCollaboratorSettingsAdditionalDataIdResponse](../../sdk/models/operations/deletepaymentscollaboratorsettingsadditionaldataidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~getPaymentsCollaboratorSettingsAdditionalData~~

[Deprecated - use /payments/custom-fields] Fetch all custom data fields that are associated with the memberClient objects, giving insight into additional details between collaborators and members.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.getPaymentsCollaboratorSettingsAdditionalData();

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

**Promise<[operations.GetPaymentsCollaboratorSettingsAdditionalDataResponse](../../sdk/models/operations/getpaymentscollaboratorsettingsadditionaldataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~getPaymentsCollaboratorSettingsAdditionalDataId~~

Deprecated - use /payments/custom-fields/:id

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.getPaymentsCollaboratorSettingsAdditionalDataId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.GetPaymentsCollaboratorSettingsAdditionalDataIdRequest](../../sdk/models/operations/getpaymentscollaboratorsettingsadditionaldataidrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetPaymentsCollaboratorSettingsAdditionalDataIdResponse](../../sdk/models/operations/getpaymentscollaboratorsettingsadditionaldataidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsMcc

This endpoint provides a comprehensive list of available Merchant Category Codes (MCC) which are used to classify businesses by the type of services or goods they provide.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.getPaymentsMcc();

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

**Promise<[operations.GetPaymentsMccResponse](../../sdk/models/operations/getpaymentsmccresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsV2Client

Fetches a comprehensive list of clients formatted in the V2 standard, providing an overview of all client data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.getPaymentsV2Client();

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

**Promise<[operations.GetPaymentsV2ClientResponse](../../sdk/models/operations/getpaymentsv2clientresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsV2ClientClientId

Fetches detailed information of a specific client, identified by the clientId, in the V2 format.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.getPaymentsV2ClientClientId({
    clientId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetPaymentsV2ClientClientIdRequest](../../sdk/models/operations/getpaymentsv2clientclientidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetPaymentsV2ClientClientIdResponse](../../sdk/models/operations/getpaymentsv2clientclientidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsV2Collaborator

Fetches a comprehensive list of collaborators formatted in the V2 standard, providing an overview of all collaborator data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.getPaymentsV2Collaborator();

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

**Promise<[operations.GetPaymentsV2CollaboratorResponse](../../sdk/models/operations/getpaymentsv2collaboratorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsV2CollaboratorMemberId

Fetches detailed information of a specific collaborator, identified by the memberId, in the V2 format.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.getPaymentsV2CollaboratorMemberId({
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetPaymentsV2CollaboratorMemberIdRequest](../../sdk/models/operations/getpaymentsv2collaboratormemberidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetPaymentsV2CollaboratorMemberIdResponse](../../sdk/models/operations/getpaymentsv2collaboratormemberidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~patchPaymentsCollaboratorSettingsAdditionalDataId~~

[Deprecated - use /payments/custom-fields] Update details or attributes of an existing custom data point associated with the relationship between a collaborator and a member.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AdditionalDataUpdateRequestResourceType, AdditionalDataUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.patchPaymentsCollaboratorSettingsAdditionalDataId({
    additionalDataUpdateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.PatchPaymentsCollaboratorSettingsAdditionalDataIdRequest](../../sdk/models/operations/patchpaymentscollaboratorsettingsadditionaldataidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.PatchPaymentsCollaboratorSettingsAdditionalDataIdResponse](../../sdk/models/operations/patchpaymentscollaboratorsettingsadditionaldataidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~postPaymentsCollaboratorSettingsAdditionalData~~

[Deprecated - use /payments/custom-fields] Create custom fields that can be associated with the memberClient object to provide extra details about the relationship between a collaborator and a member.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { ResourceType, TypeT } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.postPaymentsCollaboratorSettingsAdditionalData({
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

**Promise<[operations.PostPaymentsCollaboratorSettingsAdditionalDataResponse](../../sdk/models/operations/postpaymentscollaboratorsettingsadditionaldataresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
