# CreatePayableBatchItemRequest

## Example Usage

```typescript
import { CreatePayableBatchItemRequest } from "@wingspan/payments/sdk/models/operations";

let value: CreatePayableBatchItemRequest = {
    batchId: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `bulkPayableItemCreate`                                                             | [shared.BulkPayableItemCreate](../../../sdk/models/shared/bulkpayableitemcreate.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `batchId`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for a batch                                                       |