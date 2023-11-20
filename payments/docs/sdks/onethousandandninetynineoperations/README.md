# OneThousandAndNinetyNineOperations
(*oneThousandAndNinetyNineOperations*)

## Overview

Includes endpoints for managing 1099 forms.

### Available Operations

* [getPaymentsBulkCalculation1099Batch](#getpaymentsbulkcalculation1099batch) - Retrieve all bulk calculation 1099 batches
* [getPaymentsBulkCalculation1099BatchBatchId](#getpaymentsbulkcalculation1099batchbatchid) - Retrieve specific details of a bulk calculation 1099 batch
* [getPaymentsBulkCalculation1099BatchBatchIdItem](#getpaymentsbulkcalculation1099batchbatchiditem) - Retrieve all items from a calculation 1099 batch
* [getPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId](#getpaymentsbulkcalculation1099batchbatchiditembatchitemid) - Fetch details of a specific item from a calculation 1099 batch
* [getPaymentsCollaboratorIdDownload1099YearIndex](#getpaymentscollaboratoriddownload1099yearindex) - Retrieve Form 1099 PDF for a Collaborator by Year and Index
* [getPaymentsCollaboratorIdDownloadW9](#getpaymentscollaboratoriddownloadw9) - Retrieve Form W9 PDF for a Collaborator
* [patchPaymentsBulkCalculation1099BatchBatchId](#patchpaymentsbulkcalculation1099batchbatchid) - Modify the details of a specific bulk calculation 1099 batch
* [patchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId](#patchpaymentsbulkcalculation1099batchbatchiditembatchitemid) - Revise the attributes of an item in a calculation 1099 batch
* [postPaymentsBulkCalculation1099Batch](#postpaymentsbulkcalculation1099batch) - Initialize a new batch for bulk calculation 1099
* [postPaymentsBulkCalculation1099BatchBatchIdItem](#postpaymentsbulkcalculation1099batchbatchiditem) - Add a new item to a calculation 1099 batch
* [postPaymentsCollaborator1099Calculate](#postpaymentscollaborator1099calculate) - Determine 1099 Amounts for Collaborators
* [postPaymentsCollaborator1099MarkUndelivered](#postpaymentscollaborator1099markundelivered) - Indicate a collaborator's 1099 form was returned undelivered
* [postPaymentsCollaborator1099Remail](#postpaymentscollaborator1099remail) - Request a new mailing of the 1099 form for a collaborator

## getPaymentsBulkCalculation1099Batch

Fetches a comprehensive list of all batches created for bulk 1099 calculations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.getPaymentsBulkCalculation1099Batch();

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

**Promise<[operations.GetPaymentsBulkCalculation1099BatchResponse](../../sdk/models/operations/getpaymentsbulkcalculation1099batchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCalculation1099BatchBatchId

Fetches detailed information about a specific batch meant for bulk 1099 calculations using its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.getPaymentsBulkCalculation1099BatchBatchId({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.GetPaymentsBulkCalculation1099BatchBatchIdRequest](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.GetPaymentsBulkCalculation1099BatchBatchIdResponse](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCalculation1099BatchBatchIdItem

Access a comprehensive list of items contained within a specified calculation 1099 batch, useful for verifying or inspecting batch contents.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.getPaymentsBulkCalculation1099BatchBatchIdItem({
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.GetPaymentsBulkCalculation1099BatchBatchIdItemRequest](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.GetPaymentsBulkCalculation1099BatchBatchIdItemResponse](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId

Gain insights into a particular item's attributes and data stored within a calculation 1099 batch, enhancing data management and verification.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.getPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId({
    batchId: "string",
    batchItemId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `config`                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Available config options for making requests.                                                                                                                                  |


### Response

**Promise<[operations.GetPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/getpaymentsbulkcalculation1099batchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorIdDownload1099YearIndex

Facilitates downloading of the specified 1099 form for a given collaborator, corresponding to the provided year and index.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.getPaymentsCollaboratorIdDownload1099YearIndex({
    id: "<ID>",
    index: "string",
    year: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.GetPaymentsCollaboratorIdDownload1099YearIndexRequest](../../sdk/models/operations/getpaymentscollaboratoriddownload1099yearindexrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdDownload1099YearIndexResponse](../../sdk/models/operations/getpaymentscollaboratoriddownload1099yearindexresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsCollaboratorIdDownloadW9

Enables the downloading of the W9 form for the specified collaborator, ensuring compliance and streamlined financial procedures.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.getPaymentsCollaboratorIdDownloadW9({
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
| `request`                                                                                                                          | [operations.GetPaymentsCollaboratorIdDownloadW9Request](../../sdk/models/operations/getpaymentscollaboratoriddownloadw9request.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetPaymentsCollaboratorIdDownloadW9Response](../../sdk/models/operations/getpaymentscollaboratoriddownloadw9response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkCalculation1099BatchBatchId

Provides the ability to update or alter attributes of a given batch for bulk 1099 calculations by using its unique batch identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkBatchUpdateStatus } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.patchPaymentsBulkCalculation1099BatchBatchId({
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
})();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.PatchPaymentsBulkCalculation1099BatchBatchIdRequest](../../sdk/models/operations/patchpaymentsbulkcalculation1099batchbatchidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PatchPaymentsBulkCalculation1099BatchBatchIdResponse](../../sdk/models/operations/patchpaymentsbulkcalculation1099batchbatchidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId

Make alterations or updates to a specific item within the calculation 1099 batch, ensuring accurate and up-to-date record-keeping.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkCalculation1099ItemUpdateCalculationType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.patchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemId({
    bulkCalculation1099ItemUpdate: {
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
})();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.PatchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdRequest](../../sdk/models/operations/patchpaymentsbulkcalculation1099batchbatchiditembatchitemidrequest.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `config`                                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                 | Available config options for making requests.                                                                                                                                      |


### Response

**Promise<[operations.PatchPaymentsBulkCalculation1099BatchBatchIdItemBatchItemIdResponse](../../sdk/models/operations/patchpaymentsbulkcalculation1099batchbatchiditembatchitemidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkCalculation1099Batch

Allows users to create a new batch for facilitating bulk 1099 calculations by providing necessary batch details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.postPaymentsBulkCalculation1099Batch({
    labels: {
      "key": "string",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.BulkBatchCreate](../../sdk/models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.PostPaymentsBulkCalculation1099BatchResponse](../../sdk/models/operations/postpaymentsbulkcalculation1099batchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsBulkCalculation1099BatchBatchIdItem

Facilitates the incorporation of a new item into the specified calculation 1099 batch, streamlining the process of batch expansion.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import { BulkCalculation1099ItemCreateCalculationType } from "@wingspan/payments/dist/sdk/models/shared";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.postPaymentsBulkCalculation1099BatchBatchIdItem({
    bulkCalculation1099ItemCreate: {
      clientId: "string",
      labels: {
        "key": "string",
      },
      year: 5509.83,
    },
    batchId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.PostPaymentsBulkCalculation1099BatchBatchIdItemRequest](../../sdk/models/operations/postpaymentsbulkcalculation1099batchbatchiditemrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.PostPaymentsBulkCalculation1099BatchBatchIdItemResponse](../../sdk/models/operations/postpaymentsbulkcalculation1099batchbatchiditemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaborator1099Calculate

Analyzes and calculates the appropriate 1099 amounts for collaborators based on provided data and relevant financial parameters.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.postPaymentsCollaborator1099Calculate({
    memberClientId: "string",
    year: 7927.08,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.Calculate1099Request](../../sdk/models/shared/calculate1099request.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPaymentsCollaborator1099CalculateResponse](../../sdk/models/operations/postpaymentscollaborator1099calculateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaborator1099MarkUndelivered

Mark a specific 1099 submission for a collaborator as undelivered, typically due to mail return or incorrect address details.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.postPaymentsCollaborator1099MarkUndelivered({
    memberId: "string",
    submissionIndex: 2792.15,
    year: 7049.25,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.Mark1099AsUndeliveredRequest](../../sdk/models/shared/mark1099asundeliveredrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostPaymentsCollaborator1099MarkUndeliveredResponse](../../sdk/models/operations/postpaymentscollaborator1099markundeliveredresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsCollaborator1099Remail

Initiates a process to resend the 1099 form to a collaborator in the event of a previous failed delivery or at the request of the collaborator.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

(async() => {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.oneThousandAndNinetyNineOperations.postPaymentsCollaborator1099Remail({
    address: {
      addressLine1: "string",
      city: "Johnstonfield",
      postalCode: "98762",
      state: "string",
    },
    memberId: "string",
    year: 1958.97,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.Remail1099Request](../../sdk/models/shared/remail1099request.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PostPaymentsCollaborator1099RemailResponse](../../sdk/models/operations/postpaymentscollaborator1099remailresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
