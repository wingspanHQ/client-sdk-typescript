# InvoiceTemplate

## Example Usage

```typescript
import { InvoiceTemplate } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceTemplate = {
  createdAt: "<value>",
  eventActors: {
    "key": "<value>",
  },
  invoiceData: {
    amount: 832.91,
    client: {},
    createdAt: "<value>",
    currency: "USD",
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
        costPerUnit: 9655.17,
        createdAt: "<value>",
        labels: {
          "key": "<value>",
        },
        labelsBak2: {
          "key": "<value>",
        },
        quantity: 8590.03,
        reimbursableExpense: false,
        totalCost: 1520.27,
        unit: "meter",
        updatedAt: "<value>",
      },
    ],
    member: {},
    memberAddress: {
      addressLine1: "316 Dillan Wall",
      city: "Lebsackview",
      postalCode: "19860-7953",
      state: "Connecticut",
    },
    memberClientId: "<id>",
    memberId: "<id>",
    payments: [
      {
        amount: 7549.01,
        createdAt: "<value>",
        events: {},
        labels: {
          "key": "<value>",
        },
        paymentId: "<id>",
        sourceId: "<id>",
        sourceMetadata: {},
        sourceType: "InternalAccount",
        status: "Created",
        updatedAt: "<value>",
      },
    ],
    status: "PaymentInTransit",
    updatedAt: "<value>",
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
  status: "Active",
  updatedAt: "<value>",
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