# LineItemsAgingReportResponse

## Example Usage

```typescript
import { LineItemsAgingReportResponse } from "@wingspan/payments/sdk/models/shared";

let value: LineItemsAgingReportResponse = {
  ageGroup: "<value>",
  amount: 2277.41,
  createdAt: "1718681236474",
  currency: "Manat",
  dueDate: "<value>",
  invoiceId: "<id>",
  invoiceNumber: "<value>",
  invoicePdf: "<value>",
  lineItems: [
    {
      costPerUnit: 2218.24,
      createdAt: "1720168219862",
      index: 9296.19,
      labels: {
        "key": "<value>",
      },
      labelsBak2: {
        "key": "<value>",
      },
      quantity: 6672.15,
      reimbursableExpense: false,
      totalCost: 7980.79,
      unit: "ohm",
      updatedAt: "1736125474097",
    },
  ],
  member: {
    user: {},
  },
  memberClientId: "<id>",
  memberId: "<id>",
  receiptPdf: "<value>",
  status: "Pending",
  updatedAt: "1736044694858",
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