# LineItemsAgingReportResponse

## Example Usage

```typescript
import { LineItemsAgingReportResponse } from "@wingspan/payments/sdk/models/shared";

let value: LineItemsAgingReportResponse = {
  ageGroup: "<value>",
  amount: 8174.53,
  createdAt: "<value>",
  currency: "Saint Helena Pound",
  dueDate: "<value>",
  invoiceId: "<id>",
  invoiceNumber: "<value>",
  invoicePdf: "<value>",
  lineItems: [
    {
      costPerUnit: 6778.95,
      createdAt: "<value>",
      index: 3198.34,
      labels: {
        "key": "<value>",
      },
      labelsBak2: {
        "key": "<value>",
      },
      quantity: 1964.51,
      reimbursableExpense: false,
      totalCost: 6715.28,
      unit: "siemens",
      updatedAt: "<value>",
    },
  ],
  member: {
    user: {},
  },
  memberClientId: "<id>",
  memberId: "<id>",
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