# ClientInvoiceTemplate

## Example Usage

```typescript
import { ClientInvoiceTemplate } from "@wingspan/payments/sdk/models/shared";

let value: ClientInvoiceTemplate = {
  clientId: "<id>",
  createdAt: "1729739681933",
  invoiceData: {
    additionalRecipientEmails: [
      "<value>",
    ],
    amount: 8483.45,
    client: {},
    createdAt: "1720661847242",
    currency: "USD",
    dueDate: "<value>",
    events: {},
    invoiceId: "<id>",
    invoiceNumber: "<value>",
    lineItems: [
      {
        costPerUnit: 9958.15,
        createdAt: "1709275328652",
        labels: {
          "key": "<value>",
        },
        labelsBak2: {
          "key": "<value>",
        },
        quantity: 4714.57,
        reimbursableExpense: false,
        totalCost: 680.93,
        unit: "lux",
        updatedAt: "1736728934052",
      },
    ],
    member: {},
    memberAcceptsPayments: false,
    memberAddress: {
      addressLine1: "422 Julian Coves",
      city: "Lake Monique",
      postalCode: "46849",
      state: "Indiana",
    },
    memberClient: {
      achCreditAccount: {
        accountNumber: "<value>",
        bankName: "<value>",
      },
      client: {
        user: {},
      },
      clientData: {},
      clientId: "<id>",
      clientUserAccountType: "member",
      createdAt: "1720451595362",
      emailTo: "<value>",
      eventActors: {
        "key": "<value>",
      },
      events: {},
      externalIds: {},
      form1099Balances: {},
      formW9Data: {},
      internationalWireAccount: {
        accountNumber: "<value>",
        bankName: "<value>",
      },
      labels: {
        "key": "<value>",
      },
      member: {
        user: {},
      },
      memberClientId: "<id>",
      memberData: {},
      memberId: "<id>",
      parentMemberClientId: "<id>",
      payerPayeeId: "<id>",
      status: "Active",
      taxStatus: "Incomplete",
      updatedAt: "1736665676834",
      userRoles: {
        ownerIds: [
          "<value>",
        ],
        viewerIds: [
          "<value>",
        ],
      },
    },
    memberCompany: "<value>",
    memberEmail: "<value>",
    memberLogoUrl: "https://squiggly-provider.name/",
    memberName: "<value>",
    memberPaymentsVersion: 7049.48,
    memberStripeAccountId: "<id>",
    projectName: "<value>",
    status: "Overdue",
    updatedAt: "1736646024292",
  },
  invoiceTemplateId: "<id>",
  memberId: "<id>",
  nextInvoiceDate: "<value>",
  scheduleDates: [
    {
      date: "2024-01-18",
      status: "Skipped",
    },
  ],
  status: "Active",
  updatedAt: "1736649978381",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `accountId`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `clientId`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdAt`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdInvoiceId`                                                                              | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `dueInDays`                                                                                     | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `frequency`                                                                                     | [shared.Frequency](../../../sdk/models/shared/frequency.md)                                     | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `invoiceData`                                                                                   | [shared.ClientInvoice](../../../sdk/models/shared/clientinvoice.md)                             | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `invoiceTemplateId`                                                                             | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `memberId`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `nextInvoiceDate`                                                                               | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `paymentMethodId`                                                                               | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `scheduleDates`                                                                                 | [shared.ScheduleDate](../../../sdk/models/shared/scheduledate.md)[]                             | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `status`                                                                                        | [shared.ClientInvoiceTemplateStatus](../../../sdk/models/shared/clientinvoicetemplatestatus.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `updatedAt`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |