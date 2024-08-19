# CreateCalculation1099BatchItemRequest

## Example Usage

```typescript
import { CreateCalculation1099BatchItemRequest } from "@wingspan/payments/sdk/models/operations";

let value: CreateCalculation1099BatchItemRequest = {
    batchId: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `bulkCalculation1099ItemCreate`                                                                     | [shared.BulkCalculation1099ItemCreate](../../../sdk/models/shared/bulkcalculation1099itemcreate.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `batchId`                                                                                           | *string*                                                                                            | :heavy_check_mark:                                                                                  | Unique identifier for a batch                                                                       |