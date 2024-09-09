# InvoiceAppliedDeductions

## Example Usage

```typescript
import { InvoiceAppliedDeductions } from "@wingspan/payments/sdk/models/shared";

let value: InvoiceAppliedDeductions = {
    amount: 4585.15,
    deductionId: "<value>",
    name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `deductionId`      | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `transferId`       | *string*           | :heavy_minus_sign: | N/A                |