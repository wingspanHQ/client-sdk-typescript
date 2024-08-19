# PayablesSummary

## Example Usage

```typescript
import { PayablesSummary } from "@wingspan/payments/sdk/models/shared";

let value: PayablesSummary = {
    invoicesApproved: 3762.26,
    invoicesDraft: 120.36,
    invoicesOpen: 4910.25,
    invoicesOverdue: 1154.84,
    invoicesPaid: 9816.4,
    invoicesPending: 6184.8,
    memberId: "<value>",
    totalApproved: 2446.51,
    totalOpen: 9742.57,
    totalOverdue: 3743.23,
    totalPaid: 9903.45,
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