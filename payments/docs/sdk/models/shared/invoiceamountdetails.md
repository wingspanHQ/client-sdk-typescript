# InvoiceAmountDetails

## Example Usage

```typescript
import { InvoiceAmountDetails } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceAmountDetails = {
    clientPaid: 4334.39,
    collaboratorPayments: 3799.27,
    deductions: 8268.71,
    memberGross: 1811.51,
    memberNet: 5093.42,
    memberTaxWithheld: 7885.46,
    processingFee: 863.77,
    wingspanTopUp: 568.48,
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