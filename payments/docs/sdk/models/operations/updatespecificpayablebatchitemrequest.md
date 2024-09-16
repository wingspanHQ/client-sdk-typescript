# UpdateSpecificPayableBatchItemRequest

## Example Usage

```typescript
import { UpdateSpecificPayableBatchItemRequest } from "@wingspan/payments/sdk/models/operations";

let value: UpdateSpecificPayableBatchItemRequest = {
  batchId: "<value>",
  batchItemId: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `bulkPayableItemUpdate`                                                             | [shared.BulkPayableItemUpdate](../../../sdk/models/shared/bulkpayableitemupdate.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `batchId`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for a batch                                                       |
| `batchItemId`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for an item in a batch                                            |