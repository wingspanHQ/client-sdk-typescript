# PayrollReportResponse

## Example Usage

```typescript
import { PayrollReportResponse } from "@wingspan/payments/sdk/models/shared";

let value: PayrollReportResponse = {
  invoices: [
    {
      amount: 2001.90,
      createdAt: "1724625878587",
      currency: "Rial Omani",
      dueDate: "<value>",
      invoiceId: "<id>",
      invoiceNumber: "<value>",
      invoicePdf: "<value>",
      lineItems: [
        {
          costPerUnit: 1220.86,
          createdAt: "1711568302457",
          index: 600.78,
          labels: {
            "key": "<value>",
          },
          labelsBak2: {
            "key": "<value>",
          },
          quantity: 2098.60,
          reimbursableExpense: false,
          totalCost: 1323.06,
          unit: "candela",
          updatedAt: "1734890373430",
        },
      ],
      member: {
        user: {},
      },
      memberClientId: "<id>",
      memberId: "<id>",
      receiptPdf: "<value>",
      status: "Draft",
      updatedAt: "1734839949892",
    },
  ],
  parentInvoice: {
    createdAt: "1707612849471",
    dueDate: "<value>",
    invoiceId: "<id>",
    invoiceNumber: "<value>",
    status: "Overdue",
    updatedAt: "1734856961483",
  },
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invoices`                                                                                                                                                                            | [shared.PayrollReportInvoice](../../../sdk/models/shared/payrollreportinvoice.md)[]                                                                                                   | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |
| `parentInvoice`                                                                                                                                                                       | [shared.FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07](../../../sdk/models/shared/fortytwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07.md) | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |