# ReportingAndAnalytics
(*reportingAndAnalytics*)

## Overview

Includes endpoints for generating various reports and analytics, such as payables reports, collaborators reports, and aging reports.

### Available Operations

* [getPaymentsReportsAgingLineItems](#getpaymentsreportsaginglineitems) - Obtain Aging Report for Line Items
* [getPaymentsReportsAgingPayables](#getpaymentsreportsagingpayables) - Retrieve Aging Report for Payables
* [getPaymentsReportsCollaborators](#getpaymentsreportscollaborators) - Retrieve detailed information on all collaborators
* [getPaymentsReportsCollaboratorsPayablesSummary](#getpaymentsreportscollaboratorspayablessummary) - Obtain a summarized report of payable amounts for each collaborator
* [getPaymentsReportsPayrollPayrollId](#getpaymentsreportspayrollpayrollid) - Extract detailed report of payables associated with a particular payroll run

## getPaymentsReportsAgingLineItems

Retrieve a comprehensive report detailing line items that have been open for a set number of days.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.reportingAndAnalytics.getPaymentsReportsAgingLineItems();

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

**Promise<[operations.GetPaymentsReportsAgingLineItemsResponse](../../sdk/models/operations/getpaymentsreportsaginglineitemsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsReportsAgingPayables

Access a detailed report that showcases the list of payables categorized by age.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.reportingAndAnalytics.getPaymentsReportsAgingPayables();

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

**Promise<[operations.GetPaymentsReportsAgingPayablesResponse](../../sdk/models/operations/getpaymentsreportsagingpayablesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsReportsCollaborators

Fetches comprehensive data on all collaborators, including their activities and current status, as listed in the reports.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.reportingAndAnalytics.getPaymentsReportsCollaborators();

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

**Promise<[operations.GetPaymentsReportsCollaboratorsResponse](../../sdk/models/operations/getpaymentsreportscollaboratorsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsReportsCollaboratorsPayablesSummary

Gathers and presents a concise summary showcasing the payable amounts due to each collaborator, helping in financial planning and payout strategies.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.reportingAndAnalytics.getPaymentsReportsCollaboratorsPayablesSummary();

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

**Promise<[operations.GetPaymentsReportsCollaboratorsPayablesSummaryResponse](../../sdk/models/operations/getpaymentsreportscollaboratorspayablessummaryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getPaymentsReportsPayrollPayrollId

Offers a deep dive into the payables connected to a specific payroll run, facilitating better management and reconciliation of payroll-related finances.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.reportingAndAnalytics.getPaymentsReportsPayrollPayrollId({
    payrollId: "string",
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
| `request`                                                                                                                        | [operations.GetPaymentsReportsPayrollPayrollIdRequest](../../sdk/models/operations/getpaymentsreportspayrollpayrollidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetPaymentsReportsPayrollPayrollIdResponse](../../sdk/models/operations/getpaymentsreportspayrollpayrollidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
