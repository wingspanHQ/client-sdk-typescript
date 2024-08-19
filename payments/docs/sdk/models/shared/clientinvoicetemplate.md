# ClientInvoiceTemplate

## Example Usage

```typescript
import { ClientInvoiceTemplate } from "@wingspan/payments/sdk/models/shared";

let value: ClientInvoiceTemplate = {
    clientId: "<value>",
    createdAt: "<value>",
    invoiceData: {
        additionalRecipientEmails: ["<value>"],
        amount: 6600.4,
        client: {},
        createdAt: "<value>",
        currency: "CAD",
        dueDate: "<value>",
        events: {},
        invoiceId: "<value>",
        invoiceNumber: "<value>",
        lineItems: [
            {
                costPerUnit: 2065.94,
                createdAt: "<value>",
                labels: {
                    key: "<value>",
                },
                labelsBak2: {
                    key: "<value>",
                },
                quantity: 7786.96,
                reimbursableExpense: false,
                totalCost: 8472.76,
                unit: "steradian",
                updatedAt: "<value>",
            },
        ],
        member: {},
        memberAcceptsPayments: false,
        memberAddress: {
            addressLine1: "213 Lacey Avenue",
            city: "Fort Gabe",
            postalCode: "17490",
            state: "Oklahoma",
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
            clientUserAccountType: "enterprise",
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
            status: "Inactive",
            taxStatus: "Complete",
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
        memberPaymentsVersion: 4694.98,
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
            status: "Modified",
        },
    ],
    status: "Draft",
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