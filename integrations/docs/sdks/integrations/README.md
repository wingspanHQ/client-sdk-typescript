# Integrations SDK


## Overview

Wingspan Integrations API: Integrations

### Available Operations

* [deleteIntegrationsQuickbooksAccountAssetId](#deleteintegrationsquickbooksaccountassetid) - Delete Quickbooks Account details
* [deleteIntegrationsQuickbooksAccountEquityId](#deleteintegrationsquickbooksaccountequityid) - Delete Quickbooks Account details
* [deleteIntegrationsQuickbooksAccountExpenseId](#deleteintegrationsquickbooksaccountexpenseid) - Delete Quickbooks Account details
* [deleteIntegrationsQuickbooksAccountLiabilityId](#deleteintegrationsquickbooksaccountliabilityid) - Delete Quickbooks Account details
* [deleteIntegrationsQuickbooksAccountRevenueId](#deleteintegrationsquickbooksaccountrevenueid) - Delete Quickbooks Account details
* [deleteIntegrationsQuickbooksCustomerId](#deleteintegrationsquickbookscustomerid) - Delete Quickbooks Customer details
* [deleteIntegrationsQuickbooksItemId](#deleteintegrationsquickbooksitemid) - Delete Quickbooks Item details
* [deleteIntegrationsQuickbooksService](#deleteintegrationsquickbooksservice) - Delete Quickbooks Integration
* [deleteIntegrationsQuickbooksVendorId](#deleteintegrationsquickbooksvendorid) - Delete Quickbooks Vendor details
* [deleteIntegrationsWebhooksPreferenceId](#deleteintegrationswebhookspreferenceid) - Delete Webhooks Preference
* [getIntegrationsQuickbooksAccountAsset](#getintegrationsquickbooksaccountasset) - List Quickbooks Account details
* [getIntegrationsQuickbooksAccountAssetId](#getintegrationsquickbooksaccountassetid) - Get Quickbooks Account details
* [getIntegrationsQuickbooksAccountEquity](#getintegrationsquickbooksaccountequity) - List Quickbooks Account details
* [getIntegrationsQuickbooksAccountEquityId](#getintegrationsquickbooksaccountequityid) - Get Quickbooks Account details
* [getIntegrationsQuickbooksAccountExpense](#getintegrationsquickbooksaccountexpense) - List Quickbooks Account details
* [getIntegrationsQuickbooksAccountExpenseId](#getintegrationsquickbooksaccountexpenseid) - Get Quickbooks Account details
* [getIntegrationsQuickbooksAccountLiability](#getintegrationsquickbooksaccountliability) - List Quickbooks Account details
* [getIntegrationsQuickbooksAccountLiabilityId](#getintegrationsquickbooksaccountliabilityid) - Get Quickbooks Account details
* [getIntegrationsQuickbooksAccountRevenue](#getintegrationsquickbooksaccountrevenue) - List Quickbooks Account details
* [getIntegrationsQuickbooksAccountRevenueId](#getintegrationsquickbooksaccountrevenueid) - Get Quickbooks Account details
* [getIntegrationsQuickbooksCustomer](#getintegrationsquickbookscustomer) - List Quickbooks Customer details
* [getIntegrationsQuickbooksCustomerId](#getintegrationsquickbookscustomerid) - Get Quickbooks Customer details
* [getIntegrationsQuickbooksItem](#getintegrationsquickbooksitem) - List Quickbooks Item details
* [getIntegrationsQuickbooksItemId](#getintegrationsquickbooksitemid) - Get Quickbooks Item details
* [getIntegrationsQuickbooksService](#getintegrationsquickbooksservice) - Get Quickbooks Integration
* [getIntegrationsQuickbooksServiceSyncActivity](#getintegrationsquickbooksservicesyncactivity) - Get Quickbooks Integration Sync Activities
* [getIntegrationsQuickbooksServiceSyncActivityId](#getintegrationsquickbooksservicesyncactivityid) - Get Quickbooks Integration Sync Activity
* [getIntegrationsQuickbooksVendor](#getintegrationsquickbooksvendor) - List Quickbooks Vendor details
* [getIntegrationsQuickbooksVendorId](#getintegrationsquickbooksvendorid) - Get Quickbooks Vendor details
* [getIntegrationsWebhooksEventnames](#getintegrationswebhookseventnames) - List Webhooks Event Names
* [getIntegrationsWebhooksPreference](#getintegrationswebhookspreference) - List Webhooks Preferences
* [getIntegrationsWebhooksPreferenceId](#getintegrationswebhookspreferenceid) - Get Webhooks Preference
* [patchIntegrationsQuickbooksAccountAssetId](#patchintegrationsquickbooksaccountassetid) - Updaet Quickbooks Account details
* [patchIntegrationsQuickbooksAccountEquityId](#patchintegrationsquickbooksaccountequityid) - Updaet Quickbooks Account details
* [patchIntegrationsQuickbooksAccountExpenseId](#patchintegrationsquickbooksaccountexpenseid) - Updaet Quickbooks Account details
* [patchIntegrationsQuickbooksAccountLiabilityId](#patchintegrationsquickbooksaccountliabilityid) - Updaet Quickbooks Account details
* [patchIntegrationsQuickbooksAccountRevenueId](#patchintegrationsquickbooksaccountrevenueid) - Updaet Quickbooks Account details
* [patchIntegrationsQuickbooksCustomerId](#patchintegrationsquickbookscustomerid) - Updaet Quickbooks Customer details
* [patchIntegrationsQuickbooksItemId](#patchintegrationsquickbooksitemid) - Updaet Quickbooks Item details
* [patchIntegrationsQuickbooksService](#patchintegrationsquickbooksservice) - Update Quickbooks Integration Status
* [patchIntegrationsQuickbooksServiceSyncActivityId](#patchintegrationsquickbooksservicesyncactivityid) - Update Quickbooks Integration Sync Activity
* [patchIntegrationsQuickbooksVendorId](#patchintegrationsquickbooksvendorid) - Updaet Quickbooks Vendor details
* [patchIntegrationsWebhooksPreferenceId](#patchintegrationswebhookspreferenceid) - Update Webhooks Preference
* [postIntegrationsQuickbooksAccountAsset](#postintegrationsquickbooksaccountasset) - Retrieve Account from Quickbooks
* [postIntegrationsQuickbooksAccountEquity](#postintegrationsquickbooksaccountequity) - Retrieve Account from Quickbooks
* [postIntegrationsQuickbooksAccountExpense](#postintegrationsquickbooksaccountexpense) - Retrieve Account from Quickbooks
* [postIntegrationsQuickbooksAccountLiability](#postintegrationsquickbooksaccountliability) - Retrieve Account from Quickbooks
* [postIntegrationsQuickbooksAccountRevenue](#postintegrationsquickbooksaccountrevenue) - Retrieve Account from Quickbooks
* [postIntegrationsQuickbooksCustomer](#postintegrationsquickbookscustomer) - Retrieve Customer from Quickbooks
* [postIntegrationsQuickbooksItem](#postintegrationsquickbooksitem) - Retrieve Item from Quickbooks
* [postIntegrationsQuickbooksService](#postintegrationsquickbooksservice) - Create Quickbooks Integration
* [postIntegrationsQuickbooksServiceSyncActivityIdForceSync](#postintegrationsquickbooksservicesyncactivityidforcesync) - Forces a Sync of Object Represented by Quickbooks Integration Sync Activity
* [postIntegrationsQuickbooksVendor](#postintegrationsquickbooksvendor) - Retrieve Vendor from Quickbooks
* [postIntegrationsWebhooksPreference](#postintegrationswebhookspreference) - Create Webhooks Preference

## deleteIntegrationsQuickbooksAccountAssetId

Delete Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.deleteIntegrationsQuickbooksAccountAssetId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.DeleteIntegrationsQuickbooksAccountAssetIdRequest](../../models/operations/deleteintegrationsquickbooksaccountassetidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksAccountAssetIdResponse](../../models/operations/deleteintegrationsquickbooksaccountassetidresponse.md)>**


## deleteIntegrationsQuickbooksAccountEquityId

Delete Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.deleteIntegrationsQuickbooksAccountEquityId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.DeleteIntegrationsQuickbooksAccountEquityIdRequest](../../models/operations/deleteintegrationsquickbooksaccountequityidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksAccountEquityIdResponse](../../models/operations/deleteintegrationsquickbooksaccountequityidresponse.md)>**


## deleteIntegrationsQuickbooksAccountExpenseId

Delete Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.deleteIntegrationsQuickbooksAccountExpenseId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteIntegrationsQuickbooksAccountExpenseIdRequest](../../models/operations/deleteintegrationsquickbooksaccountexpenseidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksAccountExpenseIdResponse](../../models/operations/deleteintegrationsquickbooksaccountexpenseidresponse.md)>**


## deleteIntegrationsQuickbooksAccountLiabilityId

Delete Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.deleteIntegrationsQuickbooksAccountLiabilityId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.DeleteIntegrationsQuickbooksAccountLiabilityIdRequest](../../models/operations/deleteintegrationsquickbooksaccountliabilityidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksAccountLiabilityIdResponse](../../models/operations/deleteintegrationsquickbooksaccountliabilityidresponse.md)>**


## deleteIntegrationsQuickbooksAccountRevenueId

Delete Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.deleteIntegrationsQuickbooksAccountRevenueId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteIntegrationsQuickbooksAccountRevenueIdRequest](../../models/operations/deleteintegrationsquickbooksaccountrevenueidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksAccountRevenueIdResponse](../../models/operations/deleteintegrationsquickbooksaccountrevenueidresponse.md)>**


## deleteIntegrationsQuickbooksCustomerId

Delete Quickbooks Customer details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.deleteIntegrationsQuickbooksCustomerId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.DeleteIntegrationsQuickbooksCustomerIdRequest](../../models/operations/deleteintegrationsquickbookscustomeridrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksCustomerIdResponse](../../models/operations/deleteintegrationsquickbookscustomeridresponse.md)>**


## deleteIntegrationsQuickbooksItemId

Delete Quickbooks Item details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.deleteIntegrationsQuickbooksItemId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.DeleteIntegrationsQuickbooksItemIdRequest](../../models/operations/deleteintegrationsquickbooksitemidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksItemIdResponse](../../models/operations/deleteintegrationsquickbooksitemidresponse.md)>**


## deleteIntegrationsQuickbooksService

Delete Quickbooks Integration

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.deleteIntegrationsQuickbooksService();

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

**Promise<[operations.DeleteIntegrationsQuickbooksServiceResponse](../../models/operations/deleteintegrationsquickbooksserviceresponse.md)>**


## deleteIntegrationsQuickbooksVendorId

Delete Quickbooks Vendor details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.deleteIntegrationsQuickbooksVendorId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.DeleteIntegrationsQuickbooksVendorIdRequest](../../models/operations/deleteintegrationsquickbooksvendoridrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksVendorIdResponse](../../models/operations/deleteintegrationsquickbooksvendoridresponse.md)>**


## deleteIntegrationsWebhooksPreferenceId

Delete Webhooks Preference

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.deleteIntegrationsWebhooksPreferenceId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.DeleteIntegrationsWebhooksPreferenceIdRequest](../../models/operations/deleteintegrationswebhookspreferenceidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.DeleteIntegrationsWebhooksPreferenceIdResponse](../../models/operations/deleteintegrationswebhookspreferenceidresponse.md)>**


## getIntegrationsQuickbooksAccountAsset

List Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksAccountAsset();

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

**Promise<[operations.GetIntegrationsQuickbooksAccountAssetResponse](../../models/operations/getintegrationsquickbooksaccountassetresponse.md)>**


## getIntegrationsQuickbooksAccountAssetId

Get Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksAccountAssetId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetIntegrationsQuickbooksAccountAssetIdRequest](../../models/operations/getintegrationsquickbooksaccountassetidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetIntegrationsQuickbooksAccountAssetIdResponse](../../models/operations/getintegrationsquickbooksaccountassetidresponse.md)>**


## getIntegrationsQuickbooksAccountEquity

List Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksAccountEquity();

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

**Promise<[operations.GetIntegrationsQuickbooksAccountEquityResponse](../../models/operations/getintegrationsquickbooksaccountequityresponse.md)>**


## getIntegrationsQuickbooksAccountEquityId

Get Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksAccountEquityId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.GetIntegrationsQuickbooksAccountEquityIdRequest](../../models/operations/getintegrationsquickbooksaccountequityidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.GetIntegrationsQuickbooksAccountEquityIdResponse](../../models/operations/getintegrationsquickbooksaccountequityidresponse.md)>**


## getIntegrationsQuickbooksAccountExpense

List Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksAccountExpense();

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

**Promise<[operations.GetIntegrationsQuickbooksAccountExpenseResponse](../../models/operations/getintegrationsquickbooksaccountexpenseresponse.md)>**


## getIntegrationsQuickbooksAccountExpenseId

Get Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksAccountExpenseId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetIntegrationsQuickbooksAccountExpenseIdRequest](../../models/operations/getintegrationsquickbooksaccountexpenseidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetIntegrationsQuickbooksAccountExpenseIdResponse](../../models/operations/getintegrationsquickbooksaccountexpenseidresponse.md)>**


## getIntegrationsQuickbooksAccountLiability

List Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksAccountLiability();

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

**Promise<[operations.GetIntegrationsQuickbooksAccountLiabilityResponse](../../models/operations/getintegrationsquickbooksaccountliabilityresponse.md)>**


## getIntegrationsQuickbooksAccountLiabilityId

Get Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksAccountLiabilityId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.GetIntegrationsQuickbooksAccountLiabilityIdRequest](../../models/operations/getintegrationsquickbooksaccountliabilityidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.GetIntegrationsQuickbooksAccountLiabilityIdResponse](../../models/operations/getintegrationsquickbooksaccountliabilityidresponse.md)>**


## getIntegrationsQuickbooksAccountRevenue

List Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksAccountRevenue();

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

**Promise<[operations.GetIntegrationsQuickbooksAccountRevenueResponse](../../models/operations/getintegrationsquickbooksaccountrevenueresponse.md)>**


## getIntegrationsQuickbooksAccountRevenueId

Get Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksAccountRevenueId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetIntegrationsQuickbooksAccountRevenueIdRequest](../../models/operations/getintegrationsquickbooksaccountrevenueidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetIntegrationsQuickbooksAccountRevenueIdResponse](../../models/operations/getintegrationsquickbooksaccountrevenueidresponse.md)>**


## getIntegrationsQuickbooksCustomer

List Quickbooks Customer details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksCustomer();

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

**Promise<[operations.GetIntegrationsQuickbooksCustomerResponse](../../models/operations/getintegrationsquickbookscustomerresponse.md)>**


## getIntegrationsQuickbooksCustomerId

Get Quickbooks Customer details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksCustomerId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetIntegrationsQuickbooksCustomerIdRequest](../../models/operations/getintegrationsquickbookscustomeridrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetIntegrationsQuickbooksCustomerIdResponse](../../models/operations/getintegrationsquickbookscustomeridresponse.md)>**


## getIntegrationsQuickbooksItem

List Quickbooks Item details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksItem();

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

**Promise<[operations.GetIntegrationsQuickbooksItemResponse](../../models/operations/getintegrationsquickbooksitemresponse.md)>**


## getIntegrationsQuickbooksItemId

Get Quickbooks Item details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksItemId({
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
| `request`                                                                                                              | [operations.GetIntegrationsQuickbooksItemIdRequest](../../models/operations/getintegrationsquickbooksitemidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetIntegrationsQuickbooksItemIdResponse](../../models/operations/getintegrationsquickbooksitemidresponse.md)>**


## getIntegrationsQuickbooksService

Get Quickbooks Integration

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksService();

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

**Promise<[operations.GetIntegrationsQuickbooksServiceResponse](../../models/operations/getintegrationsquickbooksserviceresponse.md)>**


## getIntegrationsQuickbooksServiceSyncActivity

Get Quickbooks Integration Sync Activities

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksServiceSyncActivity();

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

**Promise<[operations.GetIntegrationsQuickbooksServiceSyncActivityResponse](../../models/operations/getintegrationsquickbooksservicesyncactivityresponse.md)>**


## getIntegrationsQuickbooksServiceSyncActivityId

Get Quickbooks Integration Sync Activity

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksServiceSyncActivityId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.GetIntegrationsQuickbooksServiceSyncActivityIdRequest](../../models/operations/getintegrationsquickbooksservicesyncactivityidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.GetIntegrationsQuickbooksServiceSyncActivityIdResponse](../../models/operations/getintegrationsquickbooksservicesyncactivityidresponse.md)>**


## getIntegrationsQuickbooksVendor

List Quickbooks Vendor details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksVendor();

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

**Promise<[operations.GetIntegrationsQuickbooksVendorResponse](../../models/operations/getintegrationsquickbooksvendorresponse.md)>**


## getIntegrationsQuickbooksVendorId

Get Quickbooks Vendor details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsQuickbooksVendorId({
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
| `request`                                                                                                                  | [operations.GetIntegrationsQuickbooksVendorIdRequest](../../models/operations/getintegrationsquickbooksvendoridrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetIntegrationsQuickbooksVendorIdResponse](../../models/operations/getintegrationsquickbooksvendoridresponse.md)>**


## getIntegrationsWebhooksEventnames

List Webhooks Event Names

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsWebhooksEventnames();

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

**Promise<[operations.GetIntegrationsWebhooksEventnamesResponse](../../models/operations/getintegrationswebhookseventnamesresponse.md)>**


## getIntegrationsWebhooksPreference

List Webhooks Preferences

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsWebhooksPreference();

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

**Promise<[operations.GetIntegrationsWebhooksPreferenceResponse](../../models/operations/getintegrationswebhookspreferenceresponse.md)>**


## getIntegrationsWebhooksPreferenceId

Get Webhooks Preference

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.getIntegrationsWebhooksPreferenceId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetIntegrationsWebhooksPreferenceIdRequest](../../models/operations/getintegrationswebhookspreferenceidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetIntegrationsWebhooksPreferenceIdResponse](../../models/operations/getintegrationswebhookspreferenceidresponse.md)>**


## patchIntegrationsQuickbooksAccountAssetId

Updaet Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.patchIntegrationsQuickbooksAccountAssetId({
    integrationAccountCreateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PatchIntegrationsQuickbooksAccountAssetIdRequest](../../models/operations/patchintegrationsquickbooksaccountassetidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksAccountAssetIdResponse](../../models/operations/patchintegrationsquickbooksaccountassetidresponse.md)>**


## patchIntegrationsQuickbooksAccountEquityId

Updaet Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.patchIntegrationsQuickbooksAccountEquityId({
    integrationAccountCreateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.PatchIntegrationsQuickbooksAccountEquityIdRequest](../../models/operations/patchintegrationsquickbooksaccountequityidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksAccountEquityIdResponse](../../models/operations/patchintegrationsquickbooksaccountequityidresponse.md)>**


## patchIntegrationsQuickbooksAccountExpenseId

Updaet Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.patchIntegrationsQuickbooksAccountExpenseId({
    integrationAccountCreateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PatchIntegrationsQuickbooksAccountExpenseIdRequest](../../models/operations/patchintegrationsquickbooksaccountexpenseidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksAccountExpenseIdResponse](../../models/operations/patchintegrationsquickbooksaccountexpenseidresponse.md)>**


## patchIntegrationsQuickbooksAccountLiabilityId

Updaet Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.patchIntegrationsQuickbooksAccountLiabilityId({
    integrationAccountCreateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.PatchIntegrationsQuickbooksAccountLiabilityIdRequest](../../models/operations/patchintegrationsquickbooksaccountliabilityidrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksAccountLiabilityIdResponse](../../models/operations/patchintegrationsquickbooksaccountliabilityidresponse.md)>**


## patchIntegrationsQuickbooksAccountRevenueId

Updaet Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.patchIntegrationsQuickbooksAccountRevenueId({
    integrationAccountCreateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PatchIntegrationsQuickbooksAccountRevenueIdRequest](../../models/operations/patchintegrationsquickbooksaccountrevenueidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksAccountRevenueIdResponse](../../models/operations/patchintegrationsquickbooksaccountrevenueidresponse.md)>**


## patchIntegrationsQuickbooksCustomerId

Updaet Quickbooks Customer details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.patchIntegrationsQuickbooksCustomerId({
    integrationCustomerCreateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PatchIntegrationsQuickbooksCustomerIdRequest](../../models/operations/patchintegrationsquickbookscustomeridrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksCustomerIdResponse](../../models/operations/patchintegrationsquickbookscustomeridresponse.md)>**


## patchIntegrationsQuickbooksItemId

Updaet Quickbooks Item details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.patchIntegrationsQuickbooksItemId({
    integrationItemCreateRequest: {},
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
| `request`                                                                                                                  | [operations.PatchIntegrationsQuickbooksItemIdRequest](../../models/operations/patchintegrationsquickbooksitemidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksItemIdResponse](../../models/operations/patchintegrationsquickbooksitemidresponse.md)>**


## patchIntegrationsQuickbooksService

Update Quickbooks Integration Status

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";
import { IntegrationsQuickbooksUpdateRequestSyncStatus } from "@wingspan/integrations/dist/sdk/models/shared";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.patchIntegrationsQuickbooksService({
    defaults: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [shared.IntegrationsQuickbooksUpdateRequest](../../models/shared/integrationsquickbooksupdaterequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksServiceResponse](../../models/operations/patchintegrationsquickbooksserviceresponse.md)>**


## patchIntegrationsQuickbooksServiceSyncActivityId

Update Quickbooks Integration Sync Activity

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.patchIntegrationsQuickbooksServiceSyncActivityId({
    integrationsQuickbooksSyncActivityUpdateRequest: {
      isHidden: false,
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.PatchIntegrationsQuickbooksServiceSyncActivityIdRequest](../../models/operations/patchintegrationsquickbooksservicesyncactivityidrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksServiceSyncActivityIdResponse](../../models/operations/patchintegrationsquickbooksservicesyncactivityidresponse.md)>**


## patchIntegrationsQuickbooksVendorId

Updaet Quickbooks Vendor details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.patchIntegrationsQuickbooksVendorId({
    integrationVendorCreateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PatchIntegrationsQuickbooksVendorIdRequest](../../models/operations/patchintegrationsquickbooksvendoridrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksVendorIdResponse](../../models/operations/patchintegrationsquickbooksvendoridresponse.md)>**


## patchIntegrationsWebhooksPreferenceId

Update Webhooks Preference

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.patchIntegrationsWebhooksPreferenceId({
    webhooksPreferenceUpdateRequest: {
      subscribedEvents: [
        "alarm",
      ],
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PatchIntegrationsWebhooksPreferenceIdRequest](../../models/operations/patchintegrationswebhookspreferenceidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PatchIntegrationsWebhooksPreferenceIdResponse](../../models/operations/patchintegrationswebhookspreferenceidresponse.md)>**


## postIntegrationsQuickbooksAccountAsset

Retrieve Account from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.postIntegrationsQuickbooksAccountAsset({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.IntegrationAccountCreateRequest](../../models/shared/integrationaccountcreaterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PostIntegrationsQuickbooksAccountAssetResponse](../../models/operations/postintegrationsquickbooksaccountassetresponse.md)>**


## postIntegrationsQuickbooksAccountEquity

Retrieve Account from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.postIntegrationsQuickbooksAccountEquity({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.IntegrationAccountCreateRequest](../../models/shared/integrationaccountcreaterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PostIntegrationsQuickbooksAccountEquityResponse](../../models/operations/postintegrationsquickbooksaccountequityresponse.md)>**


## postIntegrationsQuickbooksAccountExpense

Retrieve Account from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.postIntegrationsQuickbooksAccountExpense({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.IntegrationAccountCreateRequest](../../models/shared/integrationaccountcreaterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PostIntegrationsQuickbooksAccountExpenseResponse](../../models/operations/postintegrationsquickbooksaccountexpenseresponse.md)>**


## postIntegrationsQuickbooksAccountLiability

Retrieve Account from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.postIntegrationsQuickbooksAccountLiability({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.IntegrationAccountCreateRequest](../../models/shared/integrationaccountcreaterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PostIntegrationsQuickbooksAccountLiabilityResponse](../../models/operations/postintegrationsquickbooksaccountliabilityresponse.md)>**


## postIntegrationsQuickbooksAccountRevenue

Retrieve Account from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.postIntegrationsQuickbooksAccountRevenue({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.IntegrationAccountCreateRequest](../../models/shared/integrationaccountcreaterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PostIntegrationsQuickbooksAccountRevenueResponse](../../models/operations/postintegrationsquickbooksaccountrevenueresponse.md)>**


## postIntegrationsQuickbooksCustomer

Retrieve Customer from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.postIntegrationsQuickbooksCustomer({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [shared.IntegrationCustomerCreateRequest](../../models/shared/integrationcustomercreaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostIntegrationsQuickbooksCustomerResponse](../../models/operations/postintegrationsquickbookscustomerresponse.md)>**


## postIntegrationsQuickbooksItem

Retrieve Item from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.postIntegrationsQuickbooksItem({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.IntegrationItemCreateRequest](../../models/shared/integrationitemcreaterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostIntegrationsQuickbooksItemResponse](../../models/operations/postintegrationsquickbooksitemresponse.md)>**


## postIntegrationsQuickbooksService

Create Quickbooks Integration

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.postIntegrationsQuickbooksService({
    defaults: {},
    redirectUrl: "Rock",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [shared.IntegrationsQuickbooksCreateRequest](../../models/shared/integrationsquickbookscreaterequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PostIntegrationsQuickbooksServiceResponse](../../models/operations/postintegrationsquickbooksserviceresponse.md)>**


## postIntegrationsQuickbooksServiceSyncActivityIdForceSync

Forces a Sync of Object Represented by Quickbooks Integration Sync Activity

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.postIntegrationsQuickbooksServiceSyncActivityIdForceSync({
    integrationsQuickbooksSyncActivityForceSyncRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.PostIntegrationsQuickbooksServiceSyncActivityIdForceSyncRequest](../../models/operations/postintegrationsquickbooksservicesyncactivityidforcesyncrequest.md) | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.PostIntegrationsQuickbooksServiceSyncActivityIdForceSyncResponse](../../models/operations/postintegrationsquickbooksservicesyncactivityidforcesyncresponse.md)>**


## postIntegrationsQuickbooksVendor

Retrieve Vendor from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.postIntegrationsQuickbooksVendor({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.IntegrationVendorCreateRequest](../../models/shared/integrationvendorcreaterequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostIntegrationsQuickbooksVendorResponse](../../models/operations/postintegrationsquickbooksvendorresponse.md)>**


## postIntegrationsWebhooksPreference

Create Webhooks Preference

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.integrations.postIntegrationsWebhooksPreference({
    sharedSecret: "Soap",
    subscribedEvents: [
      "et",
    ],
    url: "http://concrete-acknowledgment.org",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.WebhooksPreferenceCreateRequest](../../models/shared/webhookspreferencecreaterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PostIntegrationsWebhooksPreferenceResponse](../../models/operations/postintegrationswebhookspreferenceresponse.md)>**

