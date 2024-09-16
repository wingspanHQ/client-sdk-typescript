# InvoiceAmountDetails

## Example Usage

```typescript
import { InvoiceAmountDetails } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceAmountDetails = {
  clientPaid: 96.88,
  collaboratorPayments: 2728.22,
  deductions: 8920.5,
  memberGross: 3708.53,
  memberNet: 1334.65,
  memberTaxWithheld: 1970.54,
  processingFee: 7791.92,
  wingspanTopUp: 4598.56,
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