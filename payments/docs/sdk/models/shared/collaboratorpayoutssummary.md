# CollaboratorPayoutsSummary

## Example Usage

```typescript
import { CollaboratorPayoutsSummary } from "@wingspan/payments/sdk/models/shared";

let value: CollaboratorPayoutsSummary = {
  deductionsCount: 9920.12,
  payablesCount: 2415.45,
  totalDeducted: 2494.2,
  totalPaid: 2282.63,
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