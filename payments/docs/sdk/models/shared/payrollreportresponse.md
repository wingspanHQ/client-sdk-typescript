# PayrollReportResponse

## Example Usage

```typescript
import { PayrollReportResponse } from "@wingspan/payments/sdk/models/shared";

let value: PayrollReportResponse = {
  invoices: [
    {
      amount: 8667.89,
      createdAt: "<value>",
      currency: "Norwegian Krone",
      dueDate: "<value>",
      invoiceId: "<value>",
      invoiceNumber: "<value>",
      invoicePdf: "<value>",
      lineItems: [
        {
          costPerUnit: 4014.28,
          createdAt: "<value>",
          index: 4166.92,
          labels: {
            "key": "<value>",
          },
          labelsBak2: {
            "key": "<value>",
          },
          quantity: 8108.39,
          reimbursableExpense: false,
          totalCost: 3481.92,
          unit: "kilogram",
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
    },
  ],
  parentInvoice: {
    createdAt: "<value>",
    dueDate: "<value>",
    invoiceId: "<value>",
    invoiceNumber: "<value>",
    status: "Paid",
    updatedAt: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invoices`                                                                                                                                                                            | [shared.PayrollReportInvoice](../../../sdk/models/shared/payrollreportinvoice.md)[]                                                                                                   | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |
| `parentInvoice`                                                                                                                                                                       | [shared.FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07](../../../sdk/models/shared/fortytwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07.md) | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |