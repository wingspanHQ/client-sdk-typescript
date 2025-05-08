# PayrollReportResponse

## Example Usage

```typescript
import { PayrollReportResponse } from "@wingspan/payments/sdk/models/shared";

let value: PayrollReportResponse = {
  invoices: [
    {
      amount: 2001.9,
      createdAt: "1727649873841",
      currency: "Rial Omani",
      dueDate: "<value>",
      invoiceId: "<id>",
      invoiceNumber: "<value>",
      invoicePdf: "<value>",
      lineItems: [
        {
          costPerUnit: 1220.85,
          createdAt: "1714592297713",
          index: 600.78,
          labels: {
            "key": "<value>",
          },
          labelsBak2: {
            "key": "<value>",
          },
          quantity: 2098.6,
          reimbursableExpense: false,
          totalCost: 1323.05,
          unit: "candela",
          updatedAt: "1737914368687",
        },
      ],
      member: {
        user: {},
      },
      memberClientId: "<id>",
      memberId: "<id>",
      receiptPdf: "<value>",
      status: "Draft",
      updatedAt: "1737863945151",
    },
  ],
  parentInvoice: {
    createdAt: "1710636844731",
    dueDate: "<value>",
    invoiceId: "<id>",
    invoiceNumber: "<value>",
    status: "Overdue",
    updatedAt: "1737880956744",
  },
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invoices`                                                                                                                                                                            | [shared.PayrollReportInvoice](../../../sdk/models/shared/payrollreportinvoice.md)[]                                                                                                   | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |
| `parentInvoice`                                                                                                                                                                       | [shared.FortyTwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07](../../../sdk/models/shared/fortytwof004011439ceedfeb392c84d36ad40443a5a0446d1efa02369c56e930a1c07.md) | :heavy_check_mark:                                                                                                                                                                    | N/A                                                                                                                                                                                   |