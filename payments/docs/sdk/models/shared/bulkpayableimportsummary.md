# BulkPayableImportSummary

## Example Usage

```typescript
import { BulkPayableImportSummary } from "@wingspan/payments/sdk/models/shared";

let value: BulkPayableImportSummary = {
  deductionCollaboratorsCount: 5369.23,
  netImportAmount: 1104.77,
  payableCollaboratorsCount: 4050.36,
  toBeCreatedDeductionsCount: 4053.74,
  toBeCreatedPayablesCount: 3210.43,
  toBeUpdatedDeductionsCount: 299.50,
  toBeUpdatedPayablesCount: 7372.54,
  totalDeductionsAmount: 1097.84,
  totalPayableItems: 6063.08,
  totalPayablesAmount: 7032.17,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `deductionCollaboratorsCount` | *number*                      | :heavy_check_mark:            | N/A                           |
| `netImportAmount`             | *number*                      | :heavy_check_mark:            | N/A                           |
| `payableCollaboratorsCount`   | *number*                      | :heavy_check_mark:            | N/A                           |
| `toBeCreatedDeductionsCount`  | *number*                      | :heavy_check_mark:            | N/A                           |
| `toBeCreatedPayablesCount`    | *number*                      | :heavy_check_mark:            | N/A                           |
| `toBeUpdatedDeductionsCount`  | *number*                      | :heavy_check_mark:            | N/A                           |
| `toBeUpdatedPayablesCount`    | *number*                      | :heavy_check_mark:            | N/A                           |
| `totalDeductionsAmount`       | *number*                      | :heavy_check_mark:            | N/A                           |
| `totalPayableItems`           | *number*                      | :heavy_check_mark:            | N/A                           |
| `totalPayablesAmount`         | *number*                      | :heavy_check_mark:            | N/A                           |