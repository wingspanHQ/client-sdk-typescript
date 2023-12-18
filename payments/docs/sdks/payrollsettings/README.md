# PayrollSettings
(*payrollSettings*)

## Overview

Covers endpoints that manage payout settings and related configurations.

### Available Operations

* [getPaymentsPayrollSettingsId](#getpaymentspayrollsettingsid) - Retrieve Individual Payroll Settings
* [patchPaymentsPayrollSettingsId](#patchpaymentspayrollsettingsid) - Modify Existing Payroll Settings

## getPaymentsPayrollSettingsId

Fetch the detailed payroll settings associated with the provided unique identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.payrollSettings.getPaymentsPayrollSettingsId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetPaymentsPayrollSettingsIdRequest](../../sdk/models/operations/getpaymentspayrollsettingsidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetPaymentsPayrollSettingsIdResponse](../../sdk/models/operations/getpaymentspayrollsettingsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchPaymentsPayrollSettingsId

Update certain attributes or details of payroll settings associated with the provided identifier.

### Example Usage

```typescript
import { Payments } from "@wingspan/payments";
import {
  CardProcessingFees,
  FrequencyUpdateInterval,
  FundingSourceCurrency,
  FundingSourceType,
  OffPlatformPayments,
  PayrollSettingsUpdateStatus,
  PayrollSettingsUpdateWorkflow,
  ReimbursableExpenses,
  ScheduleDateUpdateStatus,
} from "@wingspan/payments/dist/sdk/models/shared";

async function run() {
  const sdk = new Payments({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.payrollSettings.patchPaymentsPayrollSettingsId({
    payrollSettingsUpdate: {
      calculationSettings1099: {
        stateTaxId: {
          "key": "string",
        },
      },
      frequency: {},
      fundingSource: {
        fundingSourceCurrency: FundingSourceCurrency.Cad,
        fundingSourceId: "string",
        fundingSourceType: FundingSourceType.Account,
      },
      scheduleDates: [
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

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PatchPaymentsPayrollSettingsIdRequest](../../sdk/models/operations/patchpaymentspayrollsettingsidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PatchPaymentsPayrollSettingsIdResponse](../../sdk/models/operations/patchpaymentspayrollsettingsidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
