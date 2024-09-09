# LineItemsAgingReportResponse

## Example Usage

```typescript
import { LineItemsAgingReportResponse } from "@wingspan/payments/sdk/models/shared";

let value: LineItemsAgingReportResponse = {
    ageGroup: "<value>",
    amount: 583.56,
    createdAt: "<value>",
    currency: "European Unit of Account 17(E.U.A.-17)",
    dueDate: "<value>",
    invoiceId: "<value>",
    invoiceNumber: "<value>",
    invoicePdf: "<value>",
    lineItems: [
        {
            costPerUnit: 7307.09,
            createdAt: "<value>",
            index: 1138.16,
            labels: {
                key: "<value>",
            },
            labelsBak2: {
                key: "<value>",
            },
            quantity: 8817.21,
            reimbursableExpense: false,
            totalCost: 6311.26,
            unit: "radian",
            updatedAt: "<value>",
        },
    ],
    member: {
        user: {},
    },
    memberClientId: "<value>",
    memberId: "<value>",
    receiptPdf: "<value>",
    status: "Draft",
    updatedAt: "<value>",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `ageGroup`                                                                                                    | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `amount`                                                                                                      | *number*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `approverName`                                                                                                | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `createdAt`                                                                                                   | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `currency`                                                                                                    | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `dueDate`                                                                                                     | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `invoiceId`                                                                                                   | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `invoiceNumber`                                                                                               | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `invoicePdf`                                                                                                  | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `labels`                                                                                                      | [shared.LineItemsAgingReportResponseLabels](../../../sdk/models/shared/lineitemsagingreportresponselabels.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `lineItems`                                                                                                   | [shared.LineItemsAgingReportLineItem](../../../sdk/models/shared/lineitemsagingreportlineitem.md)[]           | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `member`                                                                                                      | [shared.RedactedMember](../../../sdk/models/shared/redactedmember.md)                                         | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `memberClientId`                                                                                              | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `memberExternalId`                                                                                            | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `memberId`                                                                                                    | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `notes`                                                                                                       | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `paidDate`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `payoutDestination`                                                                                           | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `projectName`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `purchaseOrderNumber`                                                                                         | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `receiptPdf`                                                                                                  | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `sentDate`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `status`                                                                                                      | [shared.LineItemsAgingReportResponseStatus](../../../sdk/models/shared/lineitemsagingreportresponsestatus.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `updatedAt`                                                                                                   | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |