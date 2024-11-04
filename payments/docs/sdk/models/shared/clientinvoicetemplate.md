# ClientInvoiceTemplate

## Example Usage

```typescript
import { ClientInvoiceTemplate } from "@wingspan/payments/sdk/models/shared";

let value: ClientInvoiceTemplate = {
  clientId: "<id>",
  createdAt: "<value>",
  invoiceData: {
    additionalRecipientEmails: [
      "<value>",
    ],
    amount: 7239.41,
    client: {},
    createdAt: "<value>",
    currency: "CAD",
    dueDate: "<value>",
    events: {},
    invoiceId: "<id>",
    invoiceNumber: "<value>",
    lineItems: [
      {
        costPerUnit: 9222.99,
        createdAt: "<value>",
        labels: {
          "key": "<value>",
        },
        labelsBak2: {
          "key": "<value>",
        },
        quantity: 4923.61,
        reimbursableExpense: false,
        totalCost: 8738.32,
        unit: "siemens",
        updatedAt: "<value>",
      },
    ],
    member: {},
    memberAcceptsPayments: false,
    memberAddress: {
      addressLine1: "70325 Broadway Avenue",
      city: "Treverburgh",
      postalCode: "50470-8502",
      state: "West Virginia",
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
      clientUserAccountType: "enterprise",
      createdAt: "<value>",
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
      taxStatus: "Failed",
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
    memberCompany: "<value>",
    memberEmail: "<value>",
    memberLogoUrl: "https://ajar-handover.info/",
    memberName: "<value>",
    memberPaymentsVersion: 2436.78,
    memberStripeAccountId: "<id>",
    projectName: "<value>",
    status: "Pending",
    updatedAt: "<value>",
  },
  invoiceTemplateId: "<id>",
  memberId: "<id>",
  nextInvoiceDate: "<value>",
  scheduleDates: [
    {
      date: "2024-08-05",
      status: "Pending",
    },
  ],
  status: "Expired",
  updatedAt: "<value>",
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