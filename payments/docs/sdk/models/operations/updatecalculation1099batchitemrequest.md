# UpdateCalculation1099BatchItemRequest

## Example Usage

```typescript
import { UpdateCalculation1099BatchItemRequest } from "@wingspan/payments/sdk/models/operations";

let value: UpdateCalculation1099BatchItemRequest = {
  batchId: "<id>",
  batchItemId: "<id>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `bulkCalculation1099ItemUpdate`                                                                     | [shared.BulkCalculation1099ItemUpdate](../../../sdk/models/shared/bulkcalculation1099itemupdate.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `batchId`                                                                                           | *string*                                                                                            | :heavy_check_mark:                                                                                  | Unique identifier for a batch                                                                       |
| `batchItemId`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | Unique identifier for an item in a batch                                                            |