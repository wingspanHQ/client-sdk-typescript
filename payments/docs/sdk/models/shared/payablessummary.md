# PayablesSummary

## Example Usage

```typescript
import { PayablesSummary } from "@wingspan/payments/sdk/models/shared";

let value: PayablesSummary = {
  invoicesApproved: 3006.51,
  invoicesDraft: 8007.99,
  invoicesOpen: 5488.46,
  invoicesOverdue: 4733.26,
  invoicesPaid: 6751.26,
  invoicesPending: 213.59,
  memberId: "<id>",
  totalApproved: 1023.17,
  totalOpen: 2921.77,
  totalOverdue: 9829.90,
  totalPaid: 1397.46,
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