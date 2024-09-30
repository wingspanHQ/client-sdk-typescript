# PayablesSummary

## Example Usage

```typescript
import { PayablesSummary } from "@wingspan/payments/sdk/models/shared";

let value: PayablesSummary = {
  invoicesApproved: 8615.91,
  invoicesDraft: 3590.97,
  invoicesOpen: 8877.01,
  invoicesOverdue: 6386.09,
  invoicesPaid: 4299.97,
  invoicesPending: 357.43,
  memberId: "<id>",
  totalApproved: 7701.28,
  totalOpen: 5021.06,
  totalOverdue: 7861.88,
  totalPaid: 7480.23,
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