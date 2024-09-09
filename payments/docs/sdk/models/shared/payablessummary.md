# PayablesSummary

## Example Usage

```typescript
import { PayablesSummary } from "@wingspan/payments/sdk/models/shared";

let value: PayablesSummary = {
    invoicesApproved: 3100.67,
    invoicesDraft: 1629.54,
    invoicesOpen: 8315.2,
    invoicesOverdue: 6387.62,
    invoicesPaid: 8070.23,
    invoicesPending: 4903.05,
    memberId: "<value>",
    totalApproved: 6400.24,
    totalOpen: 9894.1,
    totalOverdue: 3681.02,
    totalPaid: 653.04,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invoicesApproved` | *number*           | :heavy_check_mark: | N/A                |
| `invoicesDraft`    | *number*           | :heavy_check_mark: | N/A                |
| `invoicesOpen`     | *number*           | :heavy_check_mark: | N/A                |
| `invoicesOverdue`  | *number*           | :heavy_check_mark: | N/A                |
| `invoicesPaid`     | *number*           | :heavy_check_mark: | N/A                |
| `invoicesPending`  | *number*           | :heavy_check_mark: | N/A                |
| `memberId`         | *string*           | :heavy_check_mark: | N/A                |
| `totalApproved`    | *number*           | :heavy_check_mark: | N/A                |
| `totalOpen`        | *number*           | :heavy_check_mark: | N/A                |
| `totalOverdue`     | *number*           | :heavy_check_mark: | N/A                |
| `totalPaid`        | *number*           | :heavy_check_mark: | N/A                |