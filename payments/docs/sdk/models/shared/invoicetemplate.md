# InvoiceTemplate

## Example Usage

```typescript
import { InvoiceTemplate } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceTemplate = {
    createdAt: "<value>",
    eventActors: {
        key: "<value>",
    },
    invoiceData: {
        amount: 4732.21,
        client: {},
        createdAt: "<value>",
        currency: "CAD",
        dueDate: "<value>",
        eventActors: {
            key: "<value>",
        },
        events: {},
        externalIds: {},
        invoiceId: "<value>",
        invoiceNumber: "<value>",
        labels: {
            key: "<value>",
        },
        lineItems: [
            {
                costPerUnit: 5801.97,
                createdAt: "<value>",
                labels: {
                    key: "<value>",
                },
                labelsBak2: {
                    key: "<value>",
                },
                quantity: 3277.2,
                reimbursableExpense: false,
                totalCost: 7162.44,
                unit: "sievert",
                updatedAt: "<value>",
            },
        ],
        member: {},
        memberAddress: {
            addressLine1: "67271 Peyton Garden",
            city: "DeKalb",
            postalCode: "55985",
            state: "Minnesota",
        },
        memberClientId: "<value>",
        memberId: "<value>",
        payments: [
            {
                amount: 974.68,
                createdAt: "<value>",
                events: {},
                labels: {
                    key: "<value>",
                },
                paymentId: "<value>",
                sourceId: "<value>",
                sourceMetadata: {},
                sourceType: "InternalAccount",
                status: "Sent",
                updatedAt: "<value>",
            },
        ],
        status: "Pending",
        updatedAt: "<value>",
        userRoles: {
            ownerIds: ["<value>"],
            viewerIds: ["<value>"],
        },
    },
    invoiceTemplateId: "<value>",
    labels: {
        key: "<value>",
    },
    memberId: "<value>",
    status: "Cancelled",
    updatedAt: "<value>",
    userRoles: {
        ownerIds: ["<value>"],
        viewerIds: ["<value>"],
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