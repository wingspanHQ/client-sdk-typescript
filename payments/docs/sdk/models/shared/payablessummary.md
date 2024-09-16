# PayablesSummary

## Example Usage

```typescript
import { PayablesSummary } from "@wingspan/payments/sdk/models/shared";

let value: PayablesSummary = {
  invoicesApproved: 6339.31,
  invoicesDraft: 6658.59,
  invoicesOpen: 9268.8,
  invoicesOverdue: 5173.09,
  invoicesPaid: 8539.4,
  invoicesPending: 4240.89,
  memberId: "<value>",
  totalApproved: 4976.78,
  totalOpen: 5546.88,
  totalOverdue: 4278.34,
  totalPaid: 2870.51,
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