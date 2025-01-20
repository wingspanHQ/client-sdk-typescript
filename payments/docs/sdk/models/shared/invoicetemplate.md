# InvoiceTemplate

## Example Usage

```typescript
import { InvoiceTemplate } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceTemplate = {
  createdAt: "1732663392195",
  eventActors: {
    "key": "<value>",
  },
  invoiceData: {
    amount: 9623.96,
    client: {},
    createdAt: "1709286188536",
    currency: "CAD",
    dueDate: "<value>",
    eventActors: {
      "key": "<value>",
    },
    events: {},
    externalIds: {},
    invoiceId: "<id>",
    invoiceNumber: "<value>",
    labels: {
      "key": "<value>",
    },
    lineItems: [
      {
        costPerUnit: 9979.94,
        createdAt: "1736954829441",
        labels: {
          "key": "<value>",
        },
        labelsBak2: {
          "key": "<value>",
        },
        quantity: 6033.23,
        reimbursableExpense: false,
        totalCost: 1280.2,
        unit: "tesla",
        updatedAt: "1737250535967",
      },
    ],
    member: {},
    memberAddress: {
      addressLine1: "93629 Greenville Road",
      city: "Brekkeview",
      postalCode: "61325",
      state: "Louisiana",
    },
    memberClientId: "<id>",
    memberId: "<id>",
    payments: [
      {
        amount: 7064.11,
        createdAt: "1706575818600",
        events: {},
        labels: {
          "key": "<value>",
        },
        paymentId: "<id>",
        sourceId: "<id>",
        sourceMetadata: {},
        sourceType: "Card",
        status: "Failed",
        updatedAt: "1737273573778",
      },
    ],
    status: "PaymentInTransit",
    updatedAt: "1737332917742",
    userRoles: {
      ownerIds: [
        "<value>",
      ],
      viewerIds: [
        "<value>",
      ],
    },
  },
  invoiceTemplateId: "<id>",
  labels: {
    "key": "<value>",
  },
  memberId: "<id>",
  status: "Draft",
  updatedAt: "1737321792738",
  userRoles: {
    ownerIds: [
      "<value>",
    ],
    viewerIds: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `accountId`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `autoPaymentRequired`                                                               | *boolean*                                                                           | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `createdAt`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `createdInvoiceId`                                                                  | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `dueInDays`                                                                         | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `eventActors`                                                                       | Record<string, *string*>                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `frequency`                                                                         | [shared.Frequency](../../../sdk/models/shared/frequency.md)                         | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `invoiceData`                                                                       | [shared.Invoice](../../../sdk/models/shared/invoice.md)                             | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `invoiceTemplateId`                                                                 | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `isSchedulingOnly`                                                                  | *boolean*                                                                           | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `labels`                                                                            | Record<string, *string*>                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `lastInvoiceDate`                                                                   | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `memberId`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `nextInvoiceDate`                                                                   | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `paymentMethodId`                                                                   | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `scheduleDates`                                                                     | [shared.ScheduleDate](../../../sdk/models/shared/scheduledate.md)[]                 | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `status`                                                                            | [shared.InvoiceTemplateStatus](../../../sdk/models/shared/invoicetemplatestatus.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `updatedAt`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `userRoles`                                                                         | [shared.UserRoles](../../../sdk/models/shared/userroles.md)                         | :heavy_check_mark:                                                                  | N/A                                                                                 |