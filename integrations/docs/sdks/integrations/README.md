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

  const res = await sdk.deleteIntegrationsQuickbooksAccountAssetId({
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
| `request`                                                                                                                                        | [operations.DeleteIntegrationsQuickbooksAccountAssetIdRequest](../../sdk/models/operations/deleteintegrationsquickbooksaccountassetidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksAccountAssetIdResponse](../../sdk/models/operations/deleteintegrationsquickbooksaccountassetidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteIntegrationsQuickbooksAccountEquityId

Delete Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.deleteIntegrationsQuickbooksAccountEquityId({
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
| `request`                                                                                                                                          | [operations.DeleteIntegrationsQuickbooksAccountEquityIdRequest](../../sdk/models/operations/deleteintegrationsquickbooksaccountequityidrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksAccountEquityIdResponse](../../sdk/models/operations/deleteintegrationsquickbooksaccountequityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteIntegrationsQuickbooksAccountExpenseId

Delete Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.deleteIntegrationsQuickbooksAccountExpenseId({
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
| `request`                                                                                                                                            | [operations.DeleteIntegrationsQuickbooksAccountExpenseIdRequest](../../sdk/models/operations/deleteintegrationsquickbooksaccountexpenseidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksAccountExpenseIdResponse](../../sdk/models/operations/deleteintegrationsquickbooksaccountexpenseidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteIntegrationsQuickbooksAccountLiabilityId

Delete Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.deleteIntegrationsQuickbooksAccountLiabilityId({
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
| `request`                                                                                                                                                | [operations.DeleteIntegrationsQuickbooksAccountLiabilityIdRequest](../../sdk/models/operations/deleteintegrationsquickbooksaccountliabilityidrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksAccountLiabilityIdResponse](../../sdk/models/operations/deleteintegrationsquickbooksaccountliabilityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteIntegrationsQuickbooksAccountRevenueId

Delete Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.deleteIntegrationsQuickbooksAccountRevenueId({
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
| `request`                                                                                                                                            | [operations.DeleteIntegrationsQuickbooksAccountRevenueIdRequest](../../sdk/models/operations/deleteintegrationsquickbooksaccountrevenueidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksAccountRevenueIdResponse](../../sdk/models/operations/deleteintegrationsquickbooksaccountrevenueidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteIntegrationsQuickbooksCustomerId

Delete Quickbooks Customer details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.deleteIntegrationsQuickbooksCustomerId({
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
| `request`                                                                                                                                | [operations.DeleteIntegrationsQuickbooksCustomerIdRequest](../../sdk/models/operations/deleteintegrationsquickbookscustomeridrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksCustomerIdResponse](../../sdk/models/operations/deleteintegrationsquickbookscustomeridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteIntegrationsQuickbooksItemId

Delete Quickbooks Item details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.deleteIntegrationsQuickbooksItemId({
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
| `request`                                                                                                                        | [operations.DeleteIntegrationsQuickbooksItemIdRequest](../../sdk/models/operations/deleteintegrationsquickbooksitemidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksItemIdResponse](../../sdk/models/operations/deleteintegrationsquickbooksitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteIntegrationsQuickbooksService

Delete Quickbooks Integration

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.deleteIntegrationsQuickbooksService();

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

**Promise<[operations.DeleteIntegrationsQuickbooksServiceResponse](../../sdk/models/operations/deleteintegrationsquickbooksserviceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteIntegrationsQuickbooksVendorId

Delete Quickbooks Vendor details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.deleteIntegrationsQuickbooksVendorId({
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
| `request`                                                                                                                            | [operations.DeleteIntegrationsQuickbooksVendorIdRequest](../../sdk/models/operations/deleteintegrationsquickbooksvendoridrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.DeleteIntegrationsQuickbooksVendorIdResponse](../../sdk/models/operations/deleteintegrationsquickbooksvendoridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteIntegrationsWebhooksPreferenceId

Delete Webhooks Preference

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.deleteIntegrationsWebhooksPreferenceId({
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
| `request`                                                                                                                                | [operations.DeleteIntegrationsWebhooksPreferenceIdRequest](../../sdk/models/operations/deleteintegrationswebhookspreferenceidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.DeleteIntegrationsWebhooksPreferenceIdResponse](../../sdk/models/operations/deleteintegrationswebhookspreferenceidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksAccountAsset

List Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksAccountAsset();

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

**Promise<[operations.GetIntegrationsQuickbooksAccountAssetResponse](../../sdk/models/operations/getintegrationsquickbooksaccountassetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksAccountAssetId

Get Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksAccountAssetId({
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
| `request`                                                                                                                                  | [operations.GetIntegrationsQuickbooksAccountAssetIdRequest](../../sdk/models/operations/getintegrationsquickbooksaccountassetidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetIntegrationsQuickbooksAccountAssetIdResponse](../../sdk/models/operations/getintegrationsquickbooksaccountassetidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksAccountEquity

List Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksAccountEquity();

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

**Promise<[operations.GetIntegrationsQuickbooksAccountEquityResponse](../../sdk/models/operations/getintegrationsquickbooksaccountequityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksAccountEquityId

Get Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksAccountEquityId({
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
| `request`                                                                                                                                    | [operations.GetIntegrationsQuickbooksAccountEquityIdRequest](../../sdk/models/operations/getintegrationsquickbooksaccountequityidrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.GetIntegrationsQuickbooksAccountEquityIdResponse](../../sdk/models/operations/getintegrationsquickbooksaccountequityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksAccountExpense

List Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksAccountExpense();

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

**Promise<[operations.GetIntegrationsQuickbooksAccountExpenseResponse](../../sdk/models/operations/getintegrationsquickbooksaccountexpenseresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksAccountExpenseId

Get Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksAccountExpenseId({
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
| `request`                                                                                                                                      | [operations.GetIntegrationsQuickbooksAccountExpenseIdRequest](../../sdk/models/operations/getintegrationsquickbooksaccountexpenseidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.GetIntegrationsQuickbooksAccountExpenseIdResponse](../../sdk/models/operations/getintegrationsquickbooksaccountexpenseidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksAccountLiability

List Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksAccountLiability();

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

**Promise<[operations.GetIntegrationsQuickbooksAccountLiabilityResponse](../../sdk/models/operations/getintegrationsquickbooksaccountliabilityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksAccountLiabilityId

Get Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksAccountLiabilityId({
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
| `request`                                                                                                                                          | [operations.GetIntegrationsQuickbooksAccountLiabilityIdRequest](../../sdk/models/operations/getintegrationsquickbooksaccountliabilityidrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetIntegrationsQuickbooksAccountLiabilityIdResponse](../../sdk/models/operations/getintegrationsquickbooksaccountliabilityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksAccountRevenue

List Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksAccountRevenue();

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

**Promise<[operations.GetIntegrationsQuickbooksAccountRevenueResponse](../../sdk/models/operations/getintegrationsquickbooksaccountrevenueresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksAccountRevenueId

Get Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksAccountRevenueId({
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
| `request`                                                                                                                                      | [operations.GetIntegrationsQuickbooksAccountRevenueIdRequest](../../sdk/models/operations/getintegrationsquickbooksaccountrevenueidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.GetIntegrationsQuickbooksAccountRevenueIdResponse](../../sdk/models/operations/getintegrationsquickbooksaccountrevenueidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksCustomer

List Quickbooks Customer details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksCustomer();

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

**Promise<[operations.GetIntegrationsQuickbooksCustomerResponse](../../sdk/models/operations/getintegrationsquickbookscustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksCustomerId

Get Quickbooks Customer details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksCustomerId({
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
| `request`                                                                                                                          | [operations.GetIntegrationsQuickbooksCustomerIdRequest](../../sdk/models/operations/getintegrationsquickbookscustomeridrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetIntegrationsQuickbooksCustomerIdResponse](../../sdk/models/operations/getintegrationsquickbookscustomeridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksItem

List Quickbooks Item details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksItem();

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

**Promise<[operations.GetIntegrationsQuickbooksItemResponse](../../sdk/models/operations/getintegrationsquickbooksitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksItemId

Get Quickbooks Item details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksItemId({
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
| `request`                                                                                                                  | [operations.GetIntegrationsQuickbooksItemIdRequest](../../sdk/models/operations/getintegrationsquickbooksitemidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetIntegrationsQuickbooksItemIdResponse](../../sdk/models/operations/getintegrationsquickbooksitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksService

Get Quickbooks Integration

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksService();

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

**Promise<[operations.GetIntegrationsQuickbooksServiceResponse](../../sdk/models/operations/getintegrationsquickbooksserviceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksServiceSyncActivity

Get Quickbooks Integration Sync Activities

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksServiceSyncActivity();

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

**Promise<[operations.GetIntegrationsQuickbooksServiceSyncActivityResponse](../../sdk/models/operations/getintegrationsquickbooksservicesyncactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksServiceSyncActivityId

Get Quickbooks Integration Sync Activity

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksServiceSyncActivityId({
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
| `request`                                                                                                                                                | [operations.GetIntegrationsQuickbooksServiceSyncActivityIdRequest](../../sdk/models/operations/getintegrationsquickbooksservicesyncactivityidrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.GetIntegrationsQuickbooksServiceSyncActivityIdResponse](../../sdk/models/operations/getintegrationsquickbooksservicesyncactivityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksVendor

List Quickbooks Vendor details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksVendor();

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

**Promise<[operations.GetIntegrationsQuickbooksVendorResponse](../../sdk/models/operations/getintegrationsquickbooksvendorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsQuickbooksVendorId

Get Quickbooks Vendor details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsQuickbooksVendorId({
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
| `request`                                                                                                                      | [operations.GetIntegrationsQuickbooksVendorIdRequest](../../sdk/models/operations/getintegrationsquickbooksvendoridrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetIntegrationsQuickbooksVendorIdResponse](../../sdk/models/operations/getintegrationsquickbooksvendoridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsWebhooksEventnames

List Webhooks Event Names

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsWebhooksEventnames();

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

**Promise<[operations.GetIntegrationsWebhooksEventnamesResponse](../../sdk/models/operations/getintegrationswebhookseventnamesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsWebhooksPreference

List Webhooks Preferences

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsWebhooksPreference();

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

**Promise<[operations.GetIntegrationsWebhooksPreferenceResponse](../../sdk/models/operations/getintegrationswebhookspreferenceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getIntegrationsWebhooksPreferenceId

Get Webhooks Preference

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.getIntegrationsWebhooksPreferenceId({
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
| `request`                                                                                                                          | [operations.GetIntegrationsWebhooksPreferenceIdRequest](../../sdk/models/operations/getintegrationswebhookspreferenceidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetIntegrationsWebhooksPreferenceIdResponse](../../sdk/models/operations/getintegrationswebhookspreferenceidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchIntegrationsQuickbooksAccountAssetId

Updaet Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.patchIntegrationsQuickbooksAccountAssetId({
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
| `request`                                                                                                                                      | [operations.PatchIntegrationsQuickbooksAccountAssetIdRequest](../../sdk/models/operations/patchintegrationsquickbooksaccountassetidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksAccountAssetIdResponse](../../sdk/models/operations/patchintegrationsquickbooksaccountassetidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchIntegrationsQuickbooksAccountEquityId

Updaet Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.patchIntegrationsQuickbooksAccountEquityId({
    integrationAccountCreateRequest: {},
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
| `request`                                                                                                                                        | [operations.PatchIntegrationsQuickbooksAccountEquityIdRequest](../../sdk/models/operations/patchintegrationsquickbooksaccountequityidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksAccountEquityIdResponse](../../sdk/models/operations/patchintegrationsquickbooksaccountequityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchIntegrationsQuickbooksAccountExpenseId

Updaet Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.patchIntegrationsQuickbooksAccountExpenseId({
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
| `request`                                                                                                                                          | [operations.PatchIntegrationsQuickbooksAccountExpenseIdRequest](../../sdk/models/operations/patchintegrationsquickbooksaccountexpenseidrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksAccountExpenseIdResponse](../../sdk/models/operations/patchintegrationsquickbooksaccountexpenseidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchIntegrationsQuickbooksAccountLiabilityId

Updaet Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.patchIntegrationsQuickbooksAccountLiabilityId({
    integrationAccountCreateRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.PatchIntegrationsQuickbooksAccountLiabilityIdRequest](../../sdk/models/operations/patchintegrationsquickbooksaccountliabilityidrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksAccountLiabilityIdResponse](../../sdk/models/operations/patchintegrationsquickbooksaccountliabilityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchIntegrationsQuickbooksAccountRevenueId

Updaet Quickbooks Account details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.patchIntegrationsQuickbooksAccountRevenueId({
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
| `request`                                                                                                                                          | [operations.PatchIntegrationsQuickbooksAccountRevenueIdRequest](../../sdk/models/operations/patchintegrationsquickbooksaccountrevenueidrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksAccountRevenueIdResponse](../../sdk/models/operations/patchintegrationsquickbooksaccountrevenueidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchIntegrationsQuickbooksCustomerId

Updaet Quickbooks Customer details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.patchIntegrationsQuickbooksCustomerId({
    integrationCustomerCreateRequest: {},
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
| `request`                                                                                                                              | [operations.PatchIntegrationsQuickbooksCustomerIdRequest](../../sdk/models/operations/patchintegrationsquickbookscustomeridrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksCustomerIdResponse](../../sdk/models/operations/patchintegrationsquickbookscustomeridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchIntegrationsQuickbooksItemId

Updaet Quickbooks Item details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.patchIntegrationsQuickbooksItemId({
    integrationItemCreateRequest: {},
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
| `request`                                                                                                                      | [operations.PatchIntegrationsQuickbooksItemIdRequest](../../sdk/models/operations/patchintegrationsquickbooksitemidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksItemIdResponse](../../sdk/models/operations/patchintegrationsquickbooksitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchIntegrationsQuickbooksService

Update Quickbooks Integration Status

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";
import { IntegrationsQuickbooksUpdateRequestSyncStatus } from "@wingspan/integrations/dist/sdk/models/shared";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.patchIntegrationsQuickbooksService({
    defaults: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [shared.IntegrationsQuickbooksUpdateRequest](../../sdk/models/shared/integrationsquickbooksupdaterequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksServiceResponse](../../sdk/models/operations/patchintegrationsquickbooksserviceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchIntegrationsQuickbooksServiceSyncActivityId

Update Quickbooks Integration Sync Activity

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.patchIntegrationsQuickbooksServiceSyncActivityId({
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

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.PatchIntegrationsQuickbooksServiceSyncActivityIdRequest](../../sdk/models/operations/patchintegrationsquickbooksservicesyncactivityidrequest.md) | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksServiceSyncActivityIdResponse](../../sdk/models/operations/patchintegrationsquickbooksservicesyncactivityidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchIntegrationsQuickbooksVendorId

Updaet Quickbooks Vendor details

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.patchIntegrationsQuickbooksVendorId({
    integrationVendorCreateRequest: {},
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
| `request`                                                                                                                          | [operations.PatchIntegrationsQuickbooksVendorIdRequest](../../sdk/models/operations/patchintegrationsquickbooksvendoridrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PatchIntegrationsQuickbooksVendorIdResponse](../../sdk/models/operations/patchintegrationsquickbooksvendoridresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchIntegrationsWebhooksPreferenceId

Update Webhooks Preference

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.patchIntegrationsWebhooksPreferenceId({
    webhooksPreferenceUpdateRequest: {
      subscribedEvents: [
        "string",
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

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PatchIntegrationsWebhooksPreferenceIdRequest](../../sdk/models/operations/patchintegrationswebhookspreferenceidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PatchIntegrationsWebhooksPreferenceIdResponse](../../sdk/models/operations/patchintegrationswebhookspreferenceidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postIntegrationsQuickbooksAccountAsset

Retrieve Account from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.postIntegrationsQuickbooksAccountAsset({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.IntegrationAccountCreateRequest](../../sdk/models/shared/integrationaccountcreaterequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostIntegrationsQuickbooksAccountAssetResponse](../../sdk/models/operations/postintegrationsquickbooksaccountassetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postIntegrationsQuickbooksAccountEquity

Retrieve Account from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.postIntegrationsQuickbooksAccountEquity({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.IntegrationAccountCreateRequest](../../sdk/models/shared/integrationaccountcreaterequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostIntegrationsQuickbooksAccountEquityResponse](../../sdk/models/operations/postintegrationsquickbooksaccountequityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postIntegrationsQuickbooksAccountExpense

Retrieve Account from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.postIntegrationsQuickbooksAccountExpense({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.IntegrationAccountCreateRequest](../../sdk/models/shared/integrationaccountcreaterequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostIntegrationsQuickbooksAccountExpenseResponse](../../sdk/models/operations/postintegrationsquickbooksaccountexpenseresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postIntegrationsQuickbooksAccountLiability

Retrieve Account from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.postIntegrationsQuickbooksAccountLiability({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.IntegrationAccountCreateRequest](../../sdk/models/shared/integrationaccountcreaterequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostIntegrationsQuickbooksAccountLiabilityResponse](../../sdk/models/operations/postintegrationsquickbooksaccountliabilityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postIntegrationsQuickbooksAccountRevenue

Retrieve Account from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.postIntegrationsQuickbooksAccountRevenue({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.IntegrationAccountCreateRequest](../../sdk/models/shared/integrationaccountcreaterequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostIntegrationsQuickbooksAccountRevenueResponse](../../sdk/models/operations/postintegrationsquickbooksaccountrevenueresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postIntegrationsQuickbooksCustomer

Retrieve Customer from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.postIntegrationsQuickbooksCustomer({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [shared.IntegrationCustomerCreateRequest](../../sdk/models/shared/integrationcustomercreaterequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostIntegrationsQuickbooksCustomerResponse](../../sdk/models/operations/postintegrationsquickbookscustomerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postIntegrationsQuickbooksItem

Retrieve Item from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.postIntegrationsQuickbooksItem({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.IntegrationItemCreateRequest](../../sdk/models/shared/integrationitemcreaterequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostIntegrationsQuickbooksItemResponse](../../sdk/models/operations/postintegrationsquickbooksitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postIntegrationsQuickbooksService

Create Quickbooks Integration

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.postIntegrationsQuickbooksService({
    defaults: {},
    redirectUrl: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [shared.IntegrationsQuickbooksCreateRequest](../../sdk/models/shared/integrationsquickbookscreaterequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostIntegrationsQuickbooksServiceResponse](../../sdk/models/operations/postintegrationsquickbooksserviceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postIntegrationsQuickbooksServiceSyncActivityIdForceSync

Forces a Sync of Object Represented by Quickbooks Integration Sync Activity

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.postIntegrationsQuickbooksServiceSyncActivityIdForceSync({
    integrationsQuickbooksSyncActivityForceSyncRequest: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                    | [operations.PostIntegrationsQuickbooksServiceSyncActivityIdForceSyncRequest](../../sdk/models/operations/postintegrationsquickbooksservicesyncactivityidforcesyncrequest.md) | :heavy_check_mark:                                                                                                                                                           | The request object to use for the request.                                                                                                                                   |
| `config`                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Available config options for making requests.                                                                                                                                |


### Response

**Promise<[operations.PostIntegrationsQuickbooksServiceSyncActivityIdForceSyncResponse](../../sdk/models/operations/postintegrationsquickbooksservicesyncactivityidforcesyncresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postIntegrationsQuickbooksVendor

Retrieve Vendor from Quickbooks

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.postIntegrationsQuickbooksVendor({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [shared.IntegrationVendorCreateRequest](../../sdk/models/shared/integrationvendorcreaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostIntegrationsQuickbooksVendorResponse](../../sdk/models/operations/postintegrationsquickbooksvendorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postIntegrationsWebhooksPreference

Create Webhooks Preference

### Example Usage

```typescript
import { Integrations } from "@wingspan/integrations";

(async() => {
  const sdk = new Integrations();

  const res = await sdk.postIntegrationsWebhooksPreference({
    sharedSecret: "string",
    subscribedEvents: [
      "string",
    ],
    url: "http://corny-registry.name",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.WebhooksPreferenceCreateRequest](../../sdk/models/shared/webhookspreferencecreaterequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostIntegrationsWebhooksPreferenceResponse](../../sdk/models/operations/postintegrationswebhookspreferenceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
