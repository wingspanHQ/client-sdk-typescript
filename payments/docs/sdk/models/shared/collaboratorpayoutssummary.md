# CollaboratorPayoutsSummary

## Example Usage

```typescript
import { CollaboratorPayoutsSummary } from "@wingspan/payments/sdk/models/shared";

let value: CollaboratorPayoutsSummary = {
  deductionsCount: 8659.45,
  payablesCount: 4413.21,
  totalDeducted: 4864.10,
  totalPaid: 4483.69,
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