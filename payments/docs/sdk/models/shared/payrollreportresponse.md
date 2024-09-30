# PayrollReportResponse

## Example Usage

```typescript
import { PayrollReportResponse } from "@wingspan/payments/sdk/models/shared";

let value: PayrollReportResponse = {
  invoices: [
    {
      amount: 9853.79,
      createdAt: "<value>",
      currency: "Uganda Shilling",
      dueDate: "<value>",
      invoiceId: "<id>",
      invoiceNumber: "<value>",
      invoicePdf: "<value>",
      lineItems: [
        {
          costPerUnit: 7650.70,
          createdAt: "<value>",
          index: 3135.91,
          labels: {
            "key": "<value>",
          },
          labelsBak2: {
            "key": "<value>",
          },
          quantity: 3655.39,
          reimbursableExpense: false,
          totalCost: 2012.67,
          unit: "volt",
          updatedAt: "<value>",
        },
      ],
      member: {
        user: {},
      },
      memberClientId: "<id>",
      memberId: "<id>",
      receiptPdf: "<value>",
      status: "Paid",
      updatedAt: "<value>",
    },
  ],
  parentInvoice: {
    createdAt: "<value>",
    dueDate: "<value>",
    invoiceId: "<id>",
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