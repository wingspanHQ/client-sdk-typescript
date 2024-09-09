# ClientInvoiceTemplate

## Example Usage

```typescript
import { ClientInvoiceTemplate } from "@wingspan/payments/sdk/models/shared";

let value: ClientInvoiceTemplate = {
    clientId: "<value>",
    createdAt: "<value>",
    invoiceData: {
        additionalRecipientEmails: ["<value>"],
        amount: 5876,
        client: {},
        createdAt: "<value>",
        currency: "USD",
        dueDate: "<value>",
        events: {},
        invoiceId: "<value>",
        invoiceNumber: "<value>",
        lineItems: [
            {
                costPerUnit: 2728.22,
                createdAt: "<value>",
                labels: {
                    key: "<value>",
                },
                labelsBak2: {
                    key: "<value>",
                },
                quantity: 8920.5,
                reimbursableExpense: false,
                totalCost: 3708.53,
                unit: "ampere",
                updatedAt: "<value>",
            },
        ],
        member: {},
        memberAcceptsPayments: false,
        memberAddress: {
            addressLine1: "74907 Kulas Circle",
            city: "Josiahside",
            postalCode: "45491",
            state: "North Carolina",
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
            clientId: "<value>",
            clientUserAccountType: "member",
            createdAt: "<value>",
            emailTo: "<value>",
            eventActors: {
                key: "<value>",
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
                key: "<value>",
            },
            member: {
                user: {},
            },
            memberClientId: "<value>",
            memberData: {},
            memberId: "<value>",
            parentMemberClientId: "<value>",
            payerPayeeId: "<value>",
            status: "Active",
            taxStatus: "Incomplete",
            updatedAt: "<value>",
            userRoles: {
                ownerIds: ["<value>"],
                viewerIds: ["<value>"],
            },
        },
        memberCompany: "<value>",
        memberEmail: "<value>",
        memberLogoUrl: "<value>",
        memberName: "<value>",
        memberPaymentsVersion: 4304.02,
        memberStripeAccountId: "<value>",
        projectName: "<value>",
        status: "Cancelled",
        updatedAt: "<value>",
    },
    invoiceTemplateId: "<value>",
    memberId: "<value>",
    nextInvoiceDate: "<value>",
    scheduleDates: [
        {
            date: "<value>",
            status: "Skipped",
        },
    ],
    status: "Active",
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