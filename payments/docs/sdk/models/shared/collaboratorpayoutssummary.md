# CollaboratorPayoutsSummary

## Example Usage

```typescript
import { CollaboratorPayoutsSummary } from "@wingspan/payments/sdk/models/shared";

let value: CollaboratorPayoutsSummary = {
    deductionsCount: 8286.57,
    payablesCount: 3631.61,
    totalDeducted: 9249.67,
    totalPaid: 3975.33,
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