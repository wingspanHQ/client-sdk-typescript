# CollaboratorPayoutsSummary

## Example Usage

```typescript
import { CollaboratorPayoutsSummary } from "@wingspan/payments/sdk/models/shared";

let value: CollaboratorPayoutsSummary = {
  deductionsCount: 5023.93,
  payablesCount: 5400.48,
  totalDeducted: 6455.44,
  totalPaid: 3448.57,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `deductionsCount`  | *number*           | :heavy_check_mark: | N/A                |
| `firstPaidDate`    | *string*           | :heavy_minus_sign: | N/A                |
| `lastPaidDate`     | *string*           | :heavy_minus_sign: | N/A                |
| `payablesCount`    | *number*           | :heavy_check_mark: | N/A                |
| `totalDeducted`    | *number*           | :heavy_check_mark: | N/A                |
| `totalPaid`        | *number*           | :heavy_check_mark: | N/A                |