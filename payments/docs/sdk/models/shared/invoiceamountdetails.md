# InvoiceAmountDetails

## Example Usage

```typescript
import { InvoiceAmountDetails } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceAmountDetails = {
  clientPaid: 3447.18,
  collaboratorPayments: 7137.67,
  deductions: 6391.87,
  memberGross: 3991.61,
  memberNet: 4317.60,
  memberTaxWithheld: 6145.28,
  processingFee: 700.42,
  wingspanTopUp: 8224.07,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `clientPaid`           | *number*               | :heavy_check_mark:     | N/A                    |
| `clientRefunded`       | *number*               | :heavy_minus_sign:     | N/A                    |
| `collaboratorPayments` | *number*               | :heavy_check_mark:     | N/A                    |
| `deductions`           | *number*               | :heavy_check_mark:     | N/A                    |
| `memberGross`          | *number*               | :heavy_check_mark:     | N/A                    |
| `memberNet`            | *number*               | :heavy_check_mark:     | N/A                    |
| `memberTaxWithheld`    | *number*               | :heavy_check_mark:     | N/A                    |
| `processingFee`        | *number*               | :heavy_check_mark:     | N/A                    |
| `wingspanTopUp`        | *number*               | :heavy_check_mark:     | N/A                    |