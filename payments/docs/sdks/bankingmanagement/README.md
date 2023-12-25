# BankingManagement
(*bankingManagement*)

## Overview

These endpoints cater to fetching, storing, and managing documents related to electronic signatures, including retrieval of signing URLs and saving e-signed documents.

### Available Operations

* [deletePaymentsPayoutSettingsMemberIdDebitCardId](#deletepaymentspayoutsettingsmemberiddebitcardid) - Unlink and delete a specific payout debit card from a member's profile
* [getPaymentsBankingInstitutionRoutingNumber](#getpaymentsbankinginstitutionroutingnumber) - Retrieve banking institution details by its routing number
* [getPaymentsBankingStatement](#getpaymentsbankingstatement) - Retrieve All Bank Statements
* [getPaymentsBankingStatementId](#getpaymentsbankingstatementid) - Retrieve Specific Bank Statement
* [getPaymentsBankingStatementIdDownload](#getpaymentsbankingstatementiddownload) - Download a specific bank statement as a PDF
* [getPaymentsPayoutSettingsId](#getpaymentspayoutsettingsid) - Retrieve payout settings for a specific member
* [getPaymentsPayoutSettingsMemberIdDebitCard](#getpaymentspayoutsettingsmemberiddebitcard) - Fetch all registered payout debit cards for a member
* [getPaymentsPayoutSettingsMemberIdDebitCardId](#getpaymentspayoutsettingsmemberiddebitcardid) - Retrieve a specific payout debit card linked to a member
* [getPaymentsServiceBankingMemberIdApplication](#getpaymentsservicebankingmemberidapplication) - Fetch the application link for setting up a clearing bank account
* [patchPaymentsPayoutSettingsId](#patchpaymentspayoutsettingsid) - Modify and update payout settings for a specific member
* [postPaymentsPayoutSettingsMemberIdDebitCard](#postpaymentspayoutsettingsmemberiddebitcard) - Register a new payout debit card for a member

## deletePaymentsPayoutSettingsMemberIdDebitCardId

Initiates a process to remove and permanently delete a specific debit card from a member's payout settings.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.bankingManagement.deletePaymentsPayoutSettingsMemberIdDebitCardId({
    id: "<ID>",
    memberId: "string",
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
| `request`                                                                                                                                                  | [operations.DeletePaymentsPayoutSettingsMemberIdDebitCardIdRequest](../../sdk/models/operations/deletepaymentspayoutsettingsmemberiddebitcardidrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.DeletePaymentsPayoutSettingsMemberIdDebitCardIdResponse](../../sdk/models/operations/deletepaymentspayoutsettingsmemberiddebitcardidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsBankingInstitutionRoutingNumber

Fetches comprehensive information about a banking institution based on the provided routing number.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.bankingManagement.getPaymentsBankingInstitutionRoutingNumber({
    routingNumber: "string",
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
| `request`                                                                                                                                        | [operations.GetPaymentsBankingInstitutionRoutingNumberRequest](../../sdk/models/operations/getpaymentsbankinginstitutionroutingnumberrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.GetPaymentsBankingInstitutionRoutingNumberResponse](../../sdk/models/operations/getpaymentsbankinginstitutionroutingnumberresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsBankingStatement

Fetch a comprehensive list of all bank statements available in the system, providing an overview of financial transactions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.bankingManagement.getPaymentsBankingStatement();

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

**Promise<[operations.GetPaymentsBankingStatementResponse](../../sdk/models/operations/getpaymentsbankingstatementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsBankingStatementId

Fetch details of a specific bank statement using its unique identifier, providing a detailed view of its transactions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.bankingManagement.getPaymentsBankingStatementId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetPaymentsBankingStatementIdRequest](../../sdk/models/operations/getpaymentsbankingstatementidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetPaymentsBankingStatementIdResponse](../../sdk/models/operations/getpaymentsbankingstatementidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsBankingStatementIdDownload

Retrieve and download the specified bank statement in PDF format using the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.bankingManagement.getPaymentsBankingStatementIdDownload({
    id: "<ID>",
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
| `request`                                                                                                                              | [operations.GetPaymentsBankingStatementIdDownloadRequest](../../sdk/models/operations/getpaymentsbankingstatementiddownloadrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetPaymentsBankingStatementIdDownloadResponse](../../sdk/models/operations/getpaymentsbankingstatementiddownloadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsPayoutSettingsId

Fetches the payout configuration, including linked debit cards and payout preferences, for a specific member.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.bankingManagement.getPaymentsPayoutSettingsId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetPaymentsPayoutSettingsIdRequest](../../sdk/models/operations/getpaymentspayoutsettingsidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetPaymentsPayoutSettingsIdResponse](../../sdk/models/operations/getpaymentspayoutsettingsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsPayoutSettingsMemberIdDebitCard

Retrieves a list of all debit cards linked to a member's profile for payout purposes.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.bankingManagement.getPaymentsPayoutSettingsMemberIdDebitCard({
    memberId: "string",
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
| `request`                                                                                                                                        | [operations.GetPaymentsPayoutSettingsMemberIdDebitCardRequest](../../sdk/models/operations/getpaymentspayoutsettingsmemberiddebitcardrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.GetPaymentsPayoutSettingsMemberIdDebitCardResponse](../../sdk/models/operations/getpaymentspayoutsettingsmemberiddebitcardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsPayoutSettingsMemberIdDebitCardId

Fetches detailed information of a specific debit card linked to a member's profile for payout purposes.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.bankingManagement.getPaymentsPayoutSettingsMemberIdDebitCardId({
    id: "<ID>",
    memberId: "string",
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
| `request`                                                                                                                                            | [operations.GetPaymentsPayoutSettingsMemberIdDebitCardIdRequest](../../sdk/models/operations/getpaymentspayoutsettingsmemberiddebitcardidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.GetPaymentsPayoutSettingsMemberIdDebitCardIdResponse](../../sdk/models/operations/getpaymentspayoutsettingsmemberiddebitcardidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsServiceBankingMemberIdApplication

Get the application link required for a member to initiate the creation of a clearing bank account.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.bankingManagement.getPaymentsServiceBankingMemberIdApplication({
    memberId: "string",
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
| `request`                                                                                                                                            | [operations.GetPaymentsServiceBankingMemberIdApplicationRequest](../../sdk/models/operations/getpaymentsservicebankingmemberidapplicationrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.GetPaymentsServiceBankingMemberIdApplicationResponse](../../sdk/models/operations/getpaymentsservicebankingmemberidapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchPaymentsPayoutSettingsId

Allows adjustments and updates to a member's payout configuration, including changing linked debit cards and adjusting payout preferences.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  PayoutDestinationUpdateDestinationType,
  PayoutDestinationUpdatePayoutMethod,
  PayoutSettingsUpdatePayoutPreferences,
} from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.bankingManagement.patchPaymentsPayoutSettingsId({
    payoutSettingsUpdate: {
      payoutDestinations: [
        {},
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

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PatchPaymentsPayoutSettingsIdRequest](../../sdk/models/operations/patchpaymentspayoutsettingsidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PatchPaymentsPayoutSettingsIdResponse](../../sdk/models/operations/patchpaymentspayoutsettingsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postPaymentsPayoutSettingsMemberIdDebitCard

Allows the addition of a new debit card to a member's profile for payout transactions.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.bankingManagement.postPaymentsPayoutSettingsMemberIdDebitCard({
    checkbookCardCreate: {
      address: {
        addressLine1: "string",
        city: "Lake Alvenaview",
        postalCode: "60430",
        state: "string",
      },
      cardNumber: "string",
      expMM: "string",
      expYYYY: "string",
      name: "string",
    },
    memberId: "string",
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
| `request`                                                                                                                                          | [operations.PostPaymentsPayoutSettingsMemberIdDebitCardRequest](../../sdk/models/operations/postpaymentspayoutsettingsmemberiddebitcardrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PostPaymentsPayoutSettingsMemberIdDebitCardResponse](../../sdk/models/operations/postpaymentspayoutsettingsmemberiddebitcardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
