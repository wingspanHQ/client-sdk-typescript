# InvoiceAmountDetails

## Example Usage

```typescript
import { InvoiceAmountDetails } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceAmountDetails = {
  clientPaid: 8536.06,
  collaboratorPayments: 8894.48,
  deductions: 2201.04,
  memberGross: 6228.94,
  memberNet: 1114.96,
  memberTaxWithheld: 4589.70,
  processingFee: 3223.34,
  wingspanTopUp: 3165.01,
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