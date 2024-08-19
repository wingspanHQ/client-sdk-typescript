# InvoiceAmountDetails

## Example Usage

```typescript
import { InvoiceAmountDetails } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceAmountDetails = {
    clientPaid: 3015.98,
    collaboratorPayments: 4879.35,
    deductions: 2621.18,
    memberGross: 4585.15,
    memberNet: 4561.41,
    memberTaxWithheld: 5245.93,
    processingFee: 6832.82,
    wingspanTopUp: 4420.15,
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