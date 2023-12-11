# BulkOperations
(*bulkOperations*)

## Overview

This category includes endpoints for managing bulk operations like bulk payables, bulk invoices, and bulk collaborator management.

### Available Operations

* [deletePaymentsBulkCollaboratorBatchBatchId](#deletepaymentsbulkcollaboratorbatchbatchid) - Remove a Specific Collaborator Batch
* [deletePaymentsBulkPayableBatchBatchId](#deletepaymentsbulkpayablebatchbatchid) - Remove a Specific Bulk Payable Batch
* [getPaymentsBulkClientBatch](#getpaymentsbulkclientbatch) - Retrieve all bulk client batches
* [getPaymentsBulkClientBatchBatchId](#getpaymentsbulkclientbatchbatchid) - Fetch Details of a Specific Item from a Client Batch
* [getPaymentsBulkClientBatchBatchIdItem](#getpaymentsbulkclientbatchbatchiditem) - Retrieve All Items from a Client Batch
* [getPaymentsBulkClientBatchBatchIdItemBatchItemId](#getpaymentsbulkclientbatchbatchiditembatchitemid) - Fetch Details of a Specific Item from a Client Batch
* [getPaymentsBulkCollaboratorBatch](#getpaymentsbulkcollaboratorbatch) - Fetch all bulk collaborator batches
* [getPaymentsBulkCollaboratorBatchBatchId](#getpaymentsbulkcollaboratorbatchbatchid) - Retrieve Details of a Specific Collaborator Batch
* [getPaymentsBulkCollaboratorBatchBatchIdItem](#getpaymentsbulkcollaboratorbatchbatchiditem) - Retrieve all items from a specific collaborator batch
* [getPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId](#getpaymentsbulkcollaboratorbatchbatchiditembatchitemid) - Retrieve details of a specific item from a collaborator batch
* [getPaymentsBulkInvoiceBatch](#getpaymentsbulkinvoicebatch) - Retrieve All Bulk Invoice Batches
* [getPaymentsBulkInvoiceBatchBatchId](#getpaymentsbulkinvoicebatchbatchid) - Retrieve details of a specific bulk invoice batch
* [getPaymentsBulkInvoiceBatchBatchIdItem](#getpaymentsbulkinvoicebatchbatchiditem) - Fetch all items from a specific bulk invoice batch
* [getPaymentsBulkInvoiceBatchBatchIdItemBatchItemId](#getpaymentsbulkinvoicebatchbatchiditembatchitemid) - Retrieve a specific item from a bulk invoice batch
* [getPaymentsBulkPayableBatch](#getpaymentsbulkpayablebatch) - Retrieve All Bulk Payable Batches
* [getPaymentsBulkPayableBatchBatchId](#getpaymentsbulkpayablebatchbatchid) - Retrieve Details of a Specific Bulk Payable Batch
* [getPaymentsBulkPayableBatchBatchIdImportSummary](#getpaymentsbulkpayablebatchbatchidimportsummary) - Fetch the import summary for a specific bulk payable batch
* [getPaymentsBulkPayableBatchBatchIdItem](#getpaymentsbulkpayablebatchbatchiditem) - Retrieve all items from a specific bulk payable batch
* [getPaymentsBulkPayableBatchBatchIdItemBatchItemId](#getpaymentsbulkpayablebatchbatchiditembatchitemid) - Retrieve a Specific Item from a Bulk Payable Batch
* [patchPaymentsBulkClientBatchBatchId](#patchpaymentsbulkclientbatchbatchid) - Modify Details of a Specific Item in a Client Batch
* [patchPaymentsBulkClientBatchBatchIdItemBatchItemId](#patchpaymentsbulkclientbatchbatchiditembatchitemid) - Modify Details of a Specific Item in a Client Batch
* [patchPaymentsBulkCollaboratorBatchBatchId](#patchpaymentsbulkcollaboratorbatchbatchid) - Modify Details of a Bulk Collaborator Batch
* [patchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId](#patchpaymentsbulkcollaboratorbatchbatchiditembatchitemid) - Modify the details of a specific item within a collaborator batch
* [patchPaymentsBulkInvoiceBatchBatchId](#patchpaymentsbulkinvoicebatchbatchid) - Modify the details of a specific bulk invoice batch
* [patchPaymentsBulkInvoiceBatchBatchIdItemBatchItemId](#patchpaymentsbulkinvoicebatchbatchiditembatchitemid) - Modify a specific item within a bulk invoice batch
* [patchPaymentsBulkPayableBatchBatchId](#patchpaymentsbulkpayablebatchbatchid) - Modify a Specific Bulk Payable Batch
* [patchPaymentsBulkPayableBatchBatchIdItemBatchItemId](#patchpaymentsbulkpayablebatchbatchiditembatchitemid) - Modify a Specific Item in a Bulk Payable Batch
* [postPaymentsBulkClientBatch](#postpaymentsbulkclientbatch) - Create a new bulk client batch
* [postPaymentsBulkClientBatchBatchIdItem](#postpaymentsbulkclientbatchbatchiditem) - Add a New Item to a Client Batch
* [postPaymentsBulkCollaboratorBatch](#postpaymentsbulkcollaboratorbatch) - Initiate a new bulk collaborator batch.
* [postPaymentsBulkCollaboratorBatchBatchIdItem](#postpaymentsbulkcollaboratorbatchbatchiditem) - Append a new item to a specific collaborator batch
* [postPaymentsBulkInvoiceBatch](#postpaymentsbulkinvoicebatch) - Initiate a New Bulk Invoice Batch
* [postPaymentsBulkInvoiceBatchBatchIdItem](#postpaymentsbulkinvoicebatchbatchiditem) - Add a new item to a specific bulk invoice batch
* [postPaymentsBulkPayableBatch](#postpaymentsbulkpayablebatch) - Initiate a New Bulk Payable Batch
* [postPaymentsBulkPayableBatchBatchIdItem](#postpaymentsbulkpayablebatchbatchiditem) - Add a new item to a specific bulk payable batch

## deletePaymentsBulkCollaboratorBatchBatchId

Deletes a specific bulk collaborator batch using its unique identifier. Once deleted, the batch cannot be recovered.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.deletePaymentsBulkCollaboratorBatchBatchId({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeletePaymentsBulkCollaboratorBatchBatchIdRequest](../../sdk/models/operations/deletepaymentsbulkcollaboratorbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeletePaymentsBulkCollaboratorBatchBatchIdResponse](../../sdk/models/operations/deletepaymentsbulkcollaboratorbatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deletePaymentsBulkPayableBatchBatchId

Deletes a specific batch for bulk payables, using the provided batch ID, preventing any further operations on it.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.deletePaymentsBulkPayableBatchBatchId({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.DeletePaymentsBulkPayableBatchBatchIdRequest](../../sdk/models/operations/deletepaymentsbulkpayablebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeletePaymentsBulkPayableBatchBatchIdResponse](../../sdk/models/operations/deletepaymentsbulkpayablebatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkClientBatch

Provides an overview of all existing bulk client batches, allowing users to quickly ascertain and manage batches created for the purpose of client onboarding or import.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkClientBatch();

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

**Promise<[operations.GetPaymentsBulkClientBatchResponse](../../sdk/models/operations/getpaymentsbulkclientbatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkClientBatchBatchId

Retrieves the detailed information of a specific item within the bulk client batch using both batch and item unique identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkClientBatchBatchId({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetPaymentsBulkClientBatchBatchIdRequest](../../sdk/models/operations/getpaymentsbulkclientbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetPaymentsBulkClientBatchBatchIdResponse](../../sdk/models/operations/getpaymentsbulkclientbatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkClientBatchBatchIdItem

Fetches all items present in the specified bulk client batch, providing a comprehensive view of all client data in the batch.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkClientBatchBatchIdItem({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetPaymentsBulkClientBatchBatchIdItemRequest](../../sdk/models/operations/getpaymentsbulkclientbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetPaymentsBulkClientBatchBatchIdItemResponse](../../sdk/models/operations/getpaymentsbulkclientbatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkClientBatchBatchIdItemBatchItemId

Retrieves the detailed information of a specific item within the bulk client batch using both batch and item unique identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkClientBatchBatchIdItemBatchItemId({
    batchId: "string",
    batchItemId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.GetPaymentsBulkClientBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/getpaymentsbulkclientbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.GetPaymentsBulkClientBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/getpaymentsbulkclientbatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCollaboratorBatch

Provides a list of all existing bulk collaborator batches, allowing users to view and manage batches that have been created for collaboration purposes.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkCollaboratorBatch();

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

**Promise<[operations.GetPaymentsBulkCollaboratorBatchResponse](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCollaboratorBatchBatchId

Fetches detailed information of a specific bulk collaborator batch, using the provided batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkCollaboratorBatchBatchId({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetPaymentsBulkCollaboratorBatchBatchIdRequest](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetPaymentsBulkCollaboratorBatchBatchIdResponse](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCollaboratorBatchBatchIdItem

Provides a comprehensive list of items present within a specified batch of collaborators, identifiable through its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkCollaboratorBatchBatchIdItem({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetPaymentsBulkCollaboratorBatchBatchIdItemRequest](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetPaymentsBulkCollaboratorBatchBatchIdItemResponse](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId

Enables fetching of detailed information about an individual item from a specified batch of collaborators using both the batch and item unique identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId({
    batchId: "string",
    batchItemId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.GetPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.GetPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/getpaymentsbulkcollaboratorbatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkInvoiceBatch

Fetches a list of all the batches created for bulk invoices, providing an overview of the bulk invoicing operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkInvoiceBatch();

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

**Promise<[operations.GetPaymentsBulkInvoiceBatchResponse](../../sdk/models/operations/getpaymentsbulkinvoicebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkInvoiceBatchBatchId

Allows for the retrieval of a specified batch of bulk invoices by providing its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkInvoiceBatchBatchId({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetPaymentsBulkInvoiceBatchBatchIdRequest](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetPaymentsBulkInvoiceBatchBatchIdResponse](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkInvoiceBatchBatchIdItem

Provides a list of all the items within a specified batch of bulk invoices, identified by its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkInvoiceBatchBatchIdItem({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.GetPaymentsBulkInvoiceBatchBatchIdItemRequest](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.GetPaymentsBulkInvoiceBatchBatchIdItemResponse](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkInvoiceBatchBatchIdItemBatchItemId

Fetches detailed information about a specific item located within a designated bulk invoice batch. Useful for obtaining particular item data without browsing the entire batch.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkInvoiceBatchBatchIdItemBatchItemId({
    batchId: "string",
    batchItemId: "string",
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
| `request`                                                                                                                                                      | [operations.GetPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/getpaymentsbulkinvoicebatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkPayableBatch

Fetches a list of all the batches created for bulk payables, providing an overview of the bulk payment operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkPayableBatch();

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

**Promise<[operations.GetPaymentsBulkPayableBatchResponse](../../sdk/models/operations/getpaymentsbulkpayablebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkPayableBatchBatchId

Fetches detailed information of a specific batch created for bulk payables, using the provided batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkPayableBatchBatchId({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetPaymentsBulkPayableBatchBatchIdRequest](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdResponse](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkPayableBatchBatchIdImportSummary

Provides an overview and summary of the import process for a given bulk payable batch, allowing for tracking of imported items, errors, and other relevant batch statistics.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkPayableBatchBatchIdImportSummary({
    batchId: "string",
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
| `request`                                                                                                                                                  | [operations.GetPaymentsBulkPayableBatchBatchIdImportSummaryRequest](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchidimportsummaryrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdImportSummaryResponse](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchidimportsummaryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkPayableBatchBatchIdItem

Fetches and lists all individual payable items associated with a specified bulk payable batch. Useful for tracking and verifying batch details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkPayableBatchBatchIdItem({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.GetPaymentsBulkPayableBatchBatchIdItemRequest](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdItemResponse](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkPayableBatchBatchIdItemBatchItemId

Fetches detailed information of a specific item within a bulk payable batch, using both the batch ID and the item ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.getPaymentsBulkPayableBatchBatchIdItemBatchItemId({
    batchId: "string",
    batchItemId: "string",
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
| `request`                                                                                                                                                      | [operations.GetPaymentsBulkPayableBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetPaymentsBulkPayableBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/getpaymentsbulkpayablebatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkClientBatchBatchId

Allows modification of the details of a specific item within the bulk client batch, using the provided item and batch identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.patchPaymentsBulkClientBatchBatchId({
    bulkBatchUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PatchPaymentsBulkClientBatchBatchIdRequest](../../sdk/models/operations/patchpaymentsbulkclientbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PatchPaymentsBulkClientBatchBatchIdResponse](../../sdk/models/operations/patchpaymentsbulkclientbatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkClientBatchBatchIdItemBatchItemId

Allows modification of the details of a specific item within the bulk client batch, using the provided item and batch identifiers.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AutoPayRequirement, BulkClientItemUpdateClientStatus, ShareTaxDocument } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.patchPaymentsBulkClientBatchBatchIdItemBatchItemId({
    bulkClientItemUpdate: {
      integration: {
        quickbooks: {},
      },
      labels: {
        "key": "string",
      },
      memberData: {},
    },
    batchId: "string",
    batchItemId: "string",
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
| `request`                                                                                                                                                        | [operations.PatchPaymentsBulkClientBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/patchpaymentsbulkclientbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


### Response

**Promise<[operations.PatchPaymentsBulkClientBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/patchpaymentsbulkclientbatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkCollaboratorBatchBatchId

Allows for updating or altering the details and items within a specific bulk collaborator batch using the given batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.patchPaymentsBulkCollaboratorBatchBatchId({
    bulkBatchUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PatchPaymentsBulkCollaboratorBatchBatchIdRequest](../../sdk/models/operations/patchpaymentsbulkcollaboratorbatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PatchPaymentsBulkCollaboratorBatchBatchIdResponse](../../sdk/models/operations/patchpaymentsbulkcollaboratorbatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId

Provides the functionality to update or alter the attributes of an item present in a given collaborator batch using the unique identifiers for both the batch and the item.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  BulkCollaboratorItemUpdateCollaboratorStatus,
  MemberClientFormW9InfoCompanyStructure,
} from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.patchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemId({
    bulkCollaboratorItemUpdate: {
      formW9Data: {},
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
    batchItemId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                    | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                    | [operations.PatchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/patchpaymentsbulkcollaboratorbatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                           | The request object to use for the request.                                                                                                                                   |
| `config`                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                           | Available config options for making requests.                                                                                                                                |


### Response

**Promise<[operations.PatchPaymentsBulkCollaboratorBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/patchpaymentsbulkcollaboratorbatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkInvoiceBatchBatchId

Enables the user to update or modify the attributes of a given batch of bulk invoices by specifying its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.patchPaymentsBulkInvoiceBatchBatchId({
    bulkInvoiceBatchUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PatchPaymentsBulkInvoiceBatchBatchIdRequest](../../sdk/models/operations/patchpaymentsbulkinvoicebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PatchPaymentsBulkInvoiceBatchBatchIdResponse](../../sdk/models/operations/patchpaymentsbulkinvoicebatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkInvoiceBatchBatchIdItemBatchItemId

Allows for updates or edits to be made to a specific items details within an existing bulk invoice batch. Enhances the flexibility and management of invoice data.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceItemUpdateAcceptedPaymentMethods, BulkInvoiceItemUpdateInvoiceStatus } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.patchPaymentsBulkInvoiceBatchBatchIdItemBatchItemId({
    bulkInvoiceItemUpdate: {
      acceptedPaymentMethods: [
        BulkInvoiceItemUpdateAcceptedPaymentMethods.Manual,
      ],
      creditFeeHandling: {},
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
    batchItemId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.PatchPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/patchpaymentsbulkinvoicebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.PatchPaymentsBulkInvoiceBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/patchpaymentsbulkinvoicebatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkPayableBatchBatchId

Updates the information or items of a specific bulk payable batch, given its unique batch ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.patchPaymentsBulkPayableBatchBatchId({
    bulkPayableBatchUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PatchPaymentsBulkPayableBatchBatchIdRequest](../../sdk/models/operations/patchpaymentsbulkpayablebatchbatchidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PatchPaymentsBulkPayableBatchBatchIdResponse](../../sdk/models/operations/patchpaymentsbulkpayablebatchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkPayableBatchBatchIdItemBatchItemId

Updates the details or status of a specific item within a bulk payable batch, given both the batch ID and the item ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableItemUpdatePayableStatus, BulkPayableItemUpdateWorkflowSubStatus } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.patchPaymentsBulkPayableBatchBatchIdItemBatchItemId({
    bulkPayableItemUpdate: {
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
    batchItemId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.PatchPaymentsBulkPayableBatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/patchpaymentsbulkpayablebatchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.PatchPaymentsBulkPayableBatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/patchpaymentsbulkpayablebatchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkClientBatch

Initiates the creation of a fresh bulk client batch, streamlining the process of adding multiple clients in one go.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.postPaymentsBulkClientBatch({
    labels: {
      "key": "string",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.BulkBatchCreate](../../sdk/models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostPaymentsBulkClientBatchResponse](../../sdk/models/operations/postpaymentsbulkclientbatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkClientBatchBatchIdItem

Inserts a new item into the specified bulk client batch, allowing for further expansion of client data within the batch.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { AutoPayRequirement, BulkClientItemCreateClientStatus, ShareTaxDocument } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.postPaymentsBulkClientBatchBatchIdItem({
    bulkClientItemCreate: {
      integration: {
        quickbooks: {},
      },
      labels: {
        "key": "string",
      },
      memberData: {},
    },
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.PostPaymentsBulkClientBatchBatchIdItemRequest](../../sdk/models/operations/postpaymentsbulkclientbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PostPaymentsBulkClientBatchBatchIdItemResponse](../../sdk/models/operations/postpaymentsbulkclientbatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkCollaboratorBatch

Enables the creation of a new bulk collaborator batch, facilitating the bulk management and addition of collaborators for various projects or tasks.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.postPaymentsBulkCollaboratorBatch({
    labels: {
      "key": "string",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.BulkBatchCreate](../../sdk/models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostPaymentsBulkCollaboratorBatchResponse](../../sdk/models/operations/postpaymentsbulkcollaboratorbatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkCollaboratorBatchBatchIdItem

Allows for the addition of a new item to an existing batch of collaborators by providing the batchs unique identifier and item details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  BulkCollaboratorItemCreateCollaboratorStatus,
  MemberClientFormW9InfoCompanyStructure,
} from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.postPaymentsBulkCollaboratorBatchBatchIdItem({
    bulkCollaboratorItemCreate: {
      formW9Data: {},
      labels: {
        "key": "string",
      },
    },
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.PostPaymentsBulkCollaboratorBatchBatchIdItemRequest](../../sdk/models/operations/postpaymentsbulkcollaboratorbatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PostPaymentsBulkCollaboratorBatchBatchIdItemResponse](../../sdk/models/operations/postpaymentsbulkcollaboratorbatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkInvoiceBatch

Creates a new batch for importing multiple invoices at once, streamlining the bulk invoicing operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceBatchCreateProcessingStrategy } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.postPaymentsBulkInvoiceBatch({
    labels: {
      "key": "string",
    },
    processingStrategy: BulkInvoiceBatchCreateProcessingStrategy.Single,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.BulkInvoiceBatchCreate](../../sdk/models/shared/bulkinvoicebatchcreate.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PostPaymentsBulkInvoiceBatchResponse](../../sdk/models/operations/postpaymentsbulkinvoicebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkInvoiceBatchBatchIdItem

Allows users to append a new item to a given batch of bulk invoices by supplying its unique batch identifier and the details of the new item.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkInvoiceItemCreateAcceptedPaymentMethods, BulkInvoiceItemCreateInvoiceStatus } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.postPaymentsBulkInvoiceBatchBatchIdItem({
    bulkInvoiceItemCreate: {
      acceptedPaymentMethods: [
        BulkInvoiceItemCreateAcceptedPaymentMethods.Credit,
      ],
      amount: 425.31,
      bulkInvoiceBatchId: "string",
      creditFeeHandling: {},
      dueDate: "string",
      invoiceStatus: BulkInvoiceItemCreateInvoiceStatus.Paid,
      labels: {
        "key": "string",
      },
      lineItemDescription: "string",
    },
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PostPaymentsBulkInvoiceBatchBatchIdItemRequest](../../sdk/models/operations/postpaymentsbulkinvoicebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PostPaymentsBulkInvoiceBatchBatchIdItemResponse](../../sdk/models/operations/postpaymentsbulkinvoicebatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkPayableBatch

Creates a new batch for importing multiple payables at once, streamlining the bulk payment operations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableBatchCreateProcessingStrategy } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.postPaymentsBulkPayableBatch({
    labels: {
      "key": "string",
    },
    processingStrategy: BulkPayableBatchCreateProcessingStrategy.Single,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.BulkPayableBatchCreate](../../sdk/models/shared/bulkpayablebatchcreate.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PostPaymentsBulkPayableBatchResponse](../../sdk/models/operations/postpaymentsbulkpayablebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkPayableBatchBatchIdItem

Allows for the creation and addition of a new individual payable item into an existing bulk payable batch. This enhances batch management and payable tracking.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkPayableItemCreatePayableStatus, BulkPayableItemCreateWorkflowSubStatus } from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.bulkOperations.postPaymentsBulkPayableBatchBatchIdItem({
    bulkPayableItemCreate: {
      amount: 5083.09,
      bulkPayableBatchId: "string",
      dueDate: "string",
      labels: {
        "key": "string",
      },
      lineItemDescription: "string",
      payableStatus: BulkPayableItemCreatePayableStatus.Open,
    },
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PostPaymentsBulkPayableBatchBatchIdItemRequest](../../sdk/models/operations/postpaymentsbulkpayablebatchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PostPaymentsBulkPayableBatchBatchIdItemResponse](../../sdk/models/operations/postpaymentsbulkpayablebatchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
