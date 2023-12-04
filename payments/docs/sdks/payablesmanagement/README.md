# PayablesManagement
(*payablesManagement*)

## Overview

Endpoints dealing with payables, including creating, listing, updating, and deleting payables. It also includes summary endpoints and immediate payroll payables.

### Available Operations

* [deletePaymentsPayableId](#deletepaymentspayableid) - Delete Client Payable by Payable ID
* [getPaymentsPayable](#getpaymentspayable) - List All Payables Associated with a Client
* [getPaymentsPayableId](#getpaymentspayableid) - Retrieve Payable Details by Payable ID
* [getPaymentsPayrollImmediatePayable](#getpaymentspayrollimmediatepayable) - Retrieve Approved Payables Ready for Immediate Payroll
* [getPaymentsSummaryPayables](#getpaymentssummarypayables) - Retrieve Summary of All Payables
* [patchPaymentsPayableId](#patchpaymentspayableid) - Update Client Payable Information by Payable ID
* [postPaymentsPayApproved](#postpaymentspayapproved) - Execute Approved Payroll Transactions
* [postPaymentsPayable](#postpaymentspayable) - Create a New Payable for a Member on Behalf of a Client

## deletePaymentsPayableId

This API endpoint is designed to remove the payable information related to a client using a unique Payable ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.payablesManagement.deletePaymentsPayableId({
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
| `request`                                                                                                  | [operations.DeletePaymentsPayableIdRequest](../../sdk/models/operations/deletepaymentspayableidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeletePaymentsPayableIdResponse](../../sdk/models/operations/deletepaymentspayableidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsPayable

Provides an list of all Payables associated with a specific client, facilitating easier management and overview of the client's financial obligations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.payablesManagement.getPaymentsPayable();

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

**Promise<[operations.GetPaymentsPayableResponse](../../sdk/models/operations/getpaymentspayableresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsPayableId

This API endpoint is designed to fetch the detailed Payable information of a member using a unique Payable ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.payablesManagement.getPaymentsPayableId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetPaymentsPayableIdRequest](../../sdk/models/operations/getpaymentspayableidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetPaymentsPayableIdResponse](../../sdk/models/operations/getpaymentspayableidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsPayrollImmediatePayable

Fetches all payables that have been approved and are awaiting immediate payroll processing. This provides a quick view of all payments that are due for immediate payroll execution.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.payablesManagement.getPaymentsPayrollImmediatePayable();

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

**Promise<[operations.GetPaymentsPayrollImmediatePayableResponse](../../sdk/models/operations/getpaymentspayrollimmediatepayableresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getPaymentsSummaryPayables

This endpoint provides a comprehensive summary of all the payables, offering insights into the current state of pending and completed payments. Ideal for clients and financial departments looking for a snapshot view of their payment obligations.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.payablesManagement.getPaymentsSummaryPayables();

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

**Promise<[operations.GetPaymentsSummaryPayablesResponse](../../sdk/models/operations/getpaymentssummarypayablesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsPayableId

This API endpoint facilitates the updating of existing payable details related to a client using a unique Payable ID.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyUpdateInterval,
  PayableUpdateRequestAcceptedPaymentMethods,
  PayableUpdateRequestStatus,
  PaymentMethods,
  PayoutPendingReason,
  PendingStatusReason,
} from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.payablesManagement.patchPaymentsPayableId({
    payableUpdateRequest: {
      acceptedPaymentMethods: [
        PayableUpdateRequestAcceptedPaymentMethods.Manual,
      ],
      attachments: {
        customAttachmentIds: [
          "string",
        ],
      },
      chargedFees: {
        lateFee: {
          amount: 3849.35,
        },
        processingFee: {
          amount: 4578.3,
        },
      },
      client: {},
      collaborators: [
        {},
      ],
      creditFeeHandling: {},
      integration: {
        quickbooks: {},
      },
      labels: {
        "key": "string",
      },
      lateFeeHandling: {
        frequency: {},
      },
      lineItems: [
        {
          discount: {},
          integration: {
            quickbooks: {},
          },
          labels: {
            "key": "string",
          },
        },
      ],
      member: {},
      metadata: {},
      notificationPreferences: {
        sendReminders: false,
      },
      paymentMethods: [
        PaymentMethods.Ach,
      ],
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

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchPaymentsPayableIdRequest](../../sdk/models/operations/patchpaymentspayableidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchPaymentsPayableIdResponse](../../sdk/models/operations/patchpaymentspayableidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsPayApproved

Processes all approved payroll transactions, ensuring employees and vendors are compensated as per their respective invoices.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.payablesManagement.postPaymentsPayApproved();

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

**Promise<[operations.PostPaymentsPayApprovedResponse](../../sdk/models/operations/postpaymentspayapprovedresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postPaymentsPayable

Allows for the generation of a new Payables for a specific member on behalf of a client. This ensures streamlined billing and effective financial tracking between clients and members.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  FrequencyUpdateInterval,
  PayableCreateRequestAcceptedPaymentMethods,
  PayableCreateRequestCurrency,
  PayableCreateRequestStatus,
  PayoutPendingReason,
  PendingStatusReason,
} from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "",
  });

  const res = await sdk.payablesManagement.postPaymentsPayable({
    acceptedPaymentMethods: [
      PayableCreateRequestAcceptedPaymentMethods.Credit,
    ],
    attachments: {
      customAttachmentIds: [
        "string",
      ],
    },
    client: {},
    collaboratorId: "string",
    creditFeeHandling: {},
    dueDate: "string",
    integration: {
      quickbooks: {},
    },
    labels: {
      "key": "string",
    },
    lateFeeHandling: {
      frequency: {},
    },
    lineItems: [
      {
        discount: {},
        integration: {
          quickbooks: {},
        },
        labels: {
          "key": "string",
        },
      },
    ],
    member: {},
    metadata: {},
    notificationPreferences: {
      sendReminders: false,
    },
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
| `request`                                                                      | [shared.PayableCreateRequest](../../sdk/models/shared/payablecreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PostPaymentsPayableResponse](../../sdk/models/operations/postpaymentspayableresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
