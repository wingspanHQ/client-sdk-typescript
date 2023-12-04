# Deprecated
(*deprecated*)

## Overview

Deprecated Endpoints.

### Available Operations

* [deletePaymentsBankingInstantPayout](#deletepaymentsbankinginstantpayout) - Deprecated Remove Instant Payout Configuration
* [~~deletePaymentsCollaboratorSettingsAdditionalDataId~~](#deletepaymentscollaboratorsettingsadditionaldataid) - Erase a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [getPaymentsBankingInstantPayout](#getpaymentsbankinginstantpayout) - Deprecated Retrieve Instant Payout Information
* [~~getPaymentsCollaboratorSettingsAdditionalData~~](#getpaymentscollaboratorsettingsadditionaldata) - Retrieve All Collaborator-Member Custom Data Points :warning: **Deprecated**
* [~~getPaymentsCollaboratorSettingsAdditionalDataId~~](#getpaymentscollaboratorsettingsadditionaldataid) - Retrieve Specific Collaborator Custom Data :warning: **Deprecated**
* [~~patchPaymentsCollaboratorSettingsAdditionalDataId~~](#patchpaymentscollaboratorsettingsadditionaldataid) - Modify a Specific Collaborator-Member Custom Data :warning: **Deprecated**
* [postPaymentsBankingInstantPayout](#postpaymentsbankinginstantpayout) - Deprecated Set Up Instant Payout Configuration
* [~~postPaymentsCollaboratorSettingsAdditionalData~~](#postpaymentscollaboratorsettingsadditionaldata) - Register New Custom Data for Collaborator-Member Relationship :warning: **Deprecated**

## deletePaymentsBankingInstantPayout

Delete the existing instant payout configuration, preventing any further instant payouts unless reconfigured.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.deprecated.deletePaymentsBankingInstantPayout();

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

**Promise<[operations.DeletePaymentsBankingInstantPayoutResponse](../../sdk/models/operations/deletepaymentsbankinginstantpayoutresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~deletePaymentsCollaboratorSettingsAdditionalDataId~~

[Deprecated - use /payments/custom-fields] Remove a specific custom data point, eliminating the additional details provided about a collaborator-member relationship.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.deprecated.deletePaymentsCollaboratorSettingsAdditionalDataId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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

## getPaymentsBankingInstantPayout

Fetch detailed information about the current status and details of instant payouts configured in the system.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.deprecated.getPaymentsBankingInstantPayout();

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

**Promise<[operations.GetPaymentsBankingInstantPayoutResponse](../../sdk/models/operations/getpaymentsbankinginstantpayoutresponse.md)>**
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

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.deprecated.getPaymentsCollaboratorSettingsAdditionalData();

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

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.deprecated.getPaymentsCollaboratorSettingsAdditionalDataId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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

## ~~patchPaymentsCollaboratorSettingsAdditionalDataId~~

[Deprecated - use /payments/custom-fields] Update details or attributes of an existing custom data point associated with the relationship between a collaborator and a member.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AdditionalDataUpdateRequestResourceType, AdditionalDataUpdateRequestType } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.deprecated.patchPaymentsCollaboratorSettingsAdditionalDataId({
    additionalDataUpdateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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

## postPaymentsBankingInstantPayout

Configure a new instant payout setting, specifying details like amount, frequency, and destination.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.deprecated.postPaymentsBankingInstantPayout({
    externalPayoutAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.InstantPayoutRequest](../../sdk/models/shared/instantpayoutrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPaymentsBankingInstantPayoutResponse](../../sdk/models/operations/postpaymentsbankinginstantpayoutresponse.md)>**
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

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.deprecated.postPaymentsCollaboratorSettingsAdditionalData({
    key: "<key>",
    name: "string",
    required: false,
    resourceType: ResourceType.LineItem,
    type: TypeT.String,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
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
