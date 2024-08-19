# CollaboratorPayoutsSummary

## Example Usage

```typescript
import { CollaboratorPayoutsSummary } from "@wingspan/payments/sdk/models/shared";

let value: CollaboratorPayoutsSummary = {
    deductionsCount: 4240.89,
    payablesCount: 4976.78,
    totalDeducted: 5546.88,
    totalPaid: 4278.34,
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